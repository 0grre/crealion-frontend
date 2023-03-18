<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section class="hero min-h-screen">
    <div class="w-4/5 h-full border-x border-0 border-green flex mx-auto bg-cover"
         style="background-image: url('{data.url + data.story.image.data[0].attributes.formats.large.url}');">
<!--        		<img src={data.url + data.story.image.data[0].attributes.url} alt="Welcome" />-->
        <div class="text-center text-neutral-content m-auto">
            <div class="">
                <h1 class="mt-32 text-7xl text-base font-bold uppercase">
                    <span class="font-thin">{data.story.title_1}</span>
                    <span class="font-light italic">{data.story.title_2}</span>
                </h1>
            </div>
        </div>
    </div>
</section>
<section class="hero border-t border-0 border-green py-24">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <div class="flex text-3xl justify-center">
                <h1 class="font-inter p-2">
                    {data.story.name}
                </h1>
            </div>
            <p class="mb-5">
                {data.story.bio}
            </p>
        </div>
    </div>
</section>

