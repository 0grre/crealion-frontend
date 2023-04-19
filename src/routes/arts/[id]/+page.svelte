<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title + " - " + data.art.name}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section class="pt-6">
    <div class="relative mx-auto max-w-screen-xl border-0 border-x border-green">
        <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2 pl-6">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 mx-6 py-24">
                <img
                        alt="{data.art.images.data[0].attributes.alternativeText}"
                        src="{data.url + data.art.images.data[0].attributes.formats.large.url}"
                        class="aspect-square w-full object-cover border-0 border-y border-x border-green"
                />

                <div class="grid grid-cols-2 gap-4 lg:mt-6">
                    {#if data.art.images.data[1]}
                        {#each data.art.images.data as image}
                        <img alt="{image.attributes.alternativeText}"
                             src="{data.url + image.attributes.formats.large.url}"
                             class="aspect-square w-full object-cover border-0 border-y border-x border-green"/>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="sticky top-0 py-24">
                <div class="w-full border-0 border-b border-green">
                    <a class="hover:text-black capitalize" href="/arts">retour</a>
                </div>
                <div class="mt-12 flex justify-between">
                    <div class="max-w-[35ch] space-y-2">
                        <h1 class="text-xl font-bold sm:text-2xl">
                            {data.art.name}
                        </h1>
                    </div>
                </div>

                <div class="mt-6">
                    <div class="prose max-w-none">
                        <p>{data.art.description}</p>
                    </div>
                    <fieldset class="mt-6">
                        <legend class="mb-1 text-sm font-medium">Dimensions:</legend>
                        <div class="flex flex-wrap gap-1">
                            <p>{data.art.dimensions}</p>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</section>
