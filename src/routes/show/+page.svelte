<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;

    // const monthNames = ["January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December"
    // ];

    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
</script>

<svelte:head>
    <title>CréaLion - {data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section class="min-h-screen flex">
    <div class="w-1/2 border-r border-0 border-green bg-cover"
         style="background-image: url('{data.url + data.show.image.data.attributes.formats.large.url}');">
    </div>
    <div class="w-1/2 flex flex-col my-auto">

    <div class="container p-12">
    <div class="form-control mb-12 text-center">
        <h2 class="text-2xl font-bold uppercase my-3">{data.show.title}</h2>
        <p class="text-xs">{data.show.subtitle}</p>
    </div>

    {#each data.events as event}
        <div class="border-l border-b border-0 border-green my-8 p-4">
            <div class="flex justify-between">
                <div class="flex flex-col justify-end">
                <h2 class="text-8xl font-light italic normal-case">{new Date(event.attributes.dateStart).getDate()}
                    <span class="text-3xl">{monthNames[new Date(event.attributes.dateStart).getMonth()]}</span>
                </h2>
                </div>
                <div class="flex flex-col justify-end">
                    <h2 class="text-3xl font-bold font-inter normal-case text-right">{event.attributes.name}</h2>
                    <p class="text-xl font-light italic text-right">{event.attributes.localization}</p>
                </div>
            </div>
        </div>
    {/each}
    </div>
    </div>
</section>
