<script lang="ts">
	import type { anyItem } from '$lib/itemTypes';
	import { Table } from '$lib/table';
	import { onMount } from 'svelte';

	export let existingItem: anyItem, mode: 'create' | 'edit';

	const mainTypeStats = {
		gearStatic: [
			'power',
			'defense',
			'agility',
			'attackSpeed',
			'attackSize',
			'intensity',
			'regeneration',
			'piercing',
			'resistance',

			'insanity',
			'warding',
			'drawback'
		],
		gearIncrement: [
			'powerIncrement',
			'defenseIncrement',
			'agilityIncrement',
			'attackSpeedIncrement',
			'attackSizeIncrement',
			'intensityIncrement',
			'regenerationIncrement',
			'piercingIncrement',
			'resistanceIncrement',

			'insanity',
			'warding',
			'drawback'
		],
		ship: [
			'durability',
			'magicStorage',
			'ramDefense',
			'ramStrength',
			'resilience',
			'speed',
			'stability',
			'turning'
		]
	};
	const rarities = ['None', 'Common', 'Uncommon', 'Rare', 'Exotic', 'Legendary', 'Seasonal'];
	const tableSettings: {
		mainType: {
			[key: string]: {
				levelVisibility: boolean;
				subTypes: string[] | boolean;
				gemVisibility: boolean;
				modifiable: boolean;
			};
		};
	} = {
		mainType: {
			Accessory: {
				levelVisibility: true,
				subTypes: [
					'None',
					'Head',
					'Helmet',
					'Hat',
					'Face',
					'Neck',
					'Amulet',
					'Shoulder',
					'Collar',
					'Arms',
					'Arm',
					'Back',
					'Front',
					'Waist',
					'Magic',
					'Strength'
				],
				gemVisibility: true,
				modifiable: true
			},
			Chestplate: {
				levelVisibility: true,
				subTypes: ['None', 'Magic', 'Strength'],
				gemVisibility: true,
				modifiable: true
			},
			Pants: {
				levelVisibility: true,
				subTypes: ['None', 'Magic', 'Strength'],
				gemVisibility: true,
				modifiable: true
			},
			Gem: {
				levelVisibility: false,
				subTypes: false,
				gemVisibility: false,
				modifiable: false
			},
			Enchant: { levelVisibility: false, subTypes: false, gemVisibility: false, modifiable: false },
			Modifier: { levelVisibility: false, subTypes: false, gemVisibility: false, modifiable: false }
		}
	};
	const fallbackImage: string =
		'https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/unknown.jpg';

	//Default Initiators
	let statsTable = new Table(90, 130, true);
	let validCategories: string[] = mainTypeStats.gearStatic;
	let htmlImageId: string = fallbackImage;

	let itemData: Partial<anyItem> = {
		id: 0,
		name: '',
		legend: '',
		mainType: 'Accessory',
		subType: 'None',
		rarity: 'None',
		imageId: htmlImageId,
		gemNo: 0,
		statsPerLevel: [],
		validModifiers: []
	};

	// Change if edit
	if (mode == 'edit') {
		itemData = {
			id: existingItem.id,
			name: existingItem.name,
			legend: existingItem.legend,
			mainType: existingItem.mainType,
			subType: existingItem.subType,
			rarity: existingItem.rarity,
			imageId: existingItem.imageId,
			gemNo: existingItem.gemNo,
			statsPerLevel: existingItem.statsPerLevel,
			validModifiers: existingItem.validModifiers
		};

		for (const modifier in itemData.validModifiers) {
			statsTable.validModifiers[modifier] = true;
		}
	}

	// Create a writable store for the table data

	function updateMainType() {
		itemData.subType = tableSettings.mainType[itemData.mainType].subTypes[0];
		if (['Accessory', 'Chestplate', 'Pants', 'Gem'].includes(itemData.mainType)) {
			validCategories = mainTypeStats.gearStatic;
		} else if (['Enchant', 'Modifier'].includes(itemData.mainType)) {
			validCategories = mainTypeStats.gearIncrement;
		} else {
			validCategories = mainTypeStats.ship;
		}

		for (const stat in statsTable.visiBools) {
			if (!validCategories.includes(stat)) {
				statsTable.visiBools[stat].bool = false;
			}
		}
		statsTable.levelVisibility = tableSettings.mainType[itemData.mainType].levelVisibility;
		statsTable.updateColumns();
	}

	function handleImageChange() {
		let img = new Image();
		img.src = itemData.imageId;
		img.onerror = function () {
			htmlImageId = fallbackImage;
		};
		img.onload = function () {
			htmlImageId = itemData.imageId;
		};
	}
	// Function to handle changes in itemData

	function generateEntry() {
		let item: Partial<anyItem> = {
			id: itemData.id,
			name: itemData.name,
			legend: itemData.legend,
			mainType: itemData.mainType,
			rarity: itemData.rarity,
			imageId: htmlImageId
		};

		if (['Accessory', 'Chestplate', 'Pants'].includes(itemData.mainType)) {
			item.subType = itemData.subType;
			item.gemNo = itemData.gemNo;
			item.statsPerLevel = statsTable.getData();
			item.validModifiers = [];
			for (const modifier in statsTable.validModifiers) {
				if (statsTable.validModifiers[modifier] == true) {
					item.validModifiers.push(modifier);
				}
			}
		} else {
			for (const statKey in statsTable.getData()) {
				item[statKey] = statsTable.getData()[statKey];
			}
		}

		console.log(item, new Blob([JSON.stringify(item)]).size);
	}

	onMount(() => {
		statsTable.updateColumns();
	});
</script>

