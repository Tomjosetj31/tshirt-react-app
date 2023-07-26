import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "aframe";
import "aframe-ar";

const ARScene = () => {
  useEffect(() => {
    // Set up the AR scene
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    // Load the t-shirt model
    const loader = new GLTFLoader();
    loader.load(
      "./lieutenantHead.gltf", // Replace with the path to your t-shirt model
      (gltf) => {
        const tShirtModel = gltf.scene;
        // Scale and position the t-shirt model to fit the AR marker
        tShirtModel.scale.set(0.1, 0.1, 0.1);
        tShirtModel.position.set(0, 0, 0); // Adjust position as needed
        scene.add(tShirtModel);
      },
      undefined,
      (error) => {
        console.error("Error loading the t-shirt model:", error);
      }
    );

    // Set up the AR renderer
    const renderer = new THREE.WebARonARKit();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Render the AR scene
    function render() {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    render();

    // Clean up on component unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    ></a-scene>
  );
};

export default ARScene;
