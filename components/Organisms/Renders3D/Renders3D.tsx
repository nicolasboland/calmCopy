/* import { IProps } from "./types"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { HibridoPlus } from "./Renders/HibridoPlus";
import { Hibrido } from "./Renders/Hibrido"
import { Original } from "./Renders/Original"
import { OriginalPlus } from "./Renders/OriginalPlus"

import renderLinks from "@/utils/rendersLinks.json"
import { Loader } from "./Loader"

const Renders3D = ({isPlus, product} : IProps) => {
    return (
    <Canvas camera={{ fov: 75, near: 1.9, far: 1100, position: [80, 170, 130] }}>
        <ambientLight intensity={1.4} />
        <pointLight position={[35, 65, 10]} intensity={0.8}/>
        <pointLight position={[-35, 65, 0]} intensity={0.8}/>
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <Suspense fallback={<Loader />}>
           {
            product === "Original" ? 
                isPlus ? <OriginalPlus link={renderLinks.desktop.originalPlus}/> : <Original link={renderLinks.desktop.original}/>
                : 
                product === "Hibrido" &&
                isPlus ? <HibridoPlus link={renderLinks.desktop.hibridoPlus}/> : <Hibrido link={renderLinks.desktop.hibrido}/>
           }
        </Suspense>
        <OrbitControls/>
    </Canvas>
    )
}

export default Renders3D; */