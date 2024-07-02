"use client";

import React from "react";

export const RangeHeadlessSkeleton: React.FC = () => {
  return (
    <>
      <style>
        {`@keyframes mymove {
                0%: {
                    left: 0%;
                    width: 25%;
                },
                50%: {
                    left: 30px;
                    width: 400px;
                }
                100%: {
                    left: 100%;
                    width: 25%;
                }
            }`}
      </style>
      <div style={{ width: "100%", height: "20px" }}>
        <div
          style={{
            height: "5px",
            animation: "mymove 1s infinite",
            position: "absolute",
            backgroundColor: "black",
            content: "",
          }}
        ></div>
      </div>
    </>
  );
};
