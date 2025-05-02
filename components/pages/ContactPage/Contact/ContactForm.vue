<template>
    <form >
        <div class="input" >
            <label for="fullName">Name</label>
            <input id="fullName" type="text"  required />
        </div>
        <div class="input" >
            <label for="email">Email</label>
            <input id="email" type="email" required />
        </div>
        <div class="input" >
            <label for="phone">Phone</label>
            <input id="phone" type="tel"  />
        </div>
        <div class="input" >
            <label for="message">How can we help you?</label>
            <textarea id="message"></textarea>
        </div>
        <div class="agree-wrap" >
            <input id="agree" type="checkbox" />
            <label for="agree">I agree to the processing of personal data</label>
        </div>

        <GeckoButton variant="secondary" text="Send message" icon="message" type="submit" />
    </form>
</template>

<script setup lang="ts">

</script>

<style scoped>
.input{
    label{
        @apply text-[var(--gray-text)]
    }
    input, textarea{
        outline: 0;
        backdrop-filter: blur(10px);
        @apply h-12 w-full max-w-[400px] bg-[var(--alpha-white)] border-[var(--gray-text)] border rounded-lg text-white
    }
    textarea{
        @apply h-[max-content] min-h-20
    }
    @apply flex flex-col justify-center items-start border py-4
}

 .agree-wrap {
     @apply flex-row gap-4 flex items-center justify-start py-4
 }
#agree {
    @apply h-16 border
}
</style>