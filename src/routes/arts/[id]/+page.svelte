<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title + " - " + data.art.name}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>


<h1 class="mt-24">WESH {data.art.name}</h1>
