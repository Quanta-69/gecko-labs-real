<template>
        <Accordion value="0" class="accordion">
            <AccordionPanel>
                <AccordionHeader>{{ question }}</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">{{ answer }}</p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
</template>
<script setup>
defineProps({
    question: String,
    answer: String
})
</script>

<style scoped>
.accordion{
    backdrop-filter: blur(10px);
    display:inline-flex;
    @apply py-2 text-[var(--100)] text-xl rounded-md h-[max-content] max-w-[400px] w-full flex-col items-start justify-center border p-1 border-gray-300 bg-[var(--alpha-white)] 
}
p{
    @apply text-[16px] text-[var(--light-text)] ps-6 cursor-pointer
}
</style>