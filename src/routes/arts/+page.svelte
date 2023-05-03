<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title} &middot; CREALION</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section class="flex">
    <div class="hidden lg:block lg:w-1/5 border-r border-0 border-green bg-cover">
        <div class="container p-12 border-b border-0 border-green">
            <div class="form-control mt-12 text-center">
                <h2 class="text-2xl font-bold uppercase my-3">{data.shop.title}</h2>
                <p class="text-sm">{data.shop.subtitle}</p>
            </div>
        </div>

    </div>
    <div class="lg:w-4/5 flex flex-col mx-auto">

        <div class="container mt-12 py-12 px-6">
            <div class="lg:col-span-3">
                <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {#each data.arts as art}
                        <li>
                        <a href="/arts/{art.id}" class="group relative block bg-black border-y border-x border-0 border-green h-full">
                            <img alt="{art.attributes.alternativeText}"
                                 src="{data.url + art.attributes.images.data[0].attributes.formats.large.url}"
                                 class="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-50"/>

                            <div class="relative p-4 sm:p-6 lg:p-8">
                                <div class="-translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p class="text-sm font-medium uppercase tracking-widest text-green">
                                        {art.attributes.dimensions}
                                    </p>

                                    <p class="text-xl font-bold text-white sm:text-2xl">{art.attributes.name}</p>
                                </div>
                                <div class="mt-32 sm:mt-48 lg:mt-64">
                                    <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p class="text-lg text-white">
                                            {art.attributes.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>
