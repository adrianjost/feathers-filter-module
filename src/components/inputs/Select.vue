<template>
	<label>
		<span v-if="label" class="label">{{ label }}</span>
		<select v-model="vmodelProxy" class="select">
			<!-- eslint-disable-next-line prettier/prettier -->
			<option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
		</select>
	</label>
</template>

<script>
import { inputDataTypes } from "./helper";

export default {
	model: {
		prop: "value",
		event: "input",
	},
	props: {
		value: {
			type: inputDataTypes,
			default: undefined,
		},
		label: {
			type: String,
			default: "",
		},
		options: {
			type: Array,
			default: () => [
				{ value: false, label: "✖" },
				{ value: undefined, label: "◯" },
				{ value: true, label: "✔" },
			],
			validator: (options) => {
				return options.every((option, index) => {
					if (!Object.prototype.hasOwnProperty.call(option, "label")) {
						throw new Error(`option ${index} is missing a label`);
					}
					return (
						Object.prototype.hasOwnProperty.call(option, "label") &&
						Object.prototype.hasOwnProperty.call(option, "value")
					);
				});
			},
		},
	},
	computed: {
		vmodelProxy: {
			get() {
				return this.value;
			},
			set(to) {
				this.$emit("input", to);
			},
		},
	},
};
</script>

<style lang="scss" scoped>
.select {
	display: block;
	width: 100%;
	padding: 0.5rem;
	border-radius: 2px;
}
.label {
	display: block;
}
</style>
