<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section class="flex flex-col justify-between lg:w-2/3 p-24 my-12">
        <h1 class="text-3xl">{data.legalNotice.title}</h1>
        <SvelteMarkdown options="{{mangle:false}}" source="{data.legalNotice.text}" />
</section>



