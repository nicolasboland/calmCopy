/* import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
import { RenderProps, Nodes, Materials } from './types';

export function Hibrido({ link, ...props }: RenderProps) {
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
          <mesh geometry={nodes.Calm_Hibrido_1.geometry} material={materials['ARRIBA_BASE_TODOS.001']} />
          <mesh geometry={nodes.Calm_Hibrido_2.geometry} material={materials['COSTADO.001']} />
          <mesh geometry={nodes.Calm_Hibrido_3.geometry} material={materials['COSTURA.001']} />
          <mesh geometry={nodes.Calm_Hibrido_4.geometry} material={materials.PUNTOS___Hibrido} />
          <mesh geometry={nodes.Calm_Hibrido_5.geometry} material={materials.LOGO___Hibrido} />
          <mesh geometry={nodes.Calm_Hibrido_6.geometry} material={materials['BASE_ABAJO_FLEJE.001']} />
        </group>
      </group>
    </group>
  )
}
 */