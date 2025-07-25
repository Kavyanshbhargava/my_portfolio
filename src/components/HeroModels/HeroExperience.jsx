import React, {useEffect} from 'react'
import {Canvas, useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const ResizeFix = () => {
    const { gl, size, camera } = useThree();
    useEffect(() => {
        gl.setSize(size.width, size.height);
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
    }, [size, gl, camera]);
    return null;
};

const HeroExperience = () => {
    const isTablet = useMediaQuery({query:"(max-width: 1024px)"});
    const isMobile = useMediaQuery({query:"(max-width: 768px)"});

    return (
        <Canvas camera={{position:[0, 0, 15], fov: 45}}>
            <ResizeFix />
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <HeroLights/>
            <Particles count={200}/>

            <group
                scale = {isMobile ? 0.7 : 1}
                position ={[0, -3.5, 0]}
                rotation ={[0, Math.PI / 4, 0]}
            >
                <Room/>
            </group>

        </Canvas>
    )
}
export default HeroExperience
