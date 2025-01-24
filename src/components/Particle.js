// import React from "react";
// import Particles from "react-tsparticles";

// function Particle() {
//   return (
//     <Particles
//       id="tsparticles"
//       params={{
//         particles: {
//           number: {
//             value: 160,
//             density: {
//               enable: true,
//               value_area: 1500,
//             },
//           },
//           line_linked: {
//             enable: false,
//             opacity: 0.03,
//           },
//           move: {
//             direction: "right",
//             speed: 0.05,
//           },
//           size: {
//             value: 1,
//           },
//           opacity: {
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.05,
//             },
//           },
//         },
//         interactivity: {
//           events: {
//             onclick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             push: {
//               particles_nb: 1,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }

// export default Particle;

import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          shape: {
            type: "circle", // You can change the particle shape as needed
          },
          size: {
            value: 4, // You can increase the size of the particles to make them more visible
          },
          opacity: {
            value: 0.7,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          move: {
            enable: true,
            speed: 1, // Speed of the particles
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 600,
            },
          },
          line_linked: {
            enable: false, // Disable lines between particles
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Repulsion on hover
            },
            onClick: {
              enable: true,
              mode: "push", // Push particles on click
            },
          },
          modes: {
            repulse: {
              distance: 100, // Repulsion distance on hover
            },
            push: {
              particles_nb: 4, // Number of particles to add on click
            },
          },
        },
        background: {
          image: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // Set gradient background
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover", 
        },
        retina_detect: true, 
        fullScreen: {
          enable: false, 
        },
        threejs: {
          enable: true,
          mode: "webgl2", // Use webgl2 for better performance
          max_particles: 5000, // Max number of particles
          depth: 50, // Depth of particles for 3D effect
        },
      }}
    />
  );
}

export default Particle;
