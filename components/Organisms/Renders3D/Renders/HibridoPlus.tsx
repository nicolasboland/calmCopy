/* import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
import { RenderProps, Nodes, Materials } from './types';

export function HibridoPlus({ link, ...props }: RenderProps) {
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
          <mesh geometry={nodes.Calm_Hibrido___1.geometry} material={materials['ARRIBA_BASE_TODOS.001']} />
          <mesh geometry={nodes.Calm_Hibrido___2.geometry} material={materials.HIBRIDO___02} />
          <mesh geometry={nodes.Calm_Hibrido___3.geometry} material={materials.LOGO___Hibrido_Plus} />
          <mesh geometry={nodes.Calm_Hibrido___4.geometry} material={materials.ABAJO} />
          <mesh geometry={nodes.Calm_Hibrido___5.geometry} material={materials.PUNTOS___Hibrido_Plus} />
          <mesh geometry={nodes.Calm_Hibrido___6.geometry} material={materials['BASE_ABAJO_FLEJE.001']} />
        </group>
      </group>
    </group>
  );
}
 */