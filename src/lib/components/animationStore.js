// @ts-nocheck
import { writable } from 'svelte/store';
import { gsap } from 'gsap';

export const mainTimeline = gsap.timeline();

export const animationTrigger = writable(0);
export const DevAnimations = writable(0);
export const DesAnimations = writable(0);

export function replayAnimations(animationType) {
    console.log('waddup', animationType)
    if (animationType === 'Dev')
        DevAnimations.update(n => n + 1);
    else {
        DesAnimations.update(n => n + 1); 
    }

}

export function replayAllAnimations() {
    animationTrigger.update(n => n + 1);
    DevAnimations.update(n => n + 1);
    DesAnimations.update(n => n + 1);
}