<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    export let nav;
</script>

<svelte:head>
    <title>Crea Lion</title>
    <meta name="description" content="Home page"/>
</svelte:head>

<section class="hero min-h-screen flex flex-col justify-between">
    <!--	<picture>-->
    <!--		<source srcset={welcome} type="image/webp" />-->
    <!--		<img src={welcome_fallback} alt="Welcome" />-->
    <!--	</picture>-->

    <div class="hero-content text-center m-auto bg-base">
        <h1 class="font-inter title font-light uppercase">
            <span class="font-light italic">{data.home.title_1}</span>
            <span class="font-thin">{data.home.title_2}</span>
        </h1>
    </div>
    <div class="flex w-full bg-green py-10">
        <h2 class="m-auto font-source uppercase font-source text-3xl font-normal text-white">{data.home.subtitle}</h2>
    </div>
</section>



