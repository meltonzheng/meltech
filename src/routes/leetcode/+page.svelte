<script>
    export let data;
</script>

<div class="h-4/6 flex flex-col p-10 pl-20 text-white">
    <div class="grid grid-cols-4 gap-4">
        {#each data.summaries as {slug, title}}
            <a class="border rounded-xl p-5 hover:border-transparent hover:text-gray-800 hover:bg-white text-center" href="/leetcode/{slug}">{title}</a>
        {/each}
    </div>
</div>

