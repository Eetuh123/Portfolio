<script>
// @ts-nocheck
    import { onMount } from "svelte";
    import gsap from 'gsap';
    import { mainTimeline, animationTrigger, DevAnimations, DesAnimations } from './animationStore.js';
    
    export let animationKey = '';
    const animationStores = {
    'Dev': DevAnimations,
    'Des': DesAnimations,
    '': animationTrigger
    };
    export let delay = 0;
    export let duration = 0.5;
    export let distance = 100;
    export let direction = "in";
    export let element;

    let tl;

    $: initialY = direction === "in" ? distance : 0;
    $: finalY = direction === "in" ? 0 : distance;


    onMount(() => {
        const positionS = element.getBoundingClientRect();
        let s = (positionS.top + window.scrollY) / 1000;
        const content = element.querySelector('.slide-content');

        tl = gsap.timeline({ paused: true });

        tl.fromTo(content, 
      { y: initialY },
      { 
        y: finalY, 
        duration: duration,
        delay: delay,
        ease: "power2.out"
      }
    );

    const unsubscribe = animationStores[animationKey].subscribe(() => {
        tl.restart();
    });

    tl.play();

    return () => {
        if (unsubscribe) unsubscribe();
    };
    });


    export function repeatAnimation() {
        if (tl) {

        tl.restart();
        }
    }
    export function replayAllAnimations() {
        mainTimeline.restart();
    }
    export function toggleDirection() {
        direction = direction === "in" ? "out" : "in";
        
        if (tl) {
        tl.kill();
        
        const content = element.querySelector('.slide-content');
        tl = gsap.timeline();
        tl.fromTo(content, 
            { y: initialY }, 
            { y: finalY, duration, ease: "power2.out" }
        );
        }
    }
</script>
 

<div class="slide-container" bind:this={element}>
    <div class="slide-content">
      <slot></slot>
    </div>
  </div>
 
<style>
    .slide-container {
        overflow: hidden;
        display: inline-block;
    }
</style>