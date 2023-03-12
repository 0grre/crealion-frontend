<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<pre>
    {JSON.stringify(data)}
</pre>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Home page"/>
</svelte:head>

<section class="hero min-h-screen flex flex-col justify-between">
    <!--	<picture>-->
    <!--		<source srcset={welcome} type="image/webp" />-->
    <!--		<img src={welcome_fallback} alt="Welcome" />-->
    <!--	</picture>-->

    <div class="hero-content text-center m-auto bg-base">
        <h1 class="font-inter title font-light uppercase">
            <span class="font-light italic">{data.home.Title}</span>
            <span class="font-thin">LION</span>
        </h1>
    </div>
    <div class="flex w-full bg-green py-10">
        <h2 class="m-auto font-source uppercase font-source text-3xl font-normal text-white">L'art de créer à partir de
            rien</h2>
    </div>
</section>
<section class="hero min-h-screen"
         style="background-image: url('https://crealion-backend.fly.dev{data.home.Banner.data.attributes.url}');">
    <div class="hero-overlay bg-opacity-5"></div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
        </div>
    </div>
</section>



