<template>
  <div
    ref="mainPageRef"
    class="bg-split-half font-raleway overflow-x-hidden"
  >
    <div class="mx-[2.5%] xl:mx-[5%] pt-20">
      <div class="bg-zinc-500 w-1/2"></div>
      <!-- Lang button holder -->
      <div class="w-full flex justify-end items-center cursor-pointer">
        <div
          class="bg-dark flex rounded-icon-computer items-center justify-center w-32 h-12 relative"
          @click="toggleLanguage"
        >
          <p class="font-extrabold text-slate-100">
            {{ isEnglish ? "ENG" : "FIN" }}
          </p>
          <div
            :class="{
              'transform-left': !isEnglish,
              'transform-right': isEnglish,
            }"
            class="absolute ease-in-out duration-300 transition-transform"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="#E1E1E1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9999 4.80005C11.6052 4.80005 4.79989 11.6053 4.79989 20.0001C4.79989 28.3947 11.6052 35.2 19.9999 35.2C28.3947 35.2 35.2 28.3947 35.2 20.0001C35.2 11.6053 28.3947 4.80005 19.9999 4.80005ZM2.3999 20.0001C2.3999 10.2798 10.2797 2.40006 19.9999 2.40006C29.72 2.40006 37.6 10.2798 37.6 20.0001C37.6 29.7203 29.72 37.6 19.9999 37.6C10.2797 37.6 2.3999 29.7203 2.3999 20.0001Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.9998 21.0666H3.99988V18.9333H35.9998V21.0666Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9331 36V4H21.0665V36H18.9331ZM27.6667 19.9999C27.6667 14.206 25.5831 8.47408 21.4983 4.68416L22.7679 3.31576C27.3057 7.52581 29.5334 13.7939 29.5334 19.9999C29.5334 26.206 27.3057 32.4741 22.7679 36.6843L21.4983 35.3157C25.5831 31.5259 27.6667 25.7939 27.6667 19.9999ZM10.6659 20C10.6659 13.803 12.821 7.53808 17.2205 3.32584L18.5114 4.67416C14.5553 8.46195 12.5326 14.197 12.5326 20C12.5326 25.803 14.5553 31.5381 18.5115 35.3259L17.2206 36.6741C12.8211 32.4619 10.6659 26.1971 10.6659 20Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9999 10.5547C25.7847 10.5547 31.6674 11.6244 35.6549 13.8519C36.105 14.1033 36.2661 14.6719 36.0146 15.1219C35.7634 15.5719 35.1946 15.733 34.7448 15.4816C31.145 13.4708 25.6213 12.4214 19.9999 12.4214C14.3784 12.4214 8.85468 13.4708 5.255 15.4816C4.80497 15.733 4.23639 15.5719 3.985 15.1219C3.73364 14.6719 3.89465 14.1033 4.34468 13.8519C8.33239 11.6244 14.215 10.5547 19.9999 10.5547ZM19.9999 28.9333C25.7847 28.9333 31.6674 27.8635 35.6549 25.636C36.105 25.3846 36.2661 24.816 36.0146 24.366C35.7634 23.916 35.1946 23.755 34.7448 24.0063C31.145 26.0171 25.6213 27.0667 19.9999 27.0667C14.3784 27.0667 8.85468 26.0171 5.255 24.0064C4.80497 23.755 4.23639 23.916 3.985 24.366C3.73364 24.816 3.89465 25.3846 4.34468 25.636C8.33239 27.8635 14.215 28.9333 19.9999 28.9333Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Hero section -->
      <div class="flex mb-40">
        <div class="w-1/3 mt-12">
          <h1 class="text-5xl text-white">
            {{ $t("greeting") }}
          </h1>
          <p class="text-3xl text-white mt-12">
            {{ $t("codingtitle") }}
          </p>
        </div>
        <div class="bg-black w-1/3 h-[580px] rounded-full"></div>
        <div class="w-1/3 text-3xl text-dark mt-12">
          <h1 class="text-5xl text-white">
            {{ $t("greeting") }}
          </h1>
          <p class="mt-12">
            {{ $t("designtitle") }}
          </p>
        </div>
      </div>

      <!-- Logos section -->
      <div class="w-full flex gap-10">
        <!-- Logos on Left -->
        <div
          class="flex flex-wrap justify-start flex-row-reverse items-center w-1/2 gap-4 xl:gap-8 xl:gap-14 mb-56"
        >
          <div
            v-for="(logo, index) in leftLogos"
            :key="`left-${index}`"
            :ref="setLogoRef"
            class="flex h-28 w-28 md:w-40 md:h-40 lg:w-48 xl:w-60 lg:h-48 xl:h-60 justify-center items-center rounded-small-icon-computer md:rounded-icon-computer relative pt-12 flex-col bg-white text-dark"
            @mouseenter="handleMouseEnter(index, 'left')"
            @mouseleave="handleMouseLeave"
          >
            <img
              :src="logo.src"
              :alt="logo.name"
              :class="{
                'z-30 scale-[1.05]':
                  hoveredLogo.index === index && hoveredLogo.side === 'left',
              }"
              class="pointer-events-none z-10 h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-fit xl:w-fit"
            />
            <div
              :class="[
                leftLogoAnimationClasses[index],
                {
                  'hover:z-20':
                    hoveredLogo.index === index && hoveredLogo.side === 'left',
                },
              ]"
              class="absolute h-full rounded-medium-icon-computer lg:rounded-icon-computer w-full top-0 hover:w-[223.5%] hover:h-[165%] bg-white"
            >
              <div
                :class="{
                  'z-30 duration-1000 opacity-100':
                    hoveredLogo.index === index && hoveredLogo.side === 'left',
                }"
                class="relative h-full flex w-full justify-center opacity-0 z-10 pointer-events-none transition-opacity"
              >
                <div
                  v-if="
                    leftLogoAnimationClasses[index] ==
                    `hover:animate-growreverse right-0 hover:right-0 ease-in duration-300`
                  "
                  class="w-1/2 flex pl-10 pt-8 text-lg"
                >
                  {{ $t(`${logo.name}.description`) }}
                </div>
                <div class="w-1/2"></div>
                <div
                  v-if="
                    leftLogoAnimationClasses[index] !==
                    `hover:animate-growreverse right-0 hover:right-0 ease-in duration-300`
                  "
                  class="w-1/2 flex pr-6 pt-8 text-lg"
                >
                  <p>{{ $t(`${logo.name}.description`) }}</p>
                </div>
              </div>
            </div>
            <div
              :class="{
                'z-30 duration-1000 opacity-100':
                  hoveredLogo.index === index && hoveredLogo.side === 'left',
              }"
              class="opacity-0 z-10 pointer-events-none transition-opacity text-center"
            >
              <h1 class="text-4xl">{{ $t(`${logo.name}.title`) }}</h1>
            </div>
          </div>
        </div>
        <!-- Logos on Right -->
        <div
          class="flex flex-wrap justify-start items-center w-1/2 gap-4 xl:gap-8 xl:gap-14 mb-56"
        >
          <div
            v-for="(logo, index) in rightLogos"
            :key="`right-${index}`"
            :ref="setLogoRef"
            class="flex h-28 w-28 md:w-40 md:h-40 lg:w-48 xl:w-60 lg:h-48 xl:h-60 justify-center items-center rounded-small-icon-computer md:rounded-icon-computer relative pt-12 flex-col bg-dark text-white"
            @mouseenter="handleMouseEnter(index, 'right')"
            @mouseleave="handleMouseLeave"
          >
            <img
              :src="logo.src"
              :alt="logo.name"
              :class="{
                'z-30 scale-[1.05]':
                  hoveredLogo.index === index && hoveredLogo.side === 'right',
              }"
              class="pointer-events-none z-10 h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-fit xl:w-fit"
            />
            <div
              :class="[
                rightLogoAnimationClasses[index],
                {
                  'hover:z-20':
                    hoveredLogo.index === index && hoveredLogo.side === 'right',
                },
              ]"
              class="absolute h-full rounded-medium-icon-computer lg:rounded-icon-computer w-full top-0 hover:w-[223.5%] hover:h-[165%] bg-dark"
            >
              <div
                :class="{
                  'z-30 duration-1000 opacity-100':
                    hoveredLogo.index === index && hoveredLogo.side === 'right',
                }"
                class="relative h-full flex w-full justify-center opacity-0 z-10 pointer-events-none transition-opacity"
              >
                <div
                  v-if="
                    rightLogoAnimationClasses[index] ==
                    `hover:animate-growreverse right-0 hover:right-0 ease-in duration-300`
                  "
                  class="w-1/2 flex pl-10 pt-8 text-lg"
                >
                  {{ $t(`${logo.name}.description`) }}
                </div>
                <div class="w-1/2"></div>
                <div
                  v-if="
                    rightLogoAnimationClasses[index] !==
                    `hover:animate-growreverse right-0 hover:right-0 ease-in duration-300`
                  "
                  class="w-1/2 flex pr-6 pt-8 text-lg"
                >
                  <p>{{ $t(`${logo.name}.description`) }}</p>
                </div>
              </div>
            </div>
            <div
              :class="{
                'z-30 duration-1000 opacity-100':
                  hoveredLogo.index === index && hoveredLogo.side === 'right',
              }"
              class="opacity-0 z-10 pointer-events-none transition-opacity text-center"
            >
              <h1 class="text-4xl">{{ $t(`${logo.name}.title`) }}</h1>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects section -->
      <div class="flex items-center justify-center mb-14">
        <h1 class="text-6xl">{{ $t("projects") }}</h1>
      </div>
      <div class="flex items-center justify-center relative">
        <!-- SwitchButton -->
        <div
          @click="prevSlide()"
          class="cursor-pointer mr-3 animate-bounce z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 35 40"
            fill="none"
            class="hover:scale-110 transition-scale duration-300"
          >
            <path
              d="M3.5 26.0622C-1.16667 23.3679 -1.16667 16.6321 3.5 13.9378L24.5 1.81347C29.1667 -0.880836 35 2.48704 35 7.87564L35 32.1244C35 37.513 29.1667 40.8808 24.5 38.1865L3.5 26.0622Z"
              fill="white"
            />
          </svg>
        </div>
        <!-- Card -->
        <div class="w-full lg:ml-0 relative h-[840px] 2xl:h-[800px] lg:h-[700px] md:w-3/4 lg:w-full">
          <div
            class="flex m-auto w-full h-full bg-transparent flex-col flex lg:flex-row md:w-5/6 lg:w-full lg:w-full z-10 invisible"
            :style="realSlideStyle"
            @transitionend="resetTransition"
          >
            <div class="p-12 lg:w-1/2 h-1/2 lg:h-full flex flex-col text-center lg:text-start bg-white rounded-project-card-top lg:rounded-project-card-left">
              <h1 class="mb-8">
                <span class="text-2xl lg:text-3xl lg:text-4xl 2xl:text-5xl text-center">{{
                  $t(`${projectData[SlideIndex].translationKey}.name`)
                }}</span>
              </h1>
              <p class="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {{
                  $t(`${projectData[SlideIndex].translationKey}.description`)
                }}
              </p>
            </div>
            <div class="flex flex-col h-1/2 lg:h-full lg:w-1/2 px-14 lg:px-6 xl:px-14 lg:pt-28 pt-4 bg-dark rounded-project-card-bottom lg:rounded-project-card-right ">
              <img class="pb-4 h-3/4 lg:h-4/6 xl:h-3/4" src="@/assets/Picture3.jpg" />
              <div>
                <p class="text-3xl 2xl:text-4xl text-white">{{ $t("toolsused") }}</p>
              </div>
            </div>
          </div>
          <!-- Animation Card -->

          <div
            class="flex m-auto flex-col lg:flex-row h-full 2xl:h-[800px] lg:h-[700px] md:w-5/6 lg:w-full bg-transparent absolute inset-0  z-0"
            @transitionend="resetTransition"
            ref="fakeCardElement"
          >
            <div class="flex flex-col lg:w-1/2 h-1/2 lg:h-full p-12 text-center lg:text-start bg-white text-dark rounded-project-card-top lg:rounded-project-card-left">
              <h1 class="mb-8">
                <span class="text-2xl lg:text-3xl lg:text-4xl 2xl:text-5xl text-center font-semibold">{{
                  $t(`${projectData[AnimationCardIndex].translationKey}.name`)
                }}</span>
              </h1>
              <p class="text-xl lg:text-2xl lg:text-3xl 2xl:text-4xl">
                {{
                  $t(
                    `${projectData[AnimationCardIndex].translationKey}.description`
                  )
                }}
              </p>
            </div>
            <div class="flex flex-col lg:w-1/2 h-1/2 lg:h-full px-14 lg:px-6 xl:px-14 lg:pt-28 pt-4 bg-dark rounded-project-card-bottom lg:rounded-project-card-right">
              <img class="pb-4 w-full h-3/4 lg:h-4/6 xl:h-3/4" src="@/assets/Picture3.jpg" />
              <div>
                <p class="text-3xl 2xl:text-4xl  text-white">{{ $t("toolsused") }}</p>
              </div>
            </div>
          </div>

        </div>
        <!-- SwitchButton -->
        <div
          @click="nextSlide()"
          class="cursor-pointer ml-3 animate-bounce z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 35 40"
            fill="none"
            class="hover:scale-110 transition-scale duration-300"
          >
            <path
              d="M31.5 13.9378C36.1667 16.6321 36.1667 23.3679 31.5 26.0622L10.5 38.1865C5.83333 40.8808 0 37.513 0 32.1244V7.87564C0 2.48704 5.83333 -0.880835 10.5 1.81347L31.5 13.9378Z"
              fill="#232121"
            />
          </svg>
        </div>
      </div>

      <!-- Contact section -->
      <div class="w-full lg:h-[1300px] mt-44 lg:pb-36 flex flex-col md:flex-row">
        <div class="md:w-1/2 text-white space-y-14 order-2 md:order-1 bg-dark w-screen md:py-auto pb-24 md:pb-0">
          <h1 class="mt-8 text-4xl 2xl:text-5xl">{{ $t("contact") }}</h1>
          <div class="flex items-center">
            <img
              src="@/assets/icons/telephone.svg"
              alt="phone"
              class="w-12 h-12 lg:w-14 lg:h-14 mr-3"
            />
            <div class="flex flex-col">
              <p class="text-2xl lg:text-3xl 2xl:text-4xl">{{ $t("call") }}</p>
              <a
                :href="`tel:+358440742509`"
                class="text-2xl lg:text-3xl 2xl:text-4xl underline underline-offset-8 duration-100 transition:font hover:font-medium"
              >
                +358 44074 2509
              </a>
            </div>
          </div>
          <div class="flex items-center md:pb-24">
            <img
              src="@/assets/icons/envelope.svg"
              alt="envelope"
              class="w-12 h-12 lg:w-14 lg:h-14 mr-3"
            />
            <div class="flex flex-col">
              <p class="text-2xl lg:text-3xl 2xl:text-4xl">{{ $t("sendemail") }}</p>
              <a
                href="mailto:contact@eetuhuotari.dev"
                class="text-2xl lg:text-3xl 2xl:text-4xl underline underline-offset-8 decoration-white duration-100 transition:font hover:font-medium"
              >
                contact@eetuhuotari.dev
              </a>
            </div>
          </div>
          <div>
            <p class="text-3xl 2xl:text-4xl mb-4">{{ $t("socials") }}</p>
            <div class="flex gap-6">
              <div
                class="w-16 h-16 2xl:w-20 2xl:h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-scale duration-300"
              >
                <a href="https://github.com/Eetuh123">
                  <img
                    src="@/assets/icons/github.svg"
                    alt="github"
                    class="w-12 h-12 2xl:w-16 2xl:h-16 hover:scale-110 transition-scale duration-300"
                  />
                </a>
              </div>
              <div
                class="w-16 h-16 2xl:w-20 2xl:h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-scale duration-300"
              >
                <a href="https://www.linkedin.com/in/eetu-huotari-594106238/">
                  <img
                    src="@/assets/icons/linkedin.svg"
                    alt="linkedin"
                    class="w-12 h-12 2xl:w-16 2xl:h-16 hover:scale-110 transition-scale duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Email form -->
        <div class="md:w-1/2 flex flex-col order-1 md:order-2">
          <div class="w-full md:pl-12 mt-8 pb-24">
            <div class="pl-7 pb-12 text-4xl 2xl:text-5xl">
              <h1 class="md:text-dark text-white ">{{ $t("form.formtitle") }}</h1>
            </div>
            <form class="flex flex-col" @submit.prevent="sendEmail">
              <input
                v-model="form.email"
                class="bg-dark text-white rounded-icon-computer p-8 xl2:p-10 mb-10 font-semibold 2xl:text-lg border-2"
                type="email"
                name="email"
                :placeholder="$t('form.email')"
              />
              <input
                v-model="form.name"
                class="bg-dark text-white rounded-icon-computer p-8 xl2:p-10 mb-10 font-semibold 2xl:text-lg border-2"
                type="text"
                name="name"
                :placeholder="$t('form.name')"
              />
              <input
                v-model="form.subject"
                class="bg-dark text-white rounded-icon-computer p-8 xl2:p-10 mb-10 font-semibold 2xl:text-lg border-2"
                type="text"
                name="subject"
                :placeholder="$t('form.subject')"
              />
              <div class="flex flex-col lg:flex-row">
                <textarea
                  v-model="form.message"
                  class="bg-dark text-white rounded-icon-computer p-4 xl2:p-6 pl-10 lg:mr-4 lg:mr-8 pb-24 lg:0 mb-10 lg:mb-0 flex-1 font-semibold 2xl:text-lg border-2"
                  name="message"
                  :placeholder="$t('form.message')"
                ></textarea>
                <input
                  type="submit"
                  :value="$t('form.send')"
                  class="flex-initial bg-dark text-white border-2 border-white rounded-icon-computer px-8 xl2:px-10 py-6 lg:py-20 font-bold cursor-pointer hover:bg-white hover:border-dark hover:text-dark transition-colors duration-300"
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
import { ref, onMounted, onUnmounted, computed, nextTick } from "vue";
import { logosData } from "@/assets/logosData.js";
import { projectData } from "@/assets/projectData.js";
import emailjs from "@emailjs/browser";
import i18n from "@/i18n";

