<script>
    import './styles.css';
    import Footer from './components/footer.svelte'

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
            <div class="flex-1 px-2 mx-2"><a href="/">CL</a></div>
            <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal uppercase">

                    <!-- Navbar menu content here -->
                    {#each data.nav as n}
                        <li class="hover:overline">
                            <a href="{n.url}">{n.name}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Page content here -->
        <slot nav={data.nav}/>
        <Footer nav={data.nav}/>

    </div>
    <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 uppercase">

            <!-- Sidebar content here -->
            {#each data.nav as n}
                <li class="hover:overline">
                    <a href="{n.url}">{n.name}</a>
                </li>
            {/each}
        </ul>
    </div>
</main>
