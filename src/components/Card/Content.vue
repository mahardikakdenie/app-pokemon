<template>
	<Card :img="img" noborder>
		<h5 class="card-title text-slate-900 dark:text-white">
			{{ name }}
		</h5>
    {{abilities.length}}
        <accordion v-if="abilities.length !== 0" :items="items" class="mt-2">
            <template #content="">
                <div class="p-2">
                    <ul class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                        <li v-for="(list, i) in abilities" :key="i">
                            {{ list.ability.name }}
                        </li>
                    </ul>
                </div>
            </template>
        </accordion>

		<div class="card-text mt-4">
			<div class="flex mt-8 gap-4">
                <Button
                    btnClass="btn-outline-dark btn-sm"
                    text="See Detail"
                    class=""
                    @click="$router.push(`/detail/${name}`)"
                />
                <Button
                    icon="mdi:heart"
                    :btnClass="`${$route.path.includes('favorite') ? 'btn-danger' : 'btn-outline-dark'} btn-sm`"
                />
            </div>
		</div>
	</Card>
</template>

<script setup>
import Card from "@/components/Card";
import Accordion from '@/components/Accordion';
import Button from "@/components/Button";
import Icon from "@/components/Icon";
const img = 'https://img.pokemondb.net/artwork/large/pikachu.jpg';

defineProps({
    name: {
        type: String,
        default: 'At Healthcare you will be treated by caring',
    },
    abilities: {
        type: Array,
        default: () => [],
    }
});

const items = [
        {
            title: 'Ability',
            content: [
                'ability 1',
                'ability 2',
                'ability 3',
            ],
        },
    ];
</script>

<style></style>
