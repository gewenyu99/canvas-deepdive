import Slider from "./ui/Slider";

import React, { useEffect, useRef, useState } from "react";

const RedSquareWithResize: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [w, setW] = useState(50);
  const [h, setH] = useState(50);

  const draw = (ctx: {
    fillStyle: string;
    fillRect: (arg0: number, arg1: number, arg2: number, arg3: number) => void;
  }) => {
    ctx.clearRect(0, 0, 200, 200);
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, w, h);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    //Our draw come here
      draw(context );
  }, [draw]);

  return (
    <div>
      <canvas ref={canvasRef} height={200} width={200} />
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
      >
        <div>
          <Slider
            min={0}
            max={100}
            step={1}
            value={x}
            label="X"
            handleChange={(event) => {
              setX(parseInt(event.target.value));
            }}
          />
        </div>
        <div>
          <Slider
            min={0}
            max={100}
            step={1}
            value={y}
            label="Y"
            handleChange={(event) => {
              setY(parseInt(event.target.value));
            }}
          />
        </div>
        <div>
          <Slider
            min={0}
            max={100}
            step={1}
            value={w}
            label="Width"
            handleChange={(event) => {
              setW(parseInt(event.target.value));
            }}
          />
        </div>
        <div>
          <Slider
            min={0}
            max={100}
            step={1}
            value={h}
            label="Height"
            handleChange={(event) => {
              setH(parseInt(event.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RedSquareWithResize;
