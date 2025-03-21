declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLProps<HTMLElement>, HTMLElement> & {
        src: string;
        alt: string;
        cameraControls?: boolean;
        autoRotate?: boolean;
        ar?: boolean;
        shadowIntensity?: number;
      };
    }
  }
}

