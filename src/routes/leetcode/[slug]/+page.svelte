<script>
    export let data;
</script>

<div class="h-4/6 flex flex-col p-10 pl-20 text-white">
    <h1>{data.post.title}</h1>
    <div>{@html data.post.content}</div>
</div>
