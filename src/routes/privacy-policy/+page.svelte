<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown'

    // const source = data.privacyPolicy.text;

    const source = `
  # This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>CréaLion - {data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section class="hero min-h-screen flex flex-col justify-between">
    <div  class="container p-12 text-center">
        <h1>{data.privacyPolicy.title}</h1>
        <p>{data.privacyPolicy.text}</p>
        <SvelteMarkdown {source} />
    </div>
</section>



