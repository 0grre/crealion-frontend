<script>
    import welcome from '$lib/images/svelte-welcome.webp';
    import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Home page"/>
</svelte:head>

<section class="hero min-h-screen" style="background-image: url('http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg');">
	<picture>
		<source srcset={welcome} type="image/webp" />
		<img src={welcome_fallback} alt="Welcome" />
	</picture>
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
        </div>
    </div>
</section>