export default {
  name: "MainPage",
  setup() {
    const isEnglish = ref(false);
    const logos = ref([]);
    const leftLogos = ref([]);
    const rightLogos = ref([]);
    const logoRefs = ref([]);
    const leftLogoAnimationClasses = ref([]);
    const rightLogoAnimationClasses = ref([]);
    const hoveredLogo = ref({ index: null, side: null });
    const SlideIndex = ref(0);
    const AnimationCardIndex = ref(0);
    const transitioning = ref(false);
    const direction = ref("next");
    const fakeCardElement = ref(null);
    const form = ref({
      email: "",
      name: "",
      subject: "",
      message: "",
    });

    onMounted(() => {
      updateLogoArrays();
      window.addEventListener("resize", calculateAnimationClasses);
      nextTick().then(() => {
        calculateAnimationClasses();
      });
    });

    function toggleLanguage() {
      isEnglish.value = !isEnglish.value;
      i18n.global.locale = isEnglish.value ? "en" : "fi";
    }

    const updateLogoArrays = () => {
      const midpoint = Math.ceil(logos.value.length / 2);
      leftLogos.value = logos.value.slice(0, midpoint);
      rightLogos.value = logos.value.slice(midpoint);
    };

    const setLogoRef = (el) => {
      if (el) logoRefs.value.push(el);
    };

    const calculateAnimationClasses = () => {
      logoRefs.value.forEach((logoRef, index) => {
        const rect = logoRef.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const midPoint = viewportWidth / 2;
        const center = rect.left + rect.width / 2;

        const threshold = viewportWidth * 0.2;

        const distanceFromLeftEdge = rect.left;
        const distanceFromRightEdge = viewportWidth - (rect.left + rect.width);

        const isRightHalf = center >= midPoint;
        const isLeftHalf = !isRightHalf;

        const closeToLeftWall = distanceFromLeftEdge <= threshold;
        const closeToRightWall = distanceFromRightEdge <= threshold;

        if (isLeftHalf) {
          if (closeToLeftWall) {
            leftLogoAnimationClasses.value[index] =
              "hover:animate-grow left-0 hover:left-0 ease-in duration-300";
          } else {
            leftLogoAnimationClasses.value[index] =
              "hover:animate-growreverse right-0 hover:right-0 ease-in duration-300";
          }
        } else if (isRightHalf) {
          index = index - leftLogos.value.length;
          if (closeToRightWall) {
            rightLogoAnimationClasses.value[index] =
              "hover:animate-growreverse right-0 hover:right-0 ease-in duration-300";
          } else {
            rightLogoAnimationClasses.value[index] =
              "hover:animate-grow left-0 hover:left-0 ease-in duration-300";
          }
        }
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

    function handleMouseEnter(index, side) {
      hoveredLogo.value = { index, side };
    }

    function handleMouseLeave() {
      hoveredLogo.value = { index: null, side: null };
    }

    const getNextSlideIndex = (current, direction, length) => {
      if (direction === "next") {
        return (current + 1) % length;
      } else {
        return current - 1 < 0 ? length - 1 : current - 1;
      }
    };

    const nextSlide = () => {
      if (transitioning.value) return;
      direction.value = "next";
      fakeCardElement.value.style.transition = "none";
      fakeCardElement.value.style.transform = "translateX(-160%)";
      AnimationCardIndex.value = getNextSlideIndex(
        AnimationCardIndex.value,
        "next",
        projectData.length
      );
      requestAnimationFrame(() => {
        fakeCardElement.value.style.transition = "transform 2s ease";
        fakeCardElement.value.style.transform = "translateX(0%)";
      });
      transitioning.value = true;
    };

    const prevSlide = () => {
      if (transitioning.value) return;
      direction.value = "prev";
      fakeCardElement.value.style.transition = "none";
      fakeCardElement.value.style.transform = "translateX(160%)";
      AnimationCardIndex.value = getNextSlideIndex(
        AnimationCardIndex.value,
        "prev",
        projectData.length
      );

      requestAnimationFrame(() => {
        fakeCardElement.value.style.transition = "transform 2s ease";
        fakeCardElement.value.style.transform = "translateX(0%)";
      });
      transitioning.value = true;
    };

    const resetTransition = () => {
      SlideIndex.value = AnimationCardIndex.value;
      transitioning.value = false;
    };

    const realSlideStyle = computed(() => {
      if (!transitioning.value) return {};
      return {
        transform:
          direction.value === "next" ? "translateX(160%)" : "translateX(-160%)",
        transition: "transform 2s ease",
        visibility: 'visible',
      };
    });

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

    onUnmounted(() => {
      window.removeEventListener("resize", calculateAnimationClasses);
    });

    return {
      logos,
      leftLogos,
      rightLogos,
      setLogoRef,
      leftLogoAnimationClasses,
      rightLogoAnimationClasses,
      sendEmail,
      form,
      toggleLanguage,
      isEnglish,
      handleMouseEnter,
      handleMouseLeave,
      hoveredLogo,
      AnimationCardIndex,
      SlideIndex,
      nextSlide,
      prevSlide,
      realSlideStyle,
      resetTransition,
      projectData,
      fakeCardElement,
    };
  },
};
</script>
<style scoped>
.transition-transform {
  transition: transform 0.3s ease-in-out;
}
.transform-left {
  transform: translateX(-100%) rotate(0deg);
}
.transform-right {
  transform: translateX(100%) rotate(360deg);
}
</style>
