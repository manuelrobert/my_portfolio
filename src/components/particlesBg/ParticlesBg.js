import Particles from 'react-tsparticles';
import React, { Component } from 'react';

import './ParticlesBg.css';

class ParticlesBg extends Component {
    constructor(props) {
        super(props);

        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main) {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    particlesLoaded(container) {
        console.log(container);
    }

    render() {
        return (
            <Particles
            canvasClassName='example'
                id='tsparticles'
                init={this.particlesInit}
                loaded={this.particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: '#ffffff',
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.2,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#098c9c',
                        },
                        links: {
                            color: '#098c9c',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 500,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: true,
                            value: 4,
                        },
                    },
                    detectRetina: true,
                }}
            />
        );
    }
}

export default ParticlesBg;