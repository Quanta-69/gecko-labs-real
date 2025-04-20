<template>
    <Navbar/>
    <div>
        <slot/>
    </div>
    <Footer/>
</template>

<script setup>
import { Navbar, Footer } from '~/components/layoutitems';
</script>