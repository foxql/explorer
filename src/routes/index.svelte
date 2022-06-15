<script context="module">
	export const prerender = true;

	import {listeningBridgeCount, signallNodeCount, webNodeCount, activeDappsCount} from '$lib/store.js'
	import { get } from 'svelte/store'
	import StatBox from '$lib/StatBox.svelte';
	import LastConnections from '$lib/cards/lastConnections.svelte';

	let webNodes, signallNodes, dapps

	webNodeCount.subscribe(v => webNodes = v)
	signallNodeCount.subscribe(v => signallNodes = v)
	activeDappsCount.subscribe(v => dapps = v)

</script>

<svelte:head>
	<title>Explorer</title>
	<meta name="description" content="Foxql candidate node explorer" />
</svelte:head>

<section>
	<div class = "stats-container">
		<StatBox
			text = "Web Nodes"
			value = {webNodes}
			width = {25}
		/>
		<StatBox
			text = "Bridge Nodes"
			value = {get(listeningBridgeCount)}
			width = {25}
		/>
		<StatBox
			text = "Signalling Nodes"
			value = {signallNodes}
			width = {25}
		/>
		<StatBox
			text = "Online Dapps"
			value = {dapps}
			width = {25}
		/>
	</div>
</section>

<div class = "container">
	<div class = "item">
		<LastConnections />
	</div>
	
</div>	

<style>
	section {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.stats-container {
		padding: 1rem 0rem;
		display: flex;
		justify-content: center;
  		align-items: center;
	}

	.container {
		display: flex;
		justify-content: space-between;
	}

	.container .item {
		width: 48.3%;
	}

	@media only screen and (max-width: 800px) {
        .stats-container {
            flex-direction: column;
        }

		.container .item {
			width: 100%;
		}

    }
	
</style>
