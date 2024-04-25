import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb"

const Bird = () =>{
  const birdRef = useRef()

  //Load 3d model and animations
  const { scene, animations} = useGLTF(birdScene)
  //Get animations for the bird
  const { actions } = useAnimations(animations, birdRef)

  //Take 001 --> play animation when the component mounts
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() =>{
    actions['Take 001'].play()
  },[])

  useFrame(({clock, camera}) =>{
    //Update the Y position to simulate bird-like motion using a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    //Check if the bird reached a certain endpoint relative to the camera
    if(birdRef.current.position.x > camera.position.x + 10){
      //Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI
    }else if (birdRef.current.position.x < camera.position.x - 10){
      //Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0
    }
    //Update the x and z positions based on the direction
    if(birdRef.current.rotation.y === 0){
      //Moving forward
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01
    }else{
      //Moving backward
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  return(
    //to create and display 3d objects
    <mesh
      ref={birdRef}
      position={[-5, 2, 1]}
      scale={[0.003, 0.003, 0.003]}>
        <primitive object={scene} />
      </mesh>
  )
}

export default Bird