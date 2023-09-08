<template>
<div>
    <page-loader v-if="isLoading" />
    <div v-else-if="!isLoading && lists.length !== 0" class="grid gap-4 grid-cols-12 mt-5">
        <div class="xl:col-span-3 col-span-12" v-for="(list, i) in lists" :key="i">
            <CardContent :name="list.name" :abilities="list?.favorite" />
        </div>
    </div>
    <div v-else-if="!isLoading && lists.length === 0" class="flex justify-center">
        <span>
            Tidak Ada data
        </span>
    </div>
</div>
</template>

<script setup>
import pageLoader from "@/components/Loader/pageLoader.vue";
import CardContent from '@/components/Card/Content.vue'
import { onMounted, ref } from "vue";
import pokemonApi from '@/lib/pokemon'
const isLoading = ref(true);
const lists = ref([]);

onMounted(() => {
    getDataPokemon();
});

const getDataPokemon = () => {
    const params = {
        paginate: 8,
        entities: 'favorite.ability',
    };
    const callback = (res) => {
        isLoading.value = false;
        const data = res.data.data;
        lists.value = data;
    };
    const err = (e) => {
        console.log(e);
    };

    pokemonApi.getDataFavoritePokemon(params, callback, err);
};

</script>

<style>

</style>