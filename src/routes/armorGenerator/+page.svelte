<script lang="ts">
	import EditMenu from '$lib/components/EditMenu.svelte';
</script>

<EditMenu
	mode={'create'}
	existingItem={{
		id: 0,
		name: 'test',
		legend: 'test',
		mainType: 'Accessory',
		subType: 'None',
		rarity: 'Rare',
		imageId: 'test',
		gemNo: 0,
		statsPerLevel: []
	}}
></EditMenu>
