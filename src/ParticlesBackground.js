import "./App.css";
import Particles from "react-tsparticles";
import { particlesConfig } from "./config/particles-config";

export const ParticlesBackground = () => {
    return <Particles options={particlesConfig} />;
};
