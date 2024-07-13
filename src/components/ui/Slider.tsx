import React, { useState } from "react";

type SliderProps = {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  label?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  handleChange,
  label,
}: SliderProps) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <p className="mt-2 text-lg font-semibold text-gray-700">
        {label}: {value}
      </p>
    </div>
  );
};

export default Slider;
