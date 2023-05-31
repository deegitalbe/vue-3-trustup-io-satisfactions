<template>
  <div
    :class="[
      'vue-star-rating',
      { 'vue-star-rating-rtl': rtl },
      { 'vue-star-rating-inline': inline },
    ]"
  >
    <div class="sr-only">
      <slot name="screen-reader" :rating="selectedRating" :stars="maxRating">
        <span>Rated {{ selectedRating }} stars out of {{ maxRating }}</span>
      </slot>
    </div>

    <div class="vue-star-rating" @mouseleave="resetRating">
      <span
        v-for="n in maxRating"
        :key="n"
        :class="[
          { 'vue-star-rating-pointer': !readOnly },
          'vue-star-rating-star',
        ]"
        :style="{ 'margin-right': margin + 'px' }"
      >
        <star
          :fill="fillLevel[n - 1]"
          :size="starSize"
          :points="starPoints"
          :star-id="n"
          :step="step"
          :active-color="currentActiveColor"
          :inactive-color="inactiveColor"
          :border-color="borderColor"
          :active-border-color="currentActiveBorderColor"
          :border-width="borderWidth"
          :rounded-corners="roundedCorners"
          :rtl="rtl"
          :glow="glow"
          :glow-color="glowColor"
          :animate="animate"
          @star-selected="setRating($event, true)"
          @star-mouse-move="setRating"
        />
      </span>
      <span
        v-if="showRating"
        :class="['vue-star-rating-rating-text', textClass]"
      >
        {{ formattedRating }}</span
      >
    </div>
  </div>
</template>
<script setup lang="ts">
/* eslint-disable vue/custom-event-name-casing */
import { ref, computed } from "vue";
import Star from "./star.vue";
import { watch } from "vue";

// TODO DEFINE TYPE FOR STAR POINTS ,activeBorderColor IF USED
const props = withDefaults(
  defineProps<{
    increment: number;
    rating: number;
    roundStarRating: boolean;
    activeColor: string;
    inactiveColor: string;
    maxRating: number;
    starPoints: any;
    starSize: number;
    readOnly: boolean;
    showRating: boolean;
    textClass: string;
    inline: boolean;
    borderColor: string;
    activeBorderColor: any;
    borderWidth: number;
    roundedCorners: boolean;
    padding: number;
    rtl: boolean;
    fixedPoints: number;
    glow: number;
    glowColor: string;
    clearable: boolean;
    activeOnClick: boolean;
    animate: boolean;
  }>(),
  {
    increment: 1,
    rating: 0,
    roundStarRating: true,
    activeColor: "#ffd055",
    inactiveColor: "#d8d8d8",
    maxRating: 5,
    starPoints: [],
    starSize: 50,
    showRating: false,
    readOnly: false,
    textClass: "",
    inline: false,
    borderColor: "#999",
    activeBorderColor: [],
    borderWidth: 0,
    roundedCorners: true,
    padding: 0,
    rtl: false,
    fixedPoints: 0,
    glow: 0,
    glowColor: "#fff",
    clearable: true,
    activeOnClick: false,
    animate: false,
  }
);
const emit = defineEmits<{
  (e: "update:rating", event: any): void;
  (e: "hover:rating", event: any): void;
}>();


const selectedRating = ref<number>(0);
const step = ref<number>(0);
const fillLevel = ref<any[]>([]);
const currentRating = ref<number>(0);
const ratingSelected = ref<boolean>(false);


const init = () => {
step.value = props.increment * 100
currentRating.value = props.rating
selectedRating.value = currentRating.value
createStars(props.roundStarRating)
}


const formattedRating = computed(() =>
  props.fixedPoints === null
    ? currentRating
    : currentRating.value.toFixed(props.fixedPoints)
);

const shouldRound = computed(() => ratingSelected.value || props.roundStarRating);
const margin = computed(() => props.padding + props.borderWidth);
const activeColors = computed(() => {
  if (Array.isArray(props.activeColor)) {
    return padColors(
      props.activeColor,
      props.maxRating,
      props.activeColor.slice(-1)[0]
    );
  }
  return new Array(props.maxRating).fill(props.activeColor);
});

const currentActiveColor = computed(() => {
  if (!props.activeOnClick) {
    return currentRating.value > 0
      ? activeColors.value[Math.ceil(currentRating.value) - 1]
      : props.inactiveColor;
  }
  return selectedRating.value > 0
    ? activeColors.value[Math.ceil(selectedRating.value) - 1]
    : props.inactiveColor;
});

const activeBorderColors = computed(() => {
  if (Array.isArray(props.activeBorderColor)) {
    return padColors(
      props.activeBorderColor,
      props.maxRating,
      props.activeBorderColor.slice(-1)[0]
    );
  }
  let borderColor = props.activeBorderColor
    ? props.activeBorderColor
    : props.borderColor;
  return new Array(props.maxRating).fill(borderColor);
});

const currentActiveBorderColor = computed(() => {
  if (!props.activeOnClick) {
    return currentRating.value > 0
      ? activeBorderColors.value[Math.ceil(currentRating.value) - 1]
      : props.borderColor;
  }
  return null;
});

const roundedRating = computed(() => {
  let inv = 1.0 / props.increment;
  return Math.min(props.maxRating, Math.ceil(currentRating.value * inv) / inv);
});
watch([currentRating,selectedRating], (currentValue) => {
  // Do something with the updated value.
  currentRating.value = currentValue[0]
  selectedRating.value = currentValue[0]
  createStars(shouldRound)
});

    watch() => {
        rating(val) {
            currentRating.value = val
            selectedRating.value = val
            createStars(this.shouldRound)
        }
    },
  init()
</script>
<style scoped>
.vue-star-rating-star {
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
}

.vue-star-rating-pointer {
  cursor: pointer;
}

.vue-star-rating {
  display: flex;
  align-items: center;
}

.vue-star-rating-inline {
  display: inline-flex;
}

.vue-star-rating-rating-text {
  margin-left: 7px;
}

.vue-star-rating-rtl {
  direction: rtl;
}

.vue-star-rating-rtl .vue-star-rating-rating-text {
  margin-right: 10px;
  direction: rtl;
}

.sr-only {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
