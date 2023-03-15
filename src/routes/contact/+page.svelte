<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Test</title>
    <meta name="description" content="About page"/>
</svelte:head>

<div class="min-h-screen flex">
    <div class="w-1/2 border-r border-0 border-green bg-cover"
         style="background-image: url('{data.url + data.contact.image.data.attributes.formats.large.url}');">
    </div>
    <div class="w-1/2 flex m-auto">
        <form class="container p-12 text-center">
            <div class="form-control my-6">
                <h2 class="text-xl font-bold uppercase my-3">{data.contact.title}</h2>
                <p class="text-xs">{data.contact.subtitle}</p>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">{data.contact.field_1}</span>
                </label>
                <input type="text" placeholder="Jean Michel..." name="name" class="input input-ghost"/>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">{data.contact.field_2}</span>
                </label>
                <input type="text" placeholder="example@email.com" name="email" class="input input-ghost"/>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">Sujet *</span>
                </label>
                <select class="select select-ghost" name="subject">
                    <option disabled selected>Pick the best JS framework</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
                </select>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">{data.contact.field_3}</span>
                </label>
                <textarea class="textarea textarea-lg textarea-bordered border-green"
                          placeholder="Message ..." name="message"></textarea>
            </div>
            <div class="form-control mt-6">
                <button class="btn bg-green hover" type="submit">{data.contact.button}</button>
            </div>
        </form>
    </div>
</div>
