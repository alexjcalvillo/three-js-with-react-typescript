import * as React from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import * as THREE from 'three';
import five from "../assets/five.png";

// interface IBoxProps {
//     position: Vector3;
// }

export const Box: React.FC<any> = ({ ...props }) => {
    const mesh = React.useRef<any>();
    const [active, setActive] = React.useState<boolean>(false);

    useFrame(() => {
        mesh.current!.rotation.x = mesh.current!.rotation.y += 0.01;
    });

    const texture = React.useMemo(() => {
        new THREE.TextureLoader().load(five);
    }, []);

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
            onClick={(e) => setActive(!active)}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'hotpink'} />
        </mesh>
    );
}

