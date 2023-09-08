<template>
    <div>
        <pageLoaderVue v-if="isLoading" />
        <div v-if="!isLoading" class="grid gap-4 grid-cols-12 mt-5">
            <div class="xl:col-span-3 col-span-12" v-for="(list, i) in lists" :key="i">
                <CardContent :name="list.name" :abilities="list.abilities" />
            </div>
        </div>

        <div v-if="!isLoading" class="flex justify-center mt-10">
            <Button 
                btnClass="btn-outline-dark btn-sm"
                text="Load More"
                class="" 
            />
        </div>
    </div>
</template>
<script setup>
import CardContent from '@/components/Card/Content.vue'
import pokemonApi from '@/lib/pokemon';
import { onMounted, ref } from 'vue';
import SectionLoaderVue from '@/components/Loader/SectionLoader.vue';
import pageLoaderVue from '@/components/Loader/pageLoader.vue';
import Button from '@/components/Button'

const isLoading = ref(true);

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
        isLoading.value = false;
        const data = res.data.data;
        lists.value = data;
    };
    const err = (e) => {
        console.log(e);
        isLoading.value = true;
    };

    pokemonApi.getDataPokemon(params, callback, err);
};
</script>

<style lang="scss" scoped>
.ha-auto {
    height: auto !important;
}
</style>
