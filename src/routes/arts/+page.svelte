<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<section class="flex">
    <div class="w-1/5 border-r border-0 border-green bg-cover">
        <div class="container p-12 border-b border-0 border-green">
            <div class="form-control mt-12 text-center">
                <h2 class="text-2xl font-bold uppercase my-3">{data.shop.title}</h2>
                <p class="text-sm">{data.shop.subtitle}</p>
            </div>
        </div>

        <div class="space-y-2 p-6">
            <details class="overflow-hidden rounded border border-green [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                    <span class="text-sm font-medium"> Availability </span>
                    <span class="transition group-open:-rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4">
          <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
                </summary>

                <div class="bg-white border-t border-green">
                    <header class="flex items-center justify-between p-4">
                        <span class="text-sm text-gray-700"> 0 Selected </span>
                        <button type="button"
                                class="text-sm text-gray-900 underline underline-offset-4">
                            Reset
                        </button>
                    </header>

                    <ul class="p-4 space-y-1 border-t border-green">
                        <li>
                            <label for="FilterInStock" class="inline-flex items-center gap-2">
                                <input type="checkbox"
                                        id="FilterInStock"
                                        class="w-5 h-5 border-green rounded"/>

                                <span class="text-sm font-medium text-gray-700">
                                  In Stock (5+)
                                </span>
                            </label>
                        </li>

                        <li>
                            <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                                <input type="checkbox"
                                        id="FilterPreOrder"
                                        class="w-5 h-5 border-green rounded"/>

                                <span class="text-sm font-medium text-gray-700">
                                  Pre Order (3+)
                                </span>
                            </label>
                        </li>

                        <li>
                            <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                                <input
                                        type="checkbox"
                                        id="FilterOutOfStock"
                                        class="w-5 h-5 border-green rounded"
                                />

                                <span class="text-sm font-medium text-gray-700">
              Out of Stock (10+)
            </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </details>

            <details class="overflow-hidden rounded border border-green [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                    <span class="text-sm font-medium"> Price </span>

                    <span class="transition group-open:-rotate-180">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
        >
          <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
                </summary>

                <div class="bg-white border-t border-green">
                    <header class="flex items-center justify-between p-4">
                        <span class="text-sm text-gray-700"> The highest price is $600 </span>

                        <button
                                type="button"
                                class="text-sm text-gray-900 underline underline-offset-4"
                        >
                            Reset
                        </button>
                    </header>

                    <div class="p-4 border-t border-green">
                        <div class="flex justify-between gap-4">
                            <label for="FilterPriceFrom" class="flex items-center gap-2">
                                <span class="text-sm text-green">$</span>

                                <input
                                        type="number"
                                        id="FilterPriceFrom"
                                        placeholder="From"
                                        class="w-full border-green rounded-md shadow-sm sm:text-sm"
                                />
                            </label>

                            <label for="FilterPriceTo" class="flex items-center gap-2">
                                <span class="text-sm text-green">$</span>

                                <input
                                        type="number"
                                        id="FilterPriceTo"
                                        placeholder="To"
                                        class="w-full border-green rounded-md shadow-sm sm:text-sm"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </details>
        </div>

    </div>
    <div class="w-4/5 flex flex-col mx-auto">

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
