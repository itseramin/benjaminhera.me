import * as THREE from 'three'
import React, { useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Poppins = require('../../../static/assets/fonts/poppins_light_regular.json')

export default function Text({ text = 'Default value', position = [0, 0, -10], size = 12, height = 2, }) {
	const mesh = useRef(null)

	const font = new THREE.FontLoader().parse(Poppins);
	const textOptions = {
		font,
		size: size,
		height: height
	};

	useLayoutEffect(() => {
		const size = new THREE.Vector3()
		mesh.current.geometry.computeBoundingBox()
		mesh.current.geometry.boundingBox.getSize(size)
		mesh.current.position.x = -size.x / 2
		mesh.current.position.y = -size.y / 2
	}, [text])

	return (
		<group position={position}>
			<mesh ref={mesh}>
				<textGeometry attach='geometry' args={[text, textOptions]} />
				<meshStandardMaterial attach='material' />
			</mesh>
		</group>
	)
}
