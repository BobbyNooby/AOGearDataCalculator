<script lang="ts">
	import { Table } from '$lib/table';

	let minLevel: number = 10;
	let maxLevel: number = 100;

	let itemData: any = {
		id: 0,
		name: '',
		legend: '',
		mainType: '',
		subType: '',
		rarity: 'None',
		imageId: '',
		gemNo: 0,
		statsPerLevel: []
	};

	// Create a writable store for the table data

	let tableData = new Table(minLevel, maxLevel);

	// Function to handle changes in itemData
	function handleChange(event: any, field: string) {
		// Update the tableData store whenever minLevel or maxLevel changes
		tableData.minLevel = minLevel;
		tableData.maxlevel = maxLevel;
		tableData.updateColumns();
	}

	function generateEntry() {
		const item = {
			id: itemData.id,
			name: itemData.name,
			legend: itemData.legend,
			mainType: itemData.mainType,
			subType: itemData.subType,
			rarity: itemData.rarity,
			imageId: itemData.imageId,
			gemNo: itemData.gemNo,
			statsPerLevel: tableData.getData()
		};

		console.log(item);
	}
</script>

<div class="flex flex-wrap">
	<div class="flex flex-col w-96 mr-5">
		<label for="name">Name:</label>
		<input
			type="text"
			id="name"
			class="w-full p-2 rounded-sm"
			bind:value={itemData.name}
			on:input={(event) => handleChange(event, 'name')}
		/>
	</div>

	<div class="flex flex-col w-96 mr-5">
		<label for="legend">Legend:</label>
		<input
			type="text"
			id="legend"
			class="w-full p-2 rounded-sm"
			bind:value={itemData.legend}
			on:input={(event) => handleChange(event, 'legend')}
		/>
	</div>

	<div class="flex flex-col w-96 mr-5">
		<label for="minLevel">Minimum Level:</label>
		<input
			type="number"
			id="minLevel"
			min="0"
			step="10"
			class="w-full p-2 rounded-sm"
			bind:value={minLevel}
			on:input={(event) => handleChange(event, 'minLevel')}
		/>
	</div>

	<div class="flex flex-col w-96 mr-5">
		<label for="maxLevel">Maximum Level:</label>
		<input
			type="number"
			id="maxLevel"
			min="0"
			step="10"
			class="w-full p-2 rounded-sm"
			bind:value={maxLevel}
			on:input={(event) => handleChange(event, 'maxLevel')}
		/>
	</div>

	<div class="flex flex-col w-96 mr-5">
		<label for="mainType">Main Type:</label>
		<input
			type="text"
			id="mainType"
			class="w-full p-2 rounded-sm"
			bind:value={itemData.mainType}
			on:input={(event) => handleChange(event, 'mainType')}
		/>
	</div>

	<div class="flex flex-col w-96 mr-5">
		<label for="subType">Sub Type:</label>
		<input
			type="text"
			id="subType"
			class="w-full p-2 rounded-sm"
			bind:value={itemData.subType}
			on:input={(event) => handleChange(event, 'subType')}
		/>
	</div>

	<div class="flex flex-col w-96 mr-5">
		<label for="rarity">Rarity:</label>
		<select
			id="rarity"
			class="w-full p-2 rounded-sm"
			bind:value={itemData.rarity}
			on:change={(event) => handleChange(event, 'rarity')}
		>
			<option value="None">None</option>
			<option value="Common">Common</option>
			<option value="Uncommon">Uncommon</option>
			<option value="Rare">Rare</option>
			<option value="Exotic">Exotic</option>
			<option value="Seasonal">Seasonal</option>
			<option value="Legendary">Legendary</option>
		</select>
	</div>

	<div class="flex flex-col w-96 mr-5">
		<label for="imageId">Image ID:</label>
		<input
			type="text"
			id="imageId"
			class="w-full p-2 rounded-sm"
			bind:value={itemData.imageId}
			on:input={(event) => handleChange(event, 'imageId')}
		/>
	</div>

	<div class="flex flex-col w-96 mr-5">
		<label for="gemNo">Gem Number:</label>
		<input
			type="number"
			id="gemNo"
			class="w-full p-2 rounded-sm"
			bind:value={itemData.gemNo}
			on:input={(event) => handleChange(event, 'gemNo')}
		/>
	</div>
</div>
<div class="flex flex-wrap items-center">
	{#each Object.keys(tableData.visiBools) as key}
		<div class="px-2">
			<input
				type="checkbox"
				bind:checked={tableData.visiBools[key]}
				on:input={() => {
					tableData.updateColumns();
				}}
			/>
			<label for="">{key}</label>
		</div>
	{/each}
</div>

<div class="flex flex-wrap">
	{#each tableData.columns as column}
		<div class="flex flex-col w-10 items-center gap-1 mr-2">
			{#each Object.keys(column) as key}
				{#if key === 'level'}
					<div class="w-full mb-1 text-amber-200">{column.level}</div>
				{:else if tableData['visiBools'][key] === true}
					<input type="number" class="w-full max-w-full" bind:value={column[key]} />
				{/if}
			{/each}
		</div>
	{/each}
</div>

<button
	class="w-full p-2 bg-amber-500 rounded-sm"
	on:click={() => {
		generateEntry();
	}}
>
	Generate Table</button
>z

<style>
	label {
		color: aliceblue;
	}
</style>
