<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>CREALION</title>
    <meta name="description" content="Home page"/>
</svelte:head>

<section class="hero min-h-screen flex flex-col justify-between">
    <div class="hero-content text-center m-auto bg-base">
        <h1 class="font-inter title uppercase">
            <span class="italic">{data.home.title_1}</span>
            <span class="font-thin">{data.home.title_2}</span>
        </h1>
    </div>
    <div class="flex w-full bg-green py-10">
        <h2 class="m-auto font-source uppercase font-source text-3xl font-normal text-white">{data.home.subtitle}</h2>
    </div>
</section>



