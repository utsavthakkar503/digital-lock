import React from "react";
import { motion } from "framer-motion";

const Lock: React.FC = () => {
  return (
    <div className="svg-wrapper">
      {/* <svg
        width="100"
        height="100"
        viewBox="-50 -50 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="lock">
            
        <motion.g animate={{
            x: [-30, 0, 50, 35, 25, 15, 25],    
        }}
        transition={{
            duration: 0.85,
            ease: "linear",
            repeatDelay: 2
        }}
        >
          <rect id="lockBase" y="38" width="65" height="51" fill="#C4C4C4" />
          <g id="lockHandle">
            <path
              id="Vector 1"
              d="M11.5323 37.6452C11.5323 21.3511 15.7258 2 32.5 2C49.2742 2 53.4678 21.3511 53.4678 37.6452"
              stroke="#C4C4C4"
              strokeWidth="4"
            />
          </g>
        </motion.g>
        </g>
      </svg> */}
      <svg
        width="83"
        height="120"
        viewBox= "-41.5 -60 166 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="padlock">
          <path
            id="handle"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.0685 0C60.026 0 74.4828 14.57 74.4828 32.6682V68.9655H65.4789V32.6682C65.4789 19.5968 55.0374 9.07434 42.0685 9.07434C29.096 9.07434 18.6554 19.5968 18.6554 32.6682V57.6947H9.65517V32.6682C9.65517 14.57 24.1128 0 42.0685 0V0Z"
            fill="#D1D5D5"
          />
          <rect
            id="lockBase"
            y="52.4138"
            width="82.7586"
            height="67.5862"
            rx="3"
            fill="#D1D5D5"
          />
        </g>
      </svg>
    </div>
  );
};

export default Lock;
