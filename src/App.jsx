import React, { useRef, useEffect } from 'react';
import '@google/model-viewer';
import './App.css'; 

const WatchConfigurator = () => {
  const modelRef = useRef(null);

  useEffect(() => {
    const model = modelRef.current;
    if (model) {
      model.addEventListener('load', () => {
        console.log('Model loaded');
      });
    }
  }, []);

  const changeColor = (color) => {
    const model = modelRef.current;
    if (model) {
      const material = model.model?.materials[2];  // Make sure the material index is correct
      if (material) {
        material.pbrMetallicRoughness.setBaseColorFactor(getColorFactor(color));
      }
    }
  };

  const getColorFactor = (color) => {
    const colors = {
      black: [0, 0, 0, 1],
      brown: [0.6, 0.3, 0.1, 1],
      blue: [0, 0, 1, 1],
      red: [1, 0, 0, 1],
    };
    return colors[color] || [1, 1, 1, 1];
  };

  return (
    <div className="watch-configurator">
      <h3 className="title">3D Konfigurátor pásku</h3>
      <model-viewer
        ref={modelRef}
        src="https://cdn.jsdelivr.net/gh/phovorka/GLB/watch1.glb"
        camera-controls
        auto-rotate
      ></model-viewer>
      <div className="color-picker">
        {['black', 'brown', 'blue', 'red'].map((color) => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => changeColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default WatchConfigurator;
