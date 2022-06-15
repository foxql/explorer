<script>
    export let width = 33
    export let text
    export let value
</script>

<div class = "card" style = "width:{width}%;">
    <span>{text}</span>
    <span class = "right">{value}</span>
</div>

<style>

    .card {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        background: var(--background-without-opacity);
        border-radius: 4px;
        color: var(--text-color);
        margin-right: 1rem;
    }

    .card .right {
        margin-left: auto;
        padding: 0.5rem;
        border-radius: 4px;
        background: #444;
        color: var(--text-color);
    }

    .card:last-child {
        margin-right: -1rem;
    }

    @media only screen and (max-width: 800px) {
        .card {
            width: 100% !important;
            margin: 0.4rem 0 !important;
        }
    }

</style>