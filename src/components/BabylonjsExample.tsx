import { useEffect } from "react";
import { BasicScene } from "../Examples/BasicScene";

import "../components/BabylonjsExample.css";

function BabylonjsExample() {
  useEffect(() => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    new BasicScene(canvas);
  }, []);

  return (
    <div className="canvasContainer">
      <h3 className="projectTitle">Babylon Examples</h3>
      <canvas className="babylonCanvas" />
    </div>
  );
}

export default BabylonjsExample;
