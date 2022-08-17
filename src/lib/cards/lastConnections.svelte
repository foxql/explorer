<script>
    import Card from '$lib/cards/Card.svelte'
    import {lastPowSignall} from '$lib/store.js'

    let signalls = []

    lastPowSignall.subscribe(message=> {
        if(message){
            signalls = [...signalls, message]
        }
    })

</script>


<Card title = "Last Pow Connections">

    {#if signalls.length === 0}
        <p>Listening Pow Messages...</p>
    {/if}

    {#each signalls as {answer, nonce}}
        <div class = "item">
            <span class = "icon">
                N
            </span>
            <span>
                <a href = "/">
                    {answer.slice(0, 36)}...
                </a>
            </span>
            <small>nonce: {nonce}</small>
    </div>
    {/each}
</Card>

<style>
    .item {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }

    .item .icon {
        padding: 1rem 1.2rem;
        background: #222;
        color: var(--text-color);
        text-align: center;
        border-radius: 300px;
        margin-right: 0.5rem;
    }

    .item small {
        background: #555;
        font-size: 0.6rem;
        padding: 0.5rem 1rem;
        border-radius: 16px;
        position: absolute;
        bottom: 0px;
        right: 0px;
    }

    a {
        color: rgb(159, 159, 255);
    }
</style>