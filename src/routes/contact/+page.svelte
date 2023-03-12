<svelte:head>
    <title>My Story</title>
    <meta name="description" content="About page"/>
</svelte:head>

<div class="min-h-screen flex">
    <div class="w-1/2 border-r border-0 border-green"
         style="background-image: url('https://crealion-backend.fly.dev/uploads/image_6e1c73ac83.jpg');">
    </div>
    <div class="w-1/2 flex m-auto">
        <form class="container p-12 text-center">
            <div class="form-control my-6">
                <h2 class="text-xl font-bold uppercase my-3">Contactez moi</h2>
                <p class="text-xs">Une idée de projet ? Besoin d'aide? Envoyez-moi un message ci-dessous:</p>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">Nom Prénom *</span>
                </label>
                <input type="text" placeholder="Jean Michel..." name="name" class="input input-ghost"/>
            </div>
            <div class="form-control border-b border-0 border-green">
                <label class="label">
                    <span class="label-text">Email *</span>
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
                    <span class="label-text">Message *</span>
                </label>
                <textarea class="textarea textarea-lg textarea-bordered border-green"
                          placeholder="Message ..." name="message"></textarea>
            </div>
            <div class="form-control mt-6">
                <button class="btn bg-green hover" type="submit">Envoyer</button>
            </div>
        </form>
    </div>
</div>
