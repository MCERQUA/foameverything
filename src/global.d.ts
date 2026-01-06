/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThreeElements } from "@react-three/fiber";

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}

declare global {
  namespace React.JSX {
    interface IntrinsicElements extends ThreeElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
