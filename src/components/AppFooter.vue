<template>
    <v-footer class="text-center d-flex flex-column max-width" border>
        <div>
            <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" variant="text"></v-btn>
        </div>

        <v-divider></v-divider>

        <div>
            {{ new Date().getFullYear() }} — <strong>E-stoquei Systems</strong>
        </div>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
            'mdi-package'
        ],
    }),
}
</script>