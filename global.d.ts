declare module 'model-viewer' {
  export interface ModelViewerElement extends HTMLElement {
    src: string;
    alt: string;
    cameraControls: boolean;
    autoRotate: boolean;
    ar: boolean;
    shadowIntensity: number;
  }

  global {
    interface HTMLElementTagNameMap {
      'model-viewer': ModelViewerElement;
    }
  }
}
