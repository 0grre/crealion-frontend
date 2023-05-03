<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title} &middot; CREALION</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="max-w-3xl">
            <h2 class="text-3xl font-inter sm:text-4xl">
                {data.story.name}
            </h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full border border-0 border-green">
                <img src="{data.url + data.story.image.data[0].attributes.formats.large.url}"
                     alt="{data.url + data.story.image.data[0].attributes.alternativeText}"
                     class="absolute inset-0 h-full w-full object-cover"/>
            </div>

            <div class="lg:py-16">
                <article class="space-y-4 text-green">
                    <SvelteMarkdown options="{{mangle:false}}" source="{data.story.bio}"/>
                </article>
            </div>
        </div>
    </div>
</section>

