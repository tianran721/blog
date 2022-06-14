<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { baseURL } from "../config/config";
defineProps<{ msg: string }>();

const count = ref(0);
const getPic = async e => {
	let { data } = await axios.get(`${baseURL}/a.jpeg`, {
		responseType: "blob",
	});
	console.log(data);
	let img = document.createElement("img");
	let URL = window.URL.createObjectURL(data);
	console.log(URL);
	img.src = URL;

	document.documentElement.appendChild(img);
	img.onload = function (e) {
		window.URL.revokeObjectURL(img.src);
	};
};
</script>

<template>
	<h1>{{ msg }}</h1>
	<button @click="getPic">图片</button>
</template>
