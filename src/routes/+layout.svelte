<script>
    import './styles.css';
    import Footer from './components/footer.svelte'
    import logo from '$lib/images/logo.png';

    export let data;
</script>

<main class="drawer bg-base">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content flex flex-col">

        <!-- Navbar -->
        <div class="w-full navbar bg-base border-b border-0 border-green fixed z-50">
            <div class="flex-none lg:hidden">
                <label for="my-drawer-3" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </label>
            </div>
            <div class="flex-1 px-2 mx-2">
                <a class="hidden lg:block" href="/">
                    <img class="w-10" src="{logo}" alt="logo">
                </a>
            </div>
            <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal uppercase">
                    {#each data.nav as n}
                        <li class="hover:overline">
                            {#if n.attributes.Head.isInMenu}
                                <a href="{n.attributes.Head.url}">{n.attributes.Head.title}</a>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Page content here -->
        <slot nav={data.nav}/>
        <Footer nav={data.nav} home="{data.home}"/>

    </div>
    <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 w-65 md:w-80 bg-base uppercase border-r border-0 border-green">
            <div class="flex-1">
                <div class="flex flex-row justify-between w-full">
                    <a href="/">
                        <img class="w-10" src="{logo}" alt="logo">
                    </a>
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>
                </div>

            </div>

            <!-- Sidebar content here -->
            <div class="border-0 border-t border-green">
            {#each data.nav as n}
                <li class="hover:overline">
                    {#if n.attributes.Head.isInMenu}
                        <a href="{n.attributes.Head.url}">{n.attributes.Head.title}</a>
                    {/if}
                </li>
            {/each}
            </div>
        </ul>
    </div>
</main>
