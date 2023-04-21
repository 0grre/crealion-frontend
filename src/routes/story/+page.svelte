<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse border-y border-0 border-green">
        <img src="{data.url + data.story.image.data[0].attributes.formats.large.url}" alt="{data.url + data.story.image.data[0].attributes.alternativeText}"
             class="max-w-sm border-x border-y border-0 border-green"/>
        <div class="py-6">
            <h1 class="text-5xl font-inter mb-6">{data.story.name}</h1>
            <SvelteMarkdown options="{{mangle:false}}" source="{data.story.bio}" />
        </div>
    </div>
</div>

