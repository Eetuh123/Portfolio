<script>
    export let delay = 0;
    export let duration = 500;
    export let distance = 80;
  </script>
  
  <div class="slide-up-container">
    <div class="slide-up-content" style="--delay: {delay}ms; --duration: {duration}ms; --distance: {distance}px;">
      <slot></slot>
    </div>
  </div>
  
  <style>
    .slide-up-container {
      overflow: hidden;
      display: inline-block;
    }
    
    .slide-up-content {
      transform: translateY(var(--distance));
      animation: slideUp var(--duration) ease-out var(--delay) forwards;
    }
    
    @keyframes slideUp {
      0% {
        transform: translateY(var(--distance));
      }
      100% {
        transform: translateY(0);
      }
    }
  </style>