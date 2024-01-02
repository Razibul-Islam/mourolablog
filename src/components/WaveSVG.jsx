// const WaveSVG = () => {
//   const pulseKeyframes = `
//       @keyframes pulse {
//         0% {
//           transform: scaleY(1);
//           transform-origin: 50% 50%;
//         }
//         50% {
//           transform: scaleY(0.7);
//           transform-origin: 50% 50%;
//         }
//         100% {
//           transform: scaleY(1);
//           transform-origin: 50% 50%;
//         }
//       }
//     `;

//   const waveStyles = {
//     height: "70px",
//     width: "70px",
//     fill: "#fff",
//   };

//   const lineStyles = [...Array(9)].map((_, i) => ({
//     animation: `pulse 1s infinite`,
//     animationDelay: `${i * 0.15}s`,
//   }));

//   return (
//     <svg
//       id="wave"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 50 38.05"
//       style={{ ...waveStyles, animation: pulseKeyframes }}
//     >
//       {/* Inject the keyframes directly into the style tag */}
//       <style>{pulseKeyframes}</style>

//       {[...Array(9)].map((_, i) => (
//         <path
//           key={i + 1}
//           id={`Line_${i + 1}`}
//           data-name={`Line ${i + 1}`}
//           d={`M${6 * (i + 1) - 5}.91,37l-0.12,0A1,1,0,0,0,${
//             6 * i
//           },38V1a1,1,0,1,0,2,0s0,0,0,0V38a1,1,0,0,0-1-1H${6 * (i + 1) - 0.09}Z`}
//           style={lineStyles[i]}
//         />
//       ))}
//     </svg>
//   );
// };

// export default WaveSVG;

// import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const WaveSVG = ({ isWaveActive }) => {

  const pulseKeyframes = `
    @keyframes pulse {
      0% {
        transform: scaleY(1);
        transform-origin: 50% 50%;
      }
      50% {
        transform: scaleY(0.7);
        transform-origin: 50% 50%;
      }
      100% {
        transform: scaleY(1);
        transform-origin: 50% 50%;
      }
    }
  `;

  const waveStyles = {
    height: "70px",
    width: "70px",
    fill: "#fff",
    animation: isWaveActive ? "pulse 1s infinite" : "none",
  };

  const lineStyles = [...Array(9)].map((_, i) => ({
    animation: isWaveActive ? `pulse 1s infinite ${i * 0.15}s` : "none",
  }));

  return (
    <div>
      <svg
        id="wave"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 38.05"
        style={waveStyles}
      >
        <style>{pulseKeyframes}</style>

        {[...Array(9)].map((_, i) => (
          <path
            key={i + 1}
            id={`Line_${i + 1}`}
            data-name={`Line ${i + 1}`}
            d={`M${6 * (i + 1) - 5}.91,37l-0.12,0A1,1,0,0,0,${
              6 * i
            },38V1a1,1,0,1,0,2,0s0,0,0,0V38a1,1,0,0,0-1-1H${
              6 * (i + 1) - 0.09
            }Z`}
            style={lineStyles[i]}
          />
        ))}
      </svg>
    </div>
  );
};

export default WaveSVG;
