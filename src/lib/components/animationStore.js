import { writable } from 'svelte/store';
import { gsap } from 'gsap';


export const mainTimeline = gsap.timeline();


export const animationTrigger = writable(0);


export function replayAllAnimations() {
    mainTimeline.restart();
    animationTrigger.update(n => n + 1);
}