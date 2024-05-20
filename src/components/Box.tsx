import dynamic from 'next/dynamic';
import {useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';
import {MpSdk} from '@matterport/r3f';

// Dynamically import component, otherwise getting error: ReferenceError: self is not defined
// const useMatterportSdk = dynamic(() => import('@matterport/r3f').then((mod) => mod.useMatterportSdk), {ssr: false});
// const mpSdk = (await import('@matterport/r3f')).useMatterportSdk() as MpSdk;

/**
 * Box component. Return the view, these are regular Threejs elements expressed in JSX
 *
 * @param {any} props Attributes. e.g.: position={[1, 0, 0]}
 * @returns {JSX.Element} Component
 * @component
 */
export const Box = (props: any) => {
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current == undefined) {
      return;
    }

    (ref.current as THREE.Mesh).rotation.x += delta;
  });

  // Reference the connected Matterport SDK from within r3f components
  // const mpSdk = useMatterportSdk;
  // console.debug('mpSdk', mpSdk);

  // Event Handler functions
  const onClick = (event) => {
    console.log('clicked');
    click(!clicked);
    //mpSdk.Renderer.takeScreenShot();
  };

  const onPointerOver = (event) => {
    console.log('hover over');
    hover(true);
  };

  const onPointerOut = (event) => {
    console.log('hover out');
    hover(false);
  };

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref} scale={clicked ? 1.5 : 1} onClick={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};
