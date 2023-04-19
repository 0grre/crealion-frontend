<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>CréaLion - {data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section class="hero min-h-screen flex flex-col justify-between">
    <div class="container p-24">
        <h1>{data.legalNotice.title}</h1>
        <SvelteMarkdown source="{data.legalNotice.text}" />
    </div>
</section>



