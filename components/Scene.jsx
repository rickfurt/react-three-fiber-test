import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import Box from './Box'
import brick1 from '../public/brick.jpg'
import brick2 from '../public/brick2.jpg'

const Scene = () => {
  const textureMap1 = useLoader(TextureLoader, brick1.src)
  const textureMap2 = useLoader(TextureLoader, brick2.src)

  return (
    <>
      <ambientLight/>
      <pointLight position={[10, 10, 10]}/>
      <Box
        position={[-1.2, 0, 0]}
        colorMap={textureMap1}
      />
      <Box
        position={[1.2, 0, 0]}
        colorMap={textureMap2}
      />
    </>
  )
}

export default Scene;