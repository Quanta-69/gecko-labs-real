<template>
    <form >
        <div>
            <label for="fullName">Name</label>
            <input id="fullName" type="text"  required />
        </div>
        <div>
            <label for="email">Email</label>
            <input id="email" type="email" required />
        </div>
        <div>
            <label for="phone">Phone</label>
            <input id="phone" type="tel"  />
        </div>
        <div>
            <label for="message">How can we help you?</label>
            <textarea id="message"></textarea>
        </div>
        <div>
            <input id="agree" type="checkbox" />
            <label for="agree">I agree to the processing of personal data</label>
        </div>
        <button type="submit">Send</button>
    </form>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>