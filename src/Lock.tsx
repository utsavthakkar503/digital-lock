import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface IAnimation {
  play: number;
  unlocked: boolean;
  color: string | undefined
}

const Lock: React.FC<IAnimation> = ({ play, unlocked, color }) => {
  const lockControls = useAnimation();
  const lockHandleControls = useAnimation();

  useEffect(() => {
    if (unlocked) {
      lockHandleControls.start("turn");
    }
  }, [lockHandleControls, unlocked]);

  useEffect(() => {
    if (play > 0 && unlocked === false) {
      lockControls.start("shake");
    }
  }, [lockControls, play, unlocked]);

  const lockVariants = {
    shake: {
      x: [-30, 30, 0],
    },
  };

  const lockHandleVariants = {
    turn: {
      y: [-2.5, -15],
      rotateY: 180,
      transition: {
        duration: 0.1,
        repeat: 0,
        ease: "circIn",
      },
    },
  };

  if (color === undefined) {
    color = "#D1D4D4"
  }

  return (
    <div className="svg-wrapper">
      <svg
        width="83"
        height="120"
        viewBox="-41.5 -60 166 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="padlock">
          <motion.g
            initial={false}
            animate={lockControls}
            variants={lockVariants}
            transition={{
              type: "spring",
              repeat: 0,
              repeatType: "mirror",
              duration: 0.1,
              stiffness: 150,
            }}
          >
            <motion.g
              initial={false}
              animate={lockHandleControls}
              variants={lockHandleVariants}
              style={{
                originY: "68px",
                originX: "67px",
              }}
            >
              <path
                id="handle"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.0685 0C60.026 0 74.4828 14.57 74.4828 32.6682V68.9655H65.4789V32.6682C65.4789 19.5968 55.0374 9.07434 42.0685 9.07434C29.096 9.07434 18.6554 19.5968 18.6554 32.6682V57.6947H9.65517V32.6682C9.65517 14.57 24.1128 0 42.0685 0V0Z"
                fill={color}
              />
            </motion.g>
            <rect
              id="lockBase"
              y="52.4138"
              width="82.7586"
              height="67.5862"
              rx="10"
              fill={color}
            />
          </motion.g>
        </g>
      </svg>
    </div>
  );
};

export default Lock;