<div class="m-20 w-full h-full">
	<!-- 
		
		Item Identifiers 
	
	-->
	<div class="flex flex-wrap">
		<div class="flex flex-col w-96 mr-5">
			<label for="name">Name:</label>
			<input type="text" id="name" class="w-full p-2 rounded-sm" bind:value={itemData.name} />
		</div>

		<div class="flex flex-col w-96 mr-5">
			<label for="legend">Legend:</label>
			<input type="text" id="legend" class="w-full p-2 rounded-sm" bind:value={itemData.legend} />
		</div>

		<div class="flex flex-col w-96 mr-5">
			<label for="rarity">Main Type:</label>
			<select
				id="rarity"
				class="w-full p-2 rounded-sm"
				bind:value={itemData.mainType}
				on:change={() => updateMainType()}
			>
				{#each Object.keys(tableSettings.mainType) as mainType}
					<option value={mainType}>{mainType}</option>
				{/each}
			</select>
		</div>

		{#if tableSettings.mainType[itemData.mainType].subTypes != false}
			<div class="flex flex-col w-96 mr-5">
				<label for="rarity">Sub Type:</label>
				<select id="rarity" class="w-full p-2 rounded-sm" bind:value={itemData.subType}>
					{#each tableSettings.mainType[itemData.mainType].subTypes as mainType}
						<option value={mainType}>{mainType}</option>
					{/each}
				</select>
			</div>
		{/if}

		{#if tableSettings.mainType[itemData.mainType].levelVisibility == true}
			<div class="flex flex-col w-96 mr-5">
				<label for="minLevel">Minimum Level:</label>
				<input
					type="number"
					id="minLevel"
					min="10"
					max={statsTable.maxLevel - 10}
					step="10"
					class="w-full p-2 rounded-sm"
					bind:value={statsTable.minLevel}
					on:input={() => statsTable.updateColumns()}
				/>
			</div>

			<div class="flex flex-col w-96 mr-5">
				<label for="maxLevel">Maximum Level:</label>
				<input
					type="number"
					id="maxLevel"
					min={statsTable.minLevel + 10}
					step="10"
					class="w-full p-2 rounded-sm"
					bind:value={statsTable.maxLevel}
					on:input={() => statsTable.updateColumns()}
				/>
			</div>
		{/if}

		<div class="flex flex-col w-96 mr-5">
			<label for="rarity">Rarity:</label>
			<select id="rarity" class="w-full p-2 rounded-sm" bind:value={itemData.rarity}>
				{#each rarities as rarity}
					<option value={rarity}>{rarity}</option>
				{/each}
			</select>
		</div>

		<div class="flex flex-col w-96 mr-5">
			<label for="imageId">Image ID:</label>
			<input
				type="text"
				id="imageId"
				class="w-full p-2 rounded-sm"
				bind:value={itemData.imageId}
				on:input={() => handleImageChange()}
			/>
		</div>

		{#if tableSettings.mainType[itemData.mainType].gemVisibility == true}
			<div class="flex flex-col w-96 mr-5">
				<label for="gemNo">Gem Number:</label>
				<input type="number" id="gemNo" class="w-full p-2 rounded-sm" bind:value={itemData.gemNo} />
			</div>
		{/if}
	</div>

	<!-- 
		
		Preview Image
	
	-->
	<img class="h-32 w-32" alt="image" src={htmlImageId} />

	<!-- 
		
		VisiBools
	
	-->
	<div class="flex flex-wrap items-center">
		{#each validCategories as key}
			<div class="px-2">
				<input
					type="checkbox"
					bind:checked={statsTable.visiBools[key].bool}
					on:input={() => {
						statsTable.updateColumns();
					}}
				/>
				<label for="">{statsTable.visiBools[key].text}</label>
			</div>
		{/each}
	</div>

	<!-- 
		
		Modifier Checkboxes 
	
	-->
	{#if tableSettings.mainType[itemData.mainType].modifiable == true}
		<div class="flex flex-wrap items-center">
			{#each Object.keys(statsTable.validModifiers) as key}
				<div class="px-2">
					<input
						type="checkbox"
						bind:checked={statsTable.validModifiers[key]}
						on:input={() => {
							statsTable.updateColumns();
						}}
					/>
					<label for="">{key}</label>
				</div>
			{/each}
		</div>
	{/if}

	<!--

		Table

	-->
	<div class="flex flex-wrap">
		<div class="flex flex-col w-10 items-center gap-1 mr-2">
			{#if statsTable.levelVisibility}
				<div class="w-full mb-1 text-amber-200">Level</div>
			{:else}
				<div class="w-full mb-1 text-amber-200">Stats</div>
			{/if}

			{#each Object.keys(statsTable.visiBools) as stat}
				{#if statsTable.visiBools[stat].bool === true}
					<div class="w-full mb-1 text-amber-200 h-3 items-center">
						<img alt={statsTable.visiBools[stat].text} src={statsTable.visiBools[stat].imageId} />
					</div>
				{/if}
			{/each}
		</div>
		{#each statsTable.columns as column}
			<div class="flex flex-col w-10 items-center gap-1 mr-2">
				{#each Object.keys(column) as key}
					{#if key != 'parentTable'}
						{#if key === 'level'}
							{#if statsTable.levelVisibility}
								<div class="w-full mb-1 text-amber-200">{column.level}</div>
							{:else}
								<div class="w-full mb-1 text-amber-200">-</div>
							{/if}
						{:else if key !== 'level ' && statsTable.visiBools[key].bool === true}
							<input type="number" class="w-full max-w-full" bind:value={column[key]} />
						{/if}
					{/if}
				{/each}
			</div>
		{/each}
	</div>

	<button
		class="p-2 bg-amber-500 rounded-sm"
		on:click={() => {
			generateEntry();
		}}
	>
		Generate Table</button
	>
</div>

<style>
	label {
		color: aliceblue;
	}
</style>
