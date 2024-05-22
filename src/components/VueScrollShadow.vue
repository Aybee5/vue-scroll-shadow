<template>
  <div class="wrapper" ref="wrapper">
    <div :class="['shadow', `${scrollDirection}--before`]" ref="shadowBefore"></div>
    <div :class="['shadow', `${scrollDirection}--after`]" ref="shadowAfter"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { onMounted, onUnmounted, ref } from 'vue';


const wrapper = ref<HTMLElement | null>(null);
const shadowBefore = ref<HTMLElement | null>(null);
const shadowAfter = ref<HTMLElement | null>(null);

type ScrollType = 'vertical' | 'horizontal';
const props = defineProps({
  scrollDirection: {
    type: String as PropType<ScrollType>,
    default: 'vertical',
  },
  shadowLength: {
    type: String,
    default: '50px',
  }
});

onMounted(() => {
  const contentWrapper = wrapper.value?.children[wrapper.value.children.length - 1];
  contentWrapper?.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  const contentWrapper = wrapper.value?.children[wrapper.value.children.length - 1];
  contentWrapper?.removeEventListener('scroll', handleScroll);
});

const handleScroll = (event: Event) => {
  if (!event.target || !wrapper.value || !shadowBefore.value || !shadowAfter.value) return;
  const content = event.target as HTMLElement;
  const contentScrollSize = props.scrollDirection === 'vertical' ?
    content.scrollHeight - content.offsetHeight : content.scrollWidth - content.offsetWidth;
  const currentScroll = props.scrollDirection === 'vertical' ?
    content.scrollTop / contentScrollSize : content.scrollLeft / contentScrollSize;

  shadowBefore.value.style.opacity = String(currentScroll);
  shadowAfter.value.style.opacity = String(1 - currentScroll);
};
</script>

<style scoped>
.wrapper {
  position: relative;
}

.shadow {
  position: absolute;
  z-index: 100;
}

.horizontal--before {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.35), transparent);
  height: 100%;
  width: v-bind(shadowLength);
  opacity: 0;
}

.horizontal--after {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.35), transparent);
  height: 100%;
  width: v-bind(shadowLength);
  opacity: 1;
}

.vertical--before {
  top: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), transparent);
  opacity: 0;
  width: 100%;
  height: v-bind(shadowLength);
}

.vertical--after {
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.35), transparent);
  opacity: 1;
  width: 100%;
  height: v-bind(shadowLength);
}
</style>
