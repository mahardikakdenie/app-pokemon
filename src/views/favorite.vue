<template>
<div>
    <page-loader v-if="isLoading" />
    <div v-else-if="!isLoading && lists.length !== 0" class="grid gap-4 grid-cols-12 mt-5">
        <div class="xl:col-span-3 col-span-12" v-for="(list, i) in lists" :key="i">
            <CardContent 
                isClickAble
                :name="list.name" 
                :abilities="list?.favorite"
                @see-ability="seeAbilityDetail"
            />
        </div>
    </div>
    <div v-else-if="!isLoading && lists.length === 0" class="flex justify-center">
        <span>
            Tidak Ada data
        </span>
    </div>
    <ModalAbility 
        :activeModal="activeModal"
        :abilityName="abilityName"
        :lists="abilityHasPokemon"
        :isLoading="isLoadingAbility"
        @close="activeModal = false"
    />
</div>
</template>

<script setup>
import pageLoader from "@/components/Loader/pageLoader.vue";
import CardContent from '@/components/Card/Content.vue'
import { onMounted, ref } from "vue";
import ModalAbility from '@/components/Modal/AbilityModal.vue'
import pokemonApi from '@/lib/pokemon'
const isLoading = ref(true);
const isLoadingAbility = ref(true);
const lists = ref([]);

const activeModal = ref(false);

onMounted(() => {
    getDataPokemon();
});

const abilityName = ref('');

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

const seeAbilityDetail = (data) => {
    console.log('data : ', data.ability.name);
    abilityName.value = data.ability.name;
    activeModal.value = true;
    getDataFavoritePokemon(abilityName.value);
}

const abilityHasPokemon = ref([])
const getDataFavoritePokemon = (ability_name) => {
    const params = {
        ability_name,
    }
    const callback = (res) => {
        isLoadingAbility.value = false;
        const data = res.data.data
        abilityHasPokemon.value = data;
    };
    const err = () => {};

    pokemonApi.getDataFavoritePokemon(params, callback, err);
};

</script>

<style>

</style>