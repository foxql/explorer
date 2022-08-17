<div class = "card">
    <div class = "title">
        {title}
    </div>
    <div class = "body">
        <slot></slot>
    </div>
</div>

<script>
    export let title
</script>

<style>
    .card {
        width: 100%;
        padding: 0.5rem;
        background: var(--background-without-opacity);
        border-radius: 4px;
        color: var(--text-color);
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
    .card .title {
        font-size: 1rem;
        padding: 0.5rem;
        font-weight: 600;
    }

    .body {
        padding: 0.5rem;
    }
    

</style>