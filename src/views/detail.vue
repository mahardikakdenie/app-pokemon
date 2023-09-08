<template>
    <div class="space-y-5 profile-page">
        <div
            class="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]"
        >
            <div
                class="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"
            ></div>
            <div class="profile-box flex-none md:text-start text-center">
                <div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
                    <div class="flex-none">
                        <div
                            class="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative"
                        >
                            <img
                                :src="img"
                                alt=""
                                class="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                    <div class="flex-1">
                        <div
                            class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]"
                        >
                            {{ pokemon.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-6">
            <div class="lg:col-span-12 col-span-12">
                <Card title="Ability" titleClass="text-center">
                    <ul class="list space-y-8 text-center">
                        <li v-for="(list, i) in pokemon.abilities" class="hover:text-blue-500" :key="i">
                            {{ list.ability.name }}
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import { basicArea, basicAreaDark } from "@/constant/appex-chart.js";
const img = 'https://img.pokemondb.net/artwork/large/pikachu.jpg';
import pokemonApi from '@/lib/pokemon'
export default {
    components: {
        Card,
        Icon,
    },
    data() {
        return {
            basicArea,
            basicAreaDark,
            img,
            pokemon: {},
        };
    },
    created() {
        this.getdetail();
    },
    methods: {
        getdetail() {
            const callback = (res) => {
                this.pokemon = res.data.data;
            };
            const err = (e) => {
                console.log(e);
            };
            pokemonApi.getDetailPokemon(this.$route.params.name, callback, err);
        },
    },
};
</script>
<style lang="scss" scoped></style>
