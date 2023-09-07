<template>
	<Card :img="img" noborder>
		<h5 class="card-title text-slate-900 dark:text-white">
			{{ name }}
		</h5>
		<div class="card-text mt-4">
			<div class="flex mt-8 gap-4">
                <Button
                    btnClass="btn-outline-dark btn-sm"
                    text="See Detail"
                    class="" 
                />
                <Button
                    icon="mdi:heart"
                    btnClass="btn-outline-dark btn-sm"
                />
            </div>
		</div>
	</Card>
</template>

<script setup>
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
const img = 'https://img.pokemondb.net/artwork/large/pikachu.jpg';

defineProps({
    name: {
        type: String,
        default: 'At Healthcare you will be treated by caring',
    },
});
</script>

<style></style>
