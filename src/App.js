import React, { useEffect } from "react";
import "aframe";
import "aframe-ar";

const ARScene = () => {
  useEffect(() => {
    // Load the t-shirt model and add it to the scene
    const modelUrl = "./lietenantHead.gltf"; // Replace with the path to your t-shirt model
    const tShirtModel = document.createElement("a-entity");
    tShirtModel.setAttribute("gltf-model", modelUrl);
    tShirtModel.setAttribute("scale", "0.1 0.1 0.1");
    tShirtModel.setAttribute("position", "0 0 0"); // Adjust position as needed

    // Add the model to the AR marker
    const marker = document.querySelector("a-marker");
    marker.appendChild(tShirtModel);
  }, []);

  return (
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        {/* This is the AR marker that will be used for body detection */}
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

function App() {
  return (
    <div className="App">
      {/* Your other components and UI elements can go here */}
      <ARScene />
    </div>
  );
}

export default App;
