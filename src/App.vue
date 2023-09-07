<template>
  <router-view />
</template>

<script>
import { useThemeSettingsStore } from "@/store/themeSettings";

export default {
  mounted() {
    this.$store.themeSettingsStore = useThemeSettingsStore()
    this.$store.themeSettingsStore.menuLayout = 'horizontal';
  }
}
</script>

<style></style>
