import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Scene from "../components/Scene";

export default function Home() {

  return (
    <Canvas style={{
      width: '100vw',
      height: '100vh'
    }}
    >
      <Suspense fallback={null}>
        <Scene/>
      </Suspense>
    </Canvas>
  )
}
