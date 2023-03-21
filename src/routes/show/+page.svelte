<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section class="min-h-screen flex justify-center">
    <div class="container p-24">
    {#each data.events as event}
        <div class="flex flex-row justify-between border-l border-b border-0 border-green p-6">
            <div class="">
                    <h1 class="font-inter text-8xl font-light uppercase">
                        <span class="text-5xl font-thin">2023</span>
                        <br>
                        <span class="italic">Mars</span>
                    </h1>
            </div>
            <div class="flex">
                <div class="flex p-6 border-t border-r border-0 border-green">
                    <div class="flex flex-col justify-between">
                        <div>
                            <h2 class="text-3xl font-light italic normal-case"># {event.attributes.name}</h2>
                        </div>

                        <div class="flex flex-col justify-between font-light normalize">
                            <p class="font-thin text-md pb-3">{event.attributes.dateStart}</p>
                            <p class="text-2xl font-inter">{event.attributes.localization}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/each}
    </div>
</section>
