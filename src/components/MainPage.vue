<template>
  <div class="bg-split-half h-viewport">
    <div class="mx-[80px]">
      <div class="flex flex-wrap justify-start items-center w-full gap-14">
        <div
          v-for="(logo, index) in logos"
          :key="index"
          :ref="setLogoRef"
          :class="logoColorClasses[index]"
          class="flex w-60 h-60 justify-center items-center rounded-icon-computer relative z-12 "
        >
        <img :src="logo.src" :alt="logo.name" class="w-40 h-40" />

          <div :class="logoAnimationClasses[index]" class="absolute bg-green-200 h-full rounded-icon-computer w-full z-0 top-0 hover:w-[225%] hover:h-[225%]"></div>
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
      <div class="w-full h-[800px] pb-24 flex">
        <div class="w-1/2 text-white space-y-14">
          <h1 class="text-5xl">Yhteystiedot</h1>
          <div class="flex items-center">
            <img
              src="@/assets/icons/telephone.svg"
              alt="phone"
              class="w-14 h-14 mr-3"
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
              class="w-14 h-14 mr-3"
            />
            <div class="flex flex-col">
              <p class="text-4xl">Lähetä sähköpostia</p>
              <p class="text-4xl">contact@eetuhuotari.dev</p>
            </div>
          </div>
          <div>
            <p class="text-4xl mb-4">Socials</p>
            <div class="flex gap-6">
              <div
                class="w-20 h-20 bg-white rounded-full flex items-center justify-center"
              >
              <a href="https://github.com/Eetuh123">
                <img
                  src="@/assets/icons/github.svg"
                  alt="github"
                  class="w-16 h-16"
                />
              </a>
              </div>
              <div
                class="w-20 h-20 bg-white rounded-full flex items-center justify-center"
              >
              <a href="https://www.linkedin.com/in/eetu-huotari-594106238/">
                <img
                  src="@/assets/icons/linkedin.svg"
                  alt="linkedin"
                  class="w-16 h-16"
                />
              </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex">
          <div class="w-full pl-12">
            <form class="flex flex-col" @submit.prevent="sendEmail">
              <input
                v-model="form.email"
                class="bg-dark text-white rounded-icon-computer p-10 mb-12"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                v-model="form.name"
                class="bg-dark text-white rounded-icon-computer p-10 mb-10"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                v-model="form.subject"
                class="bg-dark text-white rounded-icon-computer p-10 mb-12"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <div class="flex">
                <textarea
                  v-model="form.message"
                  class="bg-dark text-white rounded-icon-computer pl-10 p-6 mr-12 flex-1"
                  name="message"
                  placeholder="Message"
                ></textarea>
                <input
                  type="submit"
                  value="Send"
                  class="flex-initial bg-dark text-white rounded-icon-computer px-10 py-20 c"
                  style="width: auto"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { logosData } from "@/assets/logosData.js";
import emailjs from "@emailjs/browser";

export default {
  name: "MainPage",
  setup() {
    const logos = ref([]);
    const logoRefs = ref([]);
    const logoColorClasses = ref([]);
    const logoAnimationClasses = ref([]);
    const form = ref({
      email: "",
      name: "",
      subject: "",
      message: "",
    });

    const setLogoRef = (el) => {
      if (el) logoRefs.value.push(el);
    };

    const calculateColorClasses = () => {
      logoRefs.value.forEach((logoRef, index) => {
        const rect = logoRef.getBoundingClientRect();
        const midpoint = window.innerWidth / 2;
        logoColorClasses.value[index] = rect.left + rect.width / 2 < midpoint ? "bg-white" : "bg-dark";
      });
    };

    const calculateAnimationClasses = () => {
      logoRefs.value.forEach((logoRef, index) => {
        const rect = logoRef.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const midPoint = viewportWidth / 2;
        const center = rect.left + rect.width / 2;

        const threshold = viewportWidth * 0.10;

        const distanceFromLeftEdge = rect.left;
        const distanceFromRightEdge = viewportWidth - (rect.left + rect.width);

        const isRightHalf = center >= midPoint;
        const isLeftHalf = !isRightHalf;

        const closeToLeftWall = distanceFromLeftEdge <= threshold;
        const closeToRightWall = distanceFromRightEdge <= threshold;

        if (isRightHalf) {
          if (closeToRightWall) {
            logoAnimationClasses.value[index] = "hover:animate-growreverse right-0 hover:right-0";
          } else {
            logoAnimationClasses.value[index] = "hover:animate-grow left-0 hover:left-0";
          }
        } else if (isLeftHalf) {
          if (closeToLeftWall) {
            logoAnimationClasses.value[index] = "hover:animate-grow left-0 hover:left-0";
          } else {

            logoAnimationClasses.value[index] = "hover:animate-growreverse right-0 hover:right-0";
          }
        }
      });
    };
  
    const sendEmail = async () => {
      try {
        const result = await emailjs.sendForm(
          "service_358tl3q",
          "template_hzup9em",
          form.value,
          "t8hd8mfRQtp1tgD1H"
        );
        console.log(result.text);
      } catch (error) {
        console.error(error.text);
      }
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

    const updateLogoClasses = () => {
      calculateColorClasses();
      calculateAnimationClasses();
    };

    onMounted(() => {
      window.addEventListener("resize", updateLogoClasses);
      updateLogoClasses();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateLogoClasses);
    });

    return { logos, setLogoRef, logoColorClasses, logoAnimationClasses, sendEmail, form };
  },
};
</script>
<style scoped>

</style>
