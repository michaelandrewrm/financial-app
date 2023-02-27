<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';

library.add([faQuestion]);

/**
 * Sizing: 2xs, xs, sm, lg, xl, 2xl
 */

const props = defineProps({
	icon: { type: String, default: 'question' },
	size: { type: String, default: 'lg' },
});
</script>

<template>
	<span class="c-icon">
		<fa-icon
			:icon="['fas', icon]"
			:size="size"
			v-bind="$attrs"
		></fa-icon>
	</span>
</template>

<style scoped>
.c-icon {
	display: block;
}
</style>
