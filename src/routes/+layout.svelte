<script>
	import '../app.css';
</script>

<div class="app bg-zinc-800"><slot /></div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
