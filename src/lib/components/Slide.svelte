<script>

    export let delay = 0;
    export let duration = 500;
    export let distance = 100;
    export let direction = "in";
    

    $: initialY = direction === "in" ? distance : 0;
    $: finalY = direction === "in" ? 0 : distance;
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
</div>
 
<style>
    .slide-container {
        overflow: hidden;
        display: inline-block;
    }
   
    .slide-content {
        transform: translateY(var(--initial-y));
        animation: slide var(--duration) ease-out var(--delay) forwards;
    }
    
    @keyframes slide {
        0% {
            transform: translateY(var(--initial-y));
        }
        100% {
            transform: translateY(var(--final-y));
        }
    }
</style>