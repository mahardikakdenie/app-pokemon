<template>
  <router-view />
</template>

<script>
import { useThemeSettingsStore } from "@/store/themeSettings";

export default {
  mounted() {
    this.$store.themeSettingsStore = useThemeSettingsStore()
    this.$store.themeSettingsStore.menuLayout = 'horizontal';
    console.log("🚀 ~ file: App.vue:12 ~ mounted ~ this.$store.themeSettingsStore.menuLayout:", this.$store.themeSettingsStore.menuLayout)
  }
}
</script>

<style></style>
