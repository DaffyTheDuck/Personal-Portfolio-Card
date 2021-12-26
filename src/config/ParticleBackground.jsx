import React from 'react';
import Particles from "react-tsparticles";
import PConfig from './particle-config';

export default function ParticleBackground() {
    return (
        <Particles options={PConfig}></Particles>
    )
}
