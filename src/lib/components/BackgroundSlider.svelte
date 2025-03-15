<script>
// @ts-nocheck
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let distance = 100;
	export let delay = 0;
	export let duration = 1000;
	let shouldRender = true;
	export let element;

	onMount(() => {

		const background = element.querySelector('.BackgroundSlider-content')
		let tl = gsap.timeline();
		tl.fromTo(background,
		{y: 0 },
		{y: "-100vh",
		 delay: delay,
		 duration: duration
		}
		).then(() => {
			shouldRender = false
		})
	});
</script>

{#if shouldRender}
	<div class="BackgroundSlider" bind:this={element}>
		<div class="BackgroundSlider-content">
			<slot></slot>
		</div>
	</div>
{/if}

<style>
	.BackgroundSlider {
		overflow: hidden;
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: 9999;
	}
	.BackgroundSlider-content {
		height: 100%;
		width: 100%;
	}
</style>
