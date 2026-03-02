/**
 * GLTFLoader with Draco support for use with R3F useLoader(LoaderClass, url).
 * Use the class (not an instance) with useLoader and useLoader.preload.
 * For best performance: convert models to .glb with Draco, then set URLs to scene.glb.
 */
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const DRACO_DECODER_PATH =
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/";

class GLTFLoaderWithDraco extends GLTFLoader {
  constructor() {
    super();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(DRACO_DECODER_PATH);
    this.setDRACOLoader(dracoLoader);
  }
}

export default GLTFLoaderWithDraco;
