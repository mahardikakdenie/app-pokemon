<template>
<Modal :activeModal="activeModal" :title="`Favorite Pokemon With this Ability :  ${abilityName}`" sizeClass="max-w-10xl" @close="close">
    <page-loader v-if="isLoading" />
    <div v-else class="grid gap-4 grid-cols-12 mt-5">
        <div class="xl:col-span-3 col-span-12" v-for="(list, i) in lists" :key="i">
            <CardContent 
                :name="list.name" 
                :abilities="list?.favorite" 
            />
        </div>
    </div>
</Modal>
</template>

<script setup>
import pokemonApi from '@/lib/pokemon'
import CardContent from '@/components/Card/Content.vue'
import { onMounted, ref, watch } from 'vue'
import Modal from './index.vue'
import pageLoader from '../Loader/pageLoader.vue'
const isOpen = ref(false);
// const lists = ref([]);
const props = defineProps({
    abilityName: {
        type: String,
        default: '',
    },
    activeModal: {
        type: Boolean,
        default: false
    },
    lists: {
        type: Array,
        default: () => []
    },
    isLoading: {
        type: Boolean,
        default: true
    },
});
// onMounted(() => {
//     getDataFavoritePokemon(props.abilityName);
// });

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};
</script>

<style>

</style>