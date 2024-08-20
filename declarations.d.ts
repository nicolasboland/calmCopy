
import "@google/model-viewer/lib/model-viewer";
interface ModelViewerJSX {
    src: string;
    poster?: string;
    iosSrc?: string;
    seamlessPoster?: boolean;
    autoplay?: boolean;
    environmentImage?: string;
    exposure?: string;
    interactionPromptThreshold?: string;
    shadowIntensity?: string;
    ar?: boolean;
    arModes?: string;
    autoRotate?: boolean;
    cameraControls?: boolean;
    cameraOrbit?: string;
    alt?: string;
    sx?: any;
  }

declare global {
    namespace JSX {
      interface IntrinsicElements {
        "model-viewer": ModelViewerJSX &
          React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }