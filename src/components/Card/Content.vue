<template>
	<Card :img="img" noborder>
		<h5 class="card-title text-slate-900 dark:text-white">
			{{ name }}
		</h5>
        <accordion v-if="abilities.length !== 0" :items="items" class="mt-2">
            <template #content="">
                <div class="p-2">
                    <ul class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                        <li 
                            v-for="(list, i) in abilities" 
                            :key="i" 
                            :class="{
                                'cursor-pointer': isClickAble,
                            }"
                            class="hover:text-blue-500"
                            @click="seeAbilityDetail(list)"
                        >
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
                    :isLoading="btnLoading"
                    :btnClass="`${$route.path.includes('favorite') || isFavorite ? 'btn-danger' : 'btn-outline-dark'} btn-sm`"
                    @click="action(name)"
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
import { useRoute } from "vue-router";
const img = 'https://img.pokemondb.net/artwork/large/pikachu.jpg';

const route = useRoute();

const props = defineProps({
    name: {
        type: String,
        default: 'At Healthcare you will be treated by caring',
    },
    abilities: {
        type: Array,
        default: () => [],
    },
    isClickAble: {
        type: Boolean,
        default: false,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
    btnLoading: {
        type: Boolean,
        default: false,
    },
    list: {
        type: Array,
        default: () => null,
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

const emit = defineEmits(['see-abiliti', 'add-favorite']);

const seeAbilityDetail = (ability) => {
    emit('see-ability', ability);
};

const action = (name) => {
    if (route.path.includes('favorite') || props.isFavorite ) {
        const url = props?.list.url;
        const id = route.path.includes('favorite') ? props.list.id : url.split('/')[url.split('/').length - 2]
        emit('remove-favorite', id, name);
    } else {
        emit('add-favorite', name);
    }
};
</script>

<style></style>
