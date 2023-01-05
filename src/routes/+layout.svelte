<script>
    import "../app.css";
</script>
<div class="h-screen">
    <nav class="flex items-center justify-between bg-gray-800 p-6 pl-14">
        <div class="flex items-center flex-shrink-0 text-white ml-6 mr-6">
            <a href="/" class="font-semibold text-xl tracking-tight">Melton Zheng's Profolio
            </a>
        </div>
        
        <ul class="flex justify-between">
            <li class="mr-4">
                <a href="/resume" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white lg:mt-0">
                Resume
                </a>
            </li>     
            <li class="mr-4">
                <a href="/projects" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white lg:mt-0">
                Projects
                </a>
            </li>
            <li class="mr-4">
                <a href="/leetcode" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white lg:mt-0">
                Leetcode
                </a>
            </li>
            <li class="mr-4">
                <a href="/settings" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white lg:mt-0">
                Settings
                </a>
            </li>
        </ul>
    </nav>
    <slot />
    <footer class="text-white absolute inset-x-0 bottom bg-gray-800 p-7 pl-14">
        Copyright Melton Zheng
    </footer>
</div>
