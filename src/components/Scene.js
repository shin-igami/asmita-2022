import React, { useState, useEffect, useRef, Suspense } from "react"
import * as THREE from "three"
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber"
import { OrbitControls, shaderMaterial } from "@react-three/drei"
import glsl from "babel-plugin-glsl/macro"

const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
    uMouse: new THREE.Vector2(0, 0),
  },
  // Vertex Shader
  glsl`
    precision mediump float;

    uniform float uTime;
    uniform vec2 uMouse;

    varying vec2 vUv;
    
    void main(){
      vUv = uv;

      vec3 pos = position;
      float freq = 20.;
      float amp =  30.;
      float timeFactor = uTime * 0.1 + abs(uMouse.x) + abs(uMouse.y);
      pos.z = (sin((uv.x +  timeFactor) * (freq ) * 0.4) + sin((uv.y  + timeFactor) * (freq ) * 0.4 )) * (amp);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform vec2 uMouse;

    varying vec2 vUv;

    void main(){     
      gl_FragColor = vec4(vUv.x , vUv.y , 1.,1.0);
    }
  `
)

extend({ WaveShaderMaterial })

const Wave = () => {
  const [mouse, setMouse] = useState(new THREE.Vector2(0, 0))
  const shaderMaterialRef = useRef()
  useFrame(
    ({ clock }) => (shaderMaterialRef.current.uTime = clock.getElapsedTime())
  )
  window.addEventListener("mousemove", e => {
    let mouseX = (e.offsetX / window.innerWidth - 0.5) * 2
    let mouseY = (e.offsetY / window.innerHeight - 0.5) * -2

    setMouse(mouseX, mouseY)
  })

  return (
    <mesh position={[0, -300, 0]} rotation={[-Math.PI / 4, 0, 0]}>
      <planeBufferGeometry
        args={[window.innerWidth * 1.5, window.innerHeight, 20, 20]}
      />
      <waveShaderMaterial
        ref={shaderMaterialRef}
        uColor={"hotpink"}
        uMouse={new THREE.Vector2(mouse)}
        wireframe={true}
      />
    </mesh>
  )
}

const SphereShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;

    uniform float uTime;
    uniform vec2 uMouse;

    varying vec2 vUv;
    
    void main(){
      vUv = uv;

      vec3 pos = position;
      pos.x += sin((uTime * 0.4 + position.x)) * 2. ;
    
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform vec2 uMouse;


    varying vec2 vUv;

    void main(){
     
      gl_FragColor = vec4(vUv.x , vUv.y , 1.,1.0);
    }
  `
)

extend({ SphereShaderMaterial })

function Sphere({ posX, speedY, rotateX, rotateZ }) {
  const shaderMaterialRef = useRef()
  const sphereMeshRef = useRef()
  useFrame(
    ({ clock }) => (shaderMaterialRef.current.uTime = clock.getElapsedTime())
  )

  useFrame(() => (sphereMeshRef.current.rotation.x += rotateX))
  useFrame(() => (sphereMeshRef.current.rotation.z += rotateZ))
  useFrame(() => (sphereMeshRef.current.position.y += speedY))

  return (
    <mesh ref={sphereMeshRef} position={[posX, -400, posX]}>
      <sphereBufferGeometry attach="geometry" args={[50, 50]} />
      <sphereShaderMaterial ref={shaderMaterialRef} />
    </mesh>
  )
}

export default function Scene() {
  const [fov, setFov] = useState(
    (2 * (Math.atan(window.innerHeight / 2 / 600) * 180)) / Math.PI
  )
  const [aspect, setAspect] = useState(window.innerWidth / window.innerHeight)
  window.addEventListener("resize", () => {
    setFov((2 * (Math.atan(window.innerHeight / 2 / 600) * 180)) / Math.PI)
    setAspect(window.innerWidth / window.innerHeight)
  })

  const [spheres, setSpheres] = useState([])

  //   function generateSphere() {
  //     if (spheres.length < 5) {
  //       for (let i = 0; i < (Math.random() + 0.2) * 5; i++) {
  //         console.log("generated")
  //         spheres.push(
  //           <Sphere
  //             key={i}
  //             posX={(Math.random() - 0.5) * window.innerWidth}
  //             rotateX={Math.random() * 0.01}
  //             rotateZ={Math.random() * 0.01}
  //             speedY={Math.random() + 0.3}
  //           />
  //         )
  //       }
  //     }
  //     setInterval(() => {
  //       setSpheres([])
  //     }, 35000)
  //   }
  //   generateSphere()

  return (
    <div className="canvas">
      <Canvas
        camera={{
          fov: fov,
          near: 0.1,
          far: 1000,
          position: [0, 0, 600],
          aspect: aspect,
        }}
      >
        <Suspense fallback={null}>
          <Wave />
          <>
            {spheres.map(sphere => {
              return sphere
            })}
          </>
        </Suspense>
      </Canvas>
    </div>
  )
}
