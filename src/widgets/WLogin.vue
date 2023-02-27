<script setup>
import CTextField from '@components/CTextField.vue';
import CButton from '@components/CButton.vue';
</script>

<template>
	<div class="w-login">
		<header class="w-login__header">
			<div class="w-login__wrapper">
				<div class="w-login__logo"></div>
				<h1 class="w-login__title"></h1>
			</div>
		</header>
		<main class="w-login__content">
			<form
				action=""
				class="w-login__form"
			>
				<div class="w-login__field">
					<CTextField></CTextField>
				</div>
				<div class="w-login__field">
					<CTextField></CTextField>
				</div>
			</form>
		</main>
		<footer class="w-login__actions">
			<div class="w-login__wrapper">
				<CButton></CButton>
			</div>
		</footer>
	</div>
</template>
