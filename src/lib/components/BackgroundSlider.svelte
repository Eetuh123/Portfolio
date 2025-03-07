<script>
  export let distance = 100; // Default to full screen height
  export let delay = 0;
  export let duration = 1000; // Default 1 second animation
</script>

<div class="slide-container">
  <div 
    class="slide-content" 
    style="
      --delay: {delay}ms; 
      --duration: {duration}ms; 
      --initial-y: {initialY}px;
      --final-y: {finalY}px;
    ">
      <slot></slot>
  </div>

<style>
   .BackgroundSlider {
     overflow: hidden;
     position: fixed; /* Fixed position to cover the entire viewport */
     width: 100%;
     height: 100vh;
     top: 0;
     left: 0;
     z-index: 9999; /* High z-index to stay on top of everything */
   }
  
   .BackgroundSlider-content {
     width: 100%;
     height: 100%;
     transform: translateY(0); /* Start at normal position */
     animation: slideUp var(--duration) ease-out var(--delay) forwards;
   }
  
   @keyframes slideUp {
     0% {
       transform: translateY(0); /* Start at normal position */
     }
     100% {
       transform: translateY(calc(-1 * var(--distance))); /* Move up and out of view */
     }
   }
</style>