<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>CréaLion - {data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse border-y border-0 border-green">
        <img src="{data.url + data.story.image.data[0].attributes.formats.large.url}" alt="{data.url + data.story.image.data[0].attributes.alternativeText}"
             class="max-w-sm border-x border-y border-0 border-green"/>
        <div>
            <h1 class="text-5xl font-inter">{data.story.name}</h1>
            <p class="py-6">{data.story.bio}</p>
        </div>
    </div>
</div>


<!--<section class="hero border-t border-0 border-green py-24">
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
</section>-->

<!--<section class="hero min-h-screen">
    <div class="w-4/5 h-full border-x border-0 border-green flex mx-auto bg-cover"
         style="background-image: url('{data.url + data.story.image.data[0].attributes.formats.large.url}');">
        &lt;!&ndash;        		<img src={data.url + data.story.image.data[0].attributes.url} alt="Welcome" />&ndash;&gt;
        <div class="text-center text-neutral-content m-auto">
            <div class="">
                <h1 class="mt-32 text-7xl text-base font-bold uppercase">
                    <span class="font-thin">{data.story.title_1}</span>
                    <span class="font-light italic">{data.story.title_2}</span>
                </h1>
            </div>
        </div>
    </div>
</section>-->

