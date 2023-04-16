<template>
    <div>
        <!-- Begin Page Content -->
        <div class="container-fluid pt-5">

            <!-- 404 Error Text -->
            <div class="text-center">
                <div class="error mx-auto" data-text="404">404</div>
                <p class="lead text-gray-800 mb-5">Page Not Found</p>
                <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                <a @click="$router.go(-1)" style="cursor: pointer;">&larr; Back to Prevous Page</a>
            </div>
        </div>
        <!-- /.container-fluid -->
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>