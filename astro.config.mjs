import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HTML Canvas Deep Dive',
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'HTML Canvas Deep Dive',
					items: [
						{ label: 'Overview', slug: '1-html-canvas-deep-dive/overview' },
					],
				},
				{
					label: 'Basic Drawing',
					items: [
						{ label: 'Overview', slug: '2-basic-drawing/overview' },
						{ label: 'What is Canvas', slug: '2-basic-drawing/what-is-canvas' },
						{ label: 'So Where Does it Fit in with the Rest of the Web', slug: '2-basic-drawing/so-where-does-it-fit-in-with-the-rest-of-the-web' },
						{ label: 'Which What When', slug: '2-basic-drawing/which-what-when' },
						{ label: 'Browser Support', slug: '2-basic-drawing/browser-support' },
						{ label: 'Simple Drawing', slug: '2-basic-drawing/simple-drawing' },
						{ label: 'Paths', slug: '2-basic-drawing/paths' },
						{ label: 'Coordinate System', slug: '2-basic-drawing/coordinate-system' },
						{ label: 'Images', slug: '2-basic-drawing/images' },
						{ label: 'Text', slug: '2-basic-drawing/text' },
						{ label: 'Gradients', slug: '2-basic-drawing/gradients' },
					],
				},
				{
					label: 'Hands-on Making Charts',
					items: [
						{ label: 'Overview', slug: '3-hands-on-making-charts/overview' },
						{ label: 'Create a New Page', slug: '3-hands-on-making-charts/create-a-new-page' },
						{ label: 'Add Data', slug: '3-hands-on-making-charts/add-data' },
						{ label: 'Axis Lines and Labels', slug: '3-hands-on-making-charts/axis-lines-and-labels' },
						{ label: 'Piechart', slug: '3-hands-on-making-charts/piechart' },
						{ label: 'Add Some Gradients', slug: '3-hands-on-making-charts/add-some-gradients' },
					],
				},
				{
					label: 'Advanced Drawing and Events',
					items: [
						{ label: 'Overview', slug: '4-advanced-drawing-and-events/overview' },
						{ label: 'Image Fills', slug: '4-advanced-drawing-and-events/image-fills' },
						{ label: 'Opacity', slug: '4-advanced-drawing-and-events/opacity' },
						{ label: 'Transforms', slug: '4-advanced-drawing-and-events/transforms' },
						{ label: 'State Saving', slug: '4-advanced-drawing-and-events/state-saving' },
						{ label: 'Clipping', slug: '4-advanced-drawing-and-events/clipping' },
						{ label: 'Events', slug: '4-advanced-drawing-and-events/events' },
					],
				},
				{
					label: 'Animation',
					items: [
						{ label: 'Overview', slug: '5-animation/overview' },
						{ label: 'Animating with requestAnimationFrame', slug: '5-animation/animating-with-request-animation-frame' },
						{ label: 'Clearing the Background', slug: '5-animation/clearing-the-background' },
						{ label: 'Particle Simulator', slug: '5-animation/particle-simulator' },
						{ label: 'Sprite Animation', slug: '5-animation/sprite-animation' },
					],
				},
				{
					label: 'Making a Game',
					items: [
						{ label: 'Overview', slug: '6-making-a-game/overview' },
						{ label: 'Draw the Spaceship with an Image Sprite', slug: '6-making-a-game/draw-the-spaceship-with-an-image-sprite' },
						{ label: 'Sprite Animation for Bullets and Bombs', slug: '6-making-a-game/sprite-animation-for-bullets-and-bombs' },
						{ label: 'Procedural Graphics for Aliens', slug: '6-making-a-game/procedural-graphics-for-aliens' },
						{ label: 'Particle Simulator for Explosions', slug: '6-making-a-game/particle-simulator-for-explosions' },
					],
				},
				{
					label: 'Pixel Buffers and Other Effects',
					items: [
						{ label: 'Overview', slug: '7-pixel-buffers-and-other-effects/overview' },
						{ label: 'Generative Textures', slug: '7-pixel-buffers-and-other-effects/generative-textures' },
						{ label: 'Add Noise', slug: '7-pixel-buffers-and-other-effects/add-noise' },
						{ label: 'Photo Inversion', slug: '7-pixel-buffers-and-other-effects/photo-inversion' },
						{ label: 'Desaturation', slug: '7-pixel-buffers-and-other-effects/desaturation' },
						{ label: 'Composite Modes', slug: '7-pixel-buffers-and-other-effects/composite-modes' },
						{ label: 'Shadow Effects', slug: '7-pixel-buffers-and-other-effects/shadow-effects' },
					],
				},
				{
					label: '3D Graphics with WebGL and Three.js',
					items: [
						{ label: 'Overview', slug: '8-3d-graphics-with-webgl-and-threejs/overview' },
						{ label: 'Examples', slug: '8-3d-graphics-with-webgl-and-threejs/examples' },
						{ label: 'Browser Support', slug: '8-3d-graphics-with-webgl-and-threejs/browser-support' },
						{ label: 'A Three.js Template', slug: '8-3d-graphics-with-webgl-and-threejs/a-threejs-template' },
						{ label: 'Customizing the Template', slug: '8-3d-graphics-with-webgl-and-threejs/customizing-the-template' },
						{ label: 'Shader Effects', slug: '8-3d-graphics-with-webgl-and-threejs/shader-effects' },
						{ label: 'A Few More Details', slug: '8-3d-graphics-with-webgl-and-threejs/a-few-more-details' },
					],
				},
				{
					label: 'WebGL Hands-on with Three.js 3D Car',
					items: [
						{ label: 'Overview', slug: '9-webgl-hands-on-with-threejs-3d-car/overview' },
						{ label: 'Building a Sky', slug: '9-webgl-hands-on-with-threejs-3d-car/building-a-sky' },
						{ label: 'Adding a Ground Plane', slug: '9-webgl-hands-on-with-threejs-3d-car/adding-a-ground-plane' },
						{ label: 'Adding a Car Model', slug: '9-webgl-hands-on-with-threejs-3d-car/adding-a-car-model' },
						{ label: 'Keyboard Control', slug: '9-webgl-hands-on-with-threejs-3d-car/keyboard-control' },
						{ label: 'Next Steps', slug: '9-webgl-hands-on-with-threejs-3d-car/next-steps' },
					],
				},
				{
					label: 'Intro to WebAudio',
					items: [
						{ label: 'Overview', slug: '10-intro-to-webaudio/overview' },
						{ label: 'Audio Element vs WebAudio', slug: '10-intro-to-webaudio/audio-element-vs-webaudio' },
						{ label: 'Simple Playback', slug: '10-intro-to-webaudio/simple-playback' },
						{ label: 'WebAudio Nodes', slug: '10-intro-to-webaudio/webaudio-nodes' },
						{ label: 'Sound Effects', slug: '10-intro-to-webaudio/sound-effects' },
						{ label: 'Audio Visualization', slug: '10-intro-to-webaudio/audio-visualization' },
						{ label: 'Drawing the Frequencies', slug: '10-intro-to-webaudio/drawing-the-frequencies' },
						{ label: 'Next Steps', slug: '10-intro-to-webaudio/next-steps' },
					],
				},
				{
					label: 'Webcam Access with getUserMedia',
					items: [
						{ label: 'Overview', slug: '11-webcam-access-with-getusermedia/overview' },
						{ label: 'getUserMedia', slug: '11-webcam-access-with-getusermedia/get-user-media' },
						{ label: 'Taking a Snapshot', slug: '11-webcam-access-with-getusermedia/taking-a-snapshot' },
						{ label: 'More Cool Hacks', slug: '11-webcam-access-with-getusermedia/more-cool-hacks' },
					],
				},
				{
					label: 'Real World Examples and Tools',
					items: [
						{ label: 'Overview', slug: '12-real-world-examples-and-tools/overview' },
						{ label: 'Graphs and Charts', slug: '12-real-world-examples-and-tools/graphs-and-charts' },
						{ label: 'Game Engines', slug: '12-real-world-examples-and-tools/game-engines' },
						{ label: 'Drawing Programs', slug: '12-real-world-examples-and-tools/drawing-programs' },
						{ label: 'Custom Fonts', slug: '12-real-world-examples-and-tools/custom-fonts' },
						{ label: 'Tools and Libraries', slug: '12-real-world-examples-and-tools/tools-and-libraries' },
						{ label: 'Visual Tools', slug: '12-real-world-examples-and-tools/visual-tools' },
					],
				},
				{
					label: 'Mobile Devices and Performance Optimization',
					items: [
						{ label: 'Overview', slug: '13-mobile-devices-and-performance-optimization/overview' },
						{ label: 'Draw Less', slug: '13-mobile-devices-and-performance-optimization/draw-less' },
					],
				},
				{
					label: 'Next Steps',
					items: [
						{ label: 'Overview', slug: '14-next-steps/overview' },
					],
				},
			],
		}),
	],
});
