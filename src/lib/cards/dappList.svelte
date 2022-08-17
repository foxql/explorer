<script>
    import Card from '$lib/cards/Card.svelte'
    import {dappList} from '$lib/store.js'


</script>


<Card title = "Active Dapps">
    {#each $dappList as {alias, origins, webNodeCount}}

        <div class = "item">
            <div class = "title">
                {alias}
                <span class = "right">{webNodeCount}</span>
            </div>

            <ul class = "body">
                {#each Object.values(origins) as {host}}
                    <li>
                        <a href = "{host}" target="_blank">{host}</a>
                    </li>
                {/each}
            </ul>
            
        </div>
        
    {/each}
</Card>

<style>
    .item {
        background: #333;
        padding: 0.5rem;
        border-radius: 2px;
    }
    .item .title {
        display: flex;
        padding: 0.5rem;
    }

    .title .right {
        margin-left: auto;
    }
    ul {
        list-style: none;
    }
</style>