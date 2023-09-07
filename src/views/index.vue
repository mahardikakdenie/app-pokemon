<template>
    <div>
        <div class="grid gap-4 grid-cols-12 mt-5">
            <div class="xl:col-span-3 col-span-12" v-for="(list, i) in lists" :key="i">
                <CardContent />
            </div>
        </div>
    </div>
</template>
<script setup>
import CardContent from '@/components/Card/Content.vue'
import pokemonApi from '@/lib/pokemon';
import { onMounted, ref } from 'vue';

const lists = ref([]);

onMounted(() => {
    getData();
});

const getData = () => {
    const params = {
        limit: 8,
        offset: 0,
    };
    const callback = (res) => {
        const data = res.data.data.results;
        lists.value = data;
        console.log("🚀 ~ file: index.vue:17 ~ callback ~ res:", data)
    };
    const err = () => {};

    pokemonApi.getDataPokemon(params, callback, err);
};
</script>

<style lang="scss" scoped>
.ha-auto {
    height: auto !important;
}
</style>
