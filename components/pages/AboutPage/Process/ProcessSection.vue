<template>
<section>
    <h1 class="sect-intro">The Process</h1>
    <p class="sect-desc">How your site is made</p>
    <div class="wrapper">
        <div class="card-wrap">
            <div class="step card">
                <h2>Step 1: <span>Discovery</span></h2>
                <p>We gather requirements and understand your needs.</p>
            </div>
            <div class="step card">
                <h2>Step 2: <span>Design</span></h2>
                <p>We create wireframes and prototypes to visualize the solution.</p>
            </div>
            <div class="step card">
                <h2>Step 3: <span>Development</span></h2>
                <p>We build the solution using the latest technologies.</p>
            </div>
            <div class="step card">
                <h2>Step 4:<span> Testing</span></h2>
                <p>We rigorously test the solution to ensure quality.</p>
            </div>
            <div class="step card">
                <h2>Step 5: <span>Deployment</span></h2>
                <p>We deploy the solution and provide ongoing support.</p>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>

</script>

<style scoped>
section{
    background: url(/assets/svg/process.svg) no-repeat fixed center/contain;
    border-image: fill 0 linear-gradient(150deg, rgba(0, 0, 0, 0.45), black);
}
.card{
    backdrop-filter: blur(10px);
    @apply border bg-[var(--alpha-white)]
}
h2{
    span{
        @apply text-[var(--100)]
    }
    @apply text-2xl text-[var(--gray-text)]
}

</style>