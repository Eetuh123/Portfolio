<template>
  <div class="bg-split-half h-viewport">
    <div class="mx-[80px]">
      <div class="flex flex-wrap justify-start items-center w-full gap-14">
        <div
          v-for="(logo, index) in logos"
          :key="index"
          :ref="setLogoRef"
          :class="logoClasses[index]"
          class="flex w-60 h-60 justify-center items-center rounded-icon-computer hover:w-[30rem] hover:h-[30rem]"
        >
          <img :src="logo.src" :alt="logo.name" class="w-40 h-40" />
          <div class="info"></div>
        </div>
      </div>
      <div
        class="w-full h-[860px] bg-split-half-reverse my-44 rounded-icon-computer flex"
      >
        <div class="p-14 w-1/2">
          <h1 class="mb-8"><span class="text-5xl">Modder</span></h1>
          <p class="text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vestibulum lacus id arcu pulvinar cursus. Fusce vel bibendum tellus.
            Integer a mauris vitae nulla convallis auctor eget ut urna. Nam
            pretium, sapien et aliquam blandit, orci erat volutpat diam, vel
            finibus magna massa sed arcu. Etiam eleifend suscipit posuere.
            Curabitur nibh ipsum, lacinia a felis a, iaculis porta augue. In id
            eleifend ex, aliquam ultrices augue. Nulla mattis varius felis eu
            tempor. Sed a nisl sed ante viverra bibendum blandit id est. Integer
            sodales sapien id cursus interdum. In et sem ut metus auctor tempus
            cursus et est. Vestibulum congue gravida sapien, non dictum magna
            feugiat vitae. Aenean non pharetra libero. Etiam at libero a lorem
          </p>
        </div>
        <div class="bg-green-500 w-1/2 p-14 h-4/5">
          <img class="fill" src="@/assets/Picture3.jpg" />
          <div>
            <p class="text-4xl">Kuva</p>
          </div>
        </div>
      </div>
      <div class="w-full h-[1000px] pb-24">
        <div class="flex items-center">
          <img
            src="@/assets/icons/telephone.svg"
            alt="phone"
            class="w-14 h-14"
          />
          <div class="flex flex-col">
            <p class="text-4xl">Soita</p>
            <p class="text-4xl">+358 44074 2509</p>
          </div>
        </div>
        <div class="flex items-center">
          <img
            src="@/assets/icons/envelope.svg"
            alt="envelope"
            class="w-14 h-14"
          />
          <div class="flex flex-col">
            <p class="text-4xl">Lähetä sähköpostia</p>
            <p class="text-4xl">contact@eetuhuotari.dev</p>
          </div>
        </div>
        <div>
          <p class="text-4xl">Seuraa</p>
          <div class="flex gap-4">
            <img
              src="@/assets/icons/github.svg"
              alt="github"
              class="w-14 h-14"
            />
            <img
              src="@/assets/icons/linkedin.svg"
              alt="linkedin"
              class="w-14 h-14"
            />
          </div>
          <div>
            </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { logosData } from "@/assets/logosData.js";

export default {
  name: "MainPage",
  setup() {
    const logos = ref([]);
    const logoRefs = ref([]);
    const logoClasses = ref([]);

    const setLogoRef = (el) => {
      if (el) logoRefs.value.push(el);
    };

    const calculatePositions = () => {
      logoRefs.value.forEach((logoRef, index) => {
        const rect = logoRef.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        logoClasses.value[index] =
          rect.left + rect.width / 2 < viewportWidth / 2
            ? "bg-white"
            : "bg-dark";
      });
    };

    const logosContext = require.context("@/assets/logos", false, /\.svg$/);
    logosContext.keys().forEach((key) => {
      const fileName = key.replace("./", "").replace(".svg", "");
      const logo = {
        src: logosContext(key),
        name: fileName,
        ...logosData.find((logo) => logo.name === fileName),
      };
      logos.value.push(logo);
    });

    onMounted(() => {
      window.addEventListener("resize", calculatePositions);
      calculatePositions();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", calculatePositions);
    });

    return { logos, setLogoRef, logoClasses };
  },
};
</script>
