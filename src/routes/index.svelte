<script context="module">
	export const prerender = true;

	import {listeningBridgeCount, signallNodeCount, webNodeCount, activeDappsCount} from '$lib/store.js'
	import { get } from 'svelte/store'
	import StatBox from '$lib/StatBox.svelte';
	import LastConnections from '$lib/cards/lastConnections.svelte';
	import DappList from '$lib/cards/dappList.svelte';
</script>

<svelte:head>
	<title>Explorer</title>
	<meta name="description" content="Foxql candidate node explorer" />
</svelte:head>

<section>
	<div class = "stats-container">
		<StatBox
			text = "Web Nodes"
			value = {$webNodeCount}
			width = {25}
		/>
		<StatBox
			text = "Bridge Nodes"
			value = {get(listeningBridgeCount)}
			width = {25}
		/>
		<StatBox
			text = "Signalling Nodes"
			value = {$signallNodeCount}
			width = {25}
		/>
		<StatBox
			text = "Online Dapps"
			value = {$activeDappsCount}
			width = {25}
		/>
	</div>
</section>

<div class = "container">
	<div class = "item">
		<LastConnections />
	</div>
	<div class = "item">
		<DappList />
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
	}

	.container .item {
		width: 50%;
	}

	@media only screen and (max-width: 800px) {
        .stats-container {
            flex-direction: column;
        }

		.container {
			display: block;
		}

		.container .item {
			width: 100% !important;
		}

    }
	
</style>
