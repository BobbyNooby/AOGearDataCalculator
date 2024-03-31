<script>
	import { goto } from '$app/navigation';
</script>

<div>
	<h1>Welcome to the Homepage</h1>

	<button on:click={() => goto('/armorGenerator')}>Go to Armor Data Generator</button>
</div>
