import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            maxWidth: '100vw',
            height: '100vh',
            zIndex: -1,
          }}
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: 'push' },
                onHover: { enable: true, mode: 'repulse' },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 150, duration: 0.4 },
              },
            },
            particles: {
              color: {
                value: '#ed2218',
              },
              links: {
                color: '#f7655e',
                distance: 120,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: { enable: true, area: 600 },
                value: 80,
              },
              opacity: { value: 0.5 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticleBackground;