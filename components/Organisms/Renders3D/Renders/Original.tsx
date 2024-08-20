/* import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
import { RenderProps, Nodes, Materials } from './types';

export function Original({ link, ...props }: RenderProps) {
  const gltfResult = useGLTF(link) as any;

  const nodes = gltfResult.nodes as Nodes;
  const materials = gltfResult.materials as Materials;
  
  useEffect(() =>{
    useGLTF.preload(link)
  }, [])

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 1.622]} rotation={[0, 0, Math.PI]}>
          <mesh geometry={nodes.Calm_Original_1.geometry} material={materials.ARRIBA_BASE_TODOS} />
          <mesh geometry={nodes.Calm_Original_2.geometry} material={materials.LOGO} />
          <mesh geometry={nodes.Calm_Original_3.geometry} material={materials.COSTADO} />
          <mesh geometry={nodes.Calm_Original_4.geometry} material={materials.PUNTOS} />
          <mesh geometry={nodes.Calm_Original_5.geometry} material={materials.COSTURA} />
          <mesh geometry={nodes.Calm_Original_6.geometry} material={materials.BASE_ABAJO_FLEJE} />
        </group>
      </group>
    </group>
  )
}

 */