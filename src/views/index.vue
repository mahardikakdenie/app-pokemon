<template>
    <div>
        <pageLoaderVue v-if="isLoading" />
        <div v-if="!isLoading" class="grid gap-4 grid-cols-12 mt-5">
            <div class="xl:col-span-3 col-span-12" v-for="(list, i) in lists" :key="i">
                <CardContent 
                    :name="list.name" 
                    :list="list"
                    :abilities="list.abilities"
                    :isFavorite="list.is_favorite"
                    :btnLoading="btnLoading[i]"
                    @add-favorite="insertToFavoritePokemon"
                    @remove-favorite="removeFavorite"
                />
            </div>
        </div>

        <pageLoaderVue v-if="isLoadMore" />

        <div v-if="!isLoading && !isLoadMore" class="flex justify-center mt-10">
            <Button 
                btnClass="btn-outline-dark btn-sm"
                text="Load More"
                class=""
                @click="loadmore"
            />
        </div>
    </div>
</template>
<script setup>
import CardContent from '@/components/Card/Content.vue'
import pokemonApi from '@/lib/pokemon';
import { inject, onMounted, ref } from 'vue';
import SectionLoaderVue from '@/components/Loader/SectionLoader.vue';
import pageLoaderVue from '@/components/Loader/pageLoader.vue';
import Button from '@/components/Button'
import { useToast } from "vue-toastification";

const swall = useToast();

const isLoading = ref(true);

const lists = ref([]);

onMounted(() => {
    getData();
});

const btnLoading = ref(false);

const offset = ref(0);

const getData = (loadMore = false) => {
    const params = {
        limit: 8,
        offset: offset.value,
    };
    const callback = (res) => {
        const data = res.data.data;
        if (!isLoadMore.value) {
            isLoading.value = false;
            lists.value = data;
            btnLoading.value = lists.value.map(curr => false);
        } else {
            isLoadMore.value = false
            isLoading.value = false;
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    lists.value.push(element);
                }
            }
        }
    };
    const err = (e) => {
        console.log(e);
        isLoading.value = true;
    };

    pokemonApi.getDataPokemon(params, callback, err);
};

const isLoadMore = ref(false);
const loadmore = () => {
    offset.value += 8;
    isLoadMore.value = true;
    getData();
};

const insertToFavoritePokemon = (pokemonId) => {
    const index = lists.value.findIndex(curr => curr.name === pokemonId);
    btnLoading.value[index] = true;
    const params = {
        pokemon_id: pokemonId,
    };

    const callback = (res) => {
        if (res.data.meta.status) {
            const id = res.data.data.id;
            btnLoading.value[index] = false;
            if (index !== -1) {
                lists.value[index].is_favorite = !lists.value[index].is_favorite;
                lists.value[index].favorite_id = id;
            }
            swall.success("add to favorite successfully", {
                timeout: 2000,
            });
        }
    };
    const err = (e) => {
        console.log(e);
    };

    pokemonApi.insertToFavoritePokemon(params, callback, err);
};

const removeFavorite = (favoriteId,name) => {
    const index = lists.value.findIndex(curr => curr.name === name);
    btnLoading.value[index] = true;

    const callback = (res) => {
        if (res.data.meta.status) {
            btnLoading.value[index] = false;
            if (index !== -1) {
                lists.value[index].is_favorite = !lists.value[index].is_favorite;
            }
            swall.success("remove favorite successfully", {
                timeout: 2000,
            });
        }
    };
    const err = (e) => {
        console.log(e);
    };

    pokemonApi.removeFavorite(favoriteId, callback, err)
};
</script>

<style lang="scss" scoped>
.ha-auto {
    height: auto !important;
}
</style>
