import React, { useEffect } from "react";
import * as THREE from "three";

export default function Background() {
	useEffect(() => {
		// 3D three.js space worp
		const canvas = document.getElementById(
			"threejscanvas"
		) as HTMLCanvasElement;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			1,
			1000
		);
		camera.position.z = 1;
		camera.position.x = Math.PI / 2;

		let rendender = new THREE.WebGLRenderer();
		rendender.setSize(window.innerWidth, window.innerHeight);
		canvas.appendChild(rendender.domElement);

		let starGeometry = new THREE.BufferGeometry();
		let points: THREE.Vector3[] = [];
		for (let i = 0; i < 2000; i++) {
			let star = new THREE.Vector3();
			star.x = THREE.MathUtils.randFloatSpread(600);
			star.y = THREE.MathUtils.randFloatSpread(600);
			star.z = THREE.MathUtils.randFloatSpread(600);
			points.push(star);
		}
		starGeometry.setFromPoints(points);

		let sprite = new THREE.TextureLoader().load("/assets/star.png");
		let starMaterial = new THREE.PointsMaterial({
			color: 0xaaaaaa,
			size: 0.7,
			map: sprite,
		});

		let stars = new THREE.Points(starGeometry, starMaterial);
		scene.add(stars);

		const animate = () => {
			points.forEach((point, i) => {
				point.y -= 0.75;
				if (point.y < -200) {
					point.y = 200;
				}
			});
			starGeometry.setFromPoints(points);
			stars.rotation.y += 0.002;
			stars.rotation.x = -1.5;

			rendender.render(scene, camera);
			requestAnimationFrame(animate);
		};

		animate();
	}, []);

	return <div className="fixed -z-50" id="threejscanvas" />;
}
