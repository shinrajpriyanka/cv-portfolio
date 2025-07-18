import React from 'react';
import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
      <spotLight position={[2, 1, 6]}
      intensity={100}
      angle={0.3}
      penumbra={0.5}
      color="white"/>
      <spotLight position={[4, 5, 4]}
      intensity={40}
      angle={0.3}
      penumbra={1}
      color="#4cc9f0"/>
      <spotLight position={[-3, 5, 5]}
      intensity={60}
      angle={0.6}
      color="#9d4edd"/>
       <primitive object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)} position={[1, 1, 3]} intensity={15} rotation={[Math.PI / 4,Math.PI / 4, 0]}/>
       <pointLight  position={[0, 1, 0]} intensity={10} color="#7209b7" penumbra={0.5}/>
       <pointLight  position={[1, 2, -2]} intensity={10} color="#0d00a4" penumbra={0.5}/>
    </>
  )
}

export default HeroLights
