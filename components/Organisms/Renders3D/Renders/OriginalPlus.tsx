/* import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
import { RenderProps, Nodes, Materials } from './types';

export function OriginalPlus({ link, ...props }: RenderProps) {
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
          <mesh geometry={nodes.CalmOriginal__1.geometry} material={materials.COSTADO___} />
          <mesh geometry={nodes.CalmOriginal__2.geometry} material={materials.ORIGINAL02_TELA} />
          <mesh geometry={nodes.CalmOriginal__3.geometry} material={materials.ARRIBA_BASE_TODOS} />
          <mesh geometry={nodes.CalmOriginal__4.geometry} material={materials.PUNTOS____ORIGINAL_PLUS} />
          <mesh geometry={nodes.CalmOriginal__5.geometry} material={materials.Logo____ORIGINAL_PLUS} />
          <mesh geometry={nodes.CalmOriginal__6.geometry} material={materials.BASE_ABAJO_FLEJE} />
        </group>
      </group>
    </group>
  )
}

 */