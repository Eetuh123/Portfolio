<template>
  <div class="bg-split-half h-screen">
    <div class="flex flex-wrap justify-start items-center w-full">
      <div
        v-for="(logo, index) in logos"
        :key="index"
        :ref="setLogoRef"
        :class="logoClasses[index]"
        class="flex w-60 h-60 justify-center items-center rounded-icon-computer"
      >
        <img :src="logo.src" :alt="logo.name" class="w-40 h-40" />
        <div class="info">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue"
import { logosData } from "@/assets/logosData.js"

export default {
  name: "MainPage",
  setup() {
    const logos = ref([])
    const logoRefs = ref([])
    const logoClasses = ref([])

    const setLogoRef = (el) => {
      if (el) logoRefs.value.push(el)
    };

    const calculatePositions = () => {
      logoRefs.value.forEach((logoRef, index) => {
        const rect = logoRef.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        logoClasses.value[index] =
          rect.left + rect.width / 2 < viewportWidth / 2
            ? "bg-white"
            : "bg-dark"
      });
    };


    const logosContext = require.context('@/assets/logos', false, /\.svg$/)
    logosContext.keys().forEach((key) => {
      const fileName = key.replace('./', '').replace('.svg', '')
      const logo = {
        src: logosContext(key),
        name: fileName,
        ...logosData.find(logo => logo.name === fileName),
      };
      logos.value.push(logo)
    });

    onMounted(() => {
      window.addEventListener("resize", calculatePositions)
      calculatePositions()
    })

      onUnmounted(() => {
    window.removeEventListener("resize", calculatePositions)
  })

    return { logos, setLogoRef, logoClasses }
  },
};
</script>