// place files you want to import through the `$lib` alias in this folder.
import { writable } from 'svelte/store';
function filterData(inputData: any, visiBools: any) {
	let returndata: any = { level: inputData.level };

	const keys = [
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
	];

	for (const key of keys) {
		if (visiBools[key] === true && inputData[key] != 0) {
			returndata[key] = inputData[key];
		}
	}
	return returndata;
}

export type ArmorData = {
	id: number;
	name: string;
	legend: string;
	minLevel: number;
	maxLevel: number;
	mainType: string;
	subType: string;
	rarity: 'None' | 'Common' | 'Uncommon' | 'Rare' | 'Exotic' | 'Seasonal' | 'Legendary';
	imageId: string;
	gemNo: number;

	basePower: number;
	baseDefense: number;
	baseAgility: number;
	baseAttackSpeed: number;
	baseAttackSize: number;
	baseIntensity: number;
	baseRegeneration: number;
	basePiercing: number;
	baseResistance: number;

	powerIncrement: number;
	defenseIncrement: number;
	agilityIncrement: number;
	attackSpeedIncrement: number;
	attackSizeIncrement: number;
	intensityIncrement: number;
	regenerationIncrement: number;
	piercingIncrement: number;
	resistanceIncrement: number;

	insanity: number;
	warding: number;
	drawback: number;
};

export type statSlot = { visible: boolean; value: number };

export class Column {
	level: number;
	power: number;
	defense: number;
	agility: number;
	attackSpeed: number;
	attackSize: number;
	intensity: number;
	regeneration: number;
	piercing: number;
	resistance: number;
	insanity: number;
	warding: number;
	drawback: number;
	constructor(level: number) {
		this.level = level;
		this.power = 0;
		this.defense = 0;
		this.agility = 0;
		this.attackSpeed = 0;
		this.attackSize = 0;
		this.intensity = 0;
		this.regeneration = 0;
		this.piercing = 0;
		this.resistance = 0;
		this.insanity = 0;
		this.warding = 0;
		this.drawback = 0;
	}

	getData() {
		return {
			level: this.level,

			power: this.power,
			defense: this.defense,
			agility: this.agility,
			attackSpeed: this.attackSpeed,
			attackSize: this.attackSize,
			intensity: this.intensity,

			regeneration: this.regeneration,
			piercing: this.piercing,
			resistance: this.resistance,

			insanity: this.insanity,
			warding: this.warding,
			drawback: this.drawback
		};
	}
}

export class Table {
	minLevel: number;
	maxlevel: number;
	columns: Column[];
	visiBools: any;
	constructor(minLevel: number, maxLevel: number) {
		this.minLevel = minLevel;
		this.maxlevel = maxLevel;
		this.columns = [];
		this.visiBools = {
			power: false,
			defense: false,
			agility: false,
			attackSpeed: false,
			attackSize: false,
			intensity: false,
			regeneration: false,
			piercing: false,
			resistance: false,
			insanity: false,
			warding: false,
			drawback: false
		};

		for (let level = minLevel; level <= maxLevel; level += 10) {
			this.columns.push(new Column(level));
		}
		this.updateColumns();
	}

	getColumns() {
		return this.columns;
	}

	updateColumns() {
		const newMinLevel = Math.min(this.minLevel, this.maxlevel);
		const newMaxLevel = Math.max(this.minLevel, this.maxlevel);
		const filteredColumns = this.columns.filter(
			(column) => newMinLevel <= column.level && column.level <= newMaxLevel
		);

		const newColumns = [];
		for (let level = newMinLevel; level <= newMaxLevel; level += 10) {
			let column: any = filteredColumns.find((column) => column.level === level);
			if (column) {
				newColumns.push(column);
			} else {
				newColumns.push(new Column(level));
			}
		}

		this.minLevel = newMinLevel;
		this.maxlevel = newMaxLevel;
		this.columns = newColumns;
	}

	getData() {
		let data = this.columns.map((column) => filterData(column.getData(), this.visiBools));

		return data;
	}
}
