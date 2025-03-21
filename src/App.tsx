import React, { useRef, useEffect } from 'react';
import '@google/model-viewer';
import './App.css'; // Ujisti se, že máš vlastní styly v tomto souboru

const WatchConfigurator: React.FC = () => {
  const modelRef = useRef<any>(null);

  useEffect(() => {
    const model = modelRef.current;
    if (model) {
      model.addEventListener('load', () => {
        console.log('Model loaded');
      });
    }
  }, []);

  const changeColor = (color: string) => {
    const model = modelRef.current;
    if (model) {
      const material = model.model?.materials[2];
      if (material) {
        material.pbrMetallicRoughness.setBaseColorFactor(getColorFactor(color));
      }
    }
  };

  const getColorFactor = (color: string): [number, number, number, number] => {
    const colors: Record<string, [number, number, number, number]> = {
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
