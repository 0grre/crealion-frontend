<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.Head.title}</title>
    <meta name="description" content="{data.page.Head.content}"/>
</svelte:head>

<div class="hero min-h-screen" style="background-image: url('{data.url + data.contact.image.data.attributes.formats.large.url}');">
    <div class="hero-content mt-12 bg-base border-x border-y border-0 border-green">
        <form class="container p-12 text-center">
            <div class="form-control mb-12">
                <h2 class="text-2xl font-bold uppercase my-3">{data.contact.title}</h2>
                <p class="text-xs">{data.contact.subtitle}</p>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">{data.page.form.fields[0].title}</span>
                </label>
                <input type="text" placeholder="{data.page.form.fields[0].placeholder}" name="{data.page.form.fields[0].placeholder}" class="input input-ghost"/>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">{data.page.form.fields[1].title}</span>
                </label>
                <input type="text" placeholder="{data.page.form.fields[1].placeholder}" name="{data.page.form.fields[1].name}" class="input input-ghost"/>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">{data.page.form.fields[2].title}</span>
                </label>
                <select class="select select-ghost" name="{data.page.form.fields[2].name}">
                    <option disabled selected>{data.page.form.fields[2].placeholder}</option>
                    {#each data.page.form.subjects as subject}
                        <option value="{subject.value}">{subject.title}</option>
                    {/each}
                </select>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">{data.page.form.fields[3].title}</span>
                </label>
                <textarea class="textarea textarea-lg textarea-bordered border-green"
                          placeholder="{data.page.form.fields[3].placeholder}" name="{data.page.form.fields[3].name}"></textarea>
            </div>
            <div class="form-control mt-6">
                <button class="btn bg-green hover" type="submit">{data.page.form.button}</button>
            </div>
        </form>
    </div>
</div>
