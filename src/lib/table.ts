// place files you want to import through the `$lib` alias in this folder.
type visiBoolOptions = {
	bool: boolean;
	text: string;
	imageId: string;
};

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
		'drawback',

		'durability',
		'magicStorage',
		'ramDefense',
		'ramStrength',
		'resilience',
		'speed',
		'stability',
		'turning'
	];

	for (const key of keys) {
		if (visiBools[key].bool === true && inputData[key] != 0) {
			returndata[key] = inputData[key];
		}
	}
	return returndata;
}

export type statSlot = { visible: boolean; value: number };

export class Column {
	parentTable: Table;

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

	durability: number;
	magicStorage: number;
	ramDefense: number;
	ramStrength: number;
	resilience: number;
	speed: number;
	stability: number;
	turning: number;
	constructor(level: number, parentTable: Table) {
		this.parentTable = parentTable;

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

		this.powerIncrement = 0;
		this.defenseIncrement = 0;
		this.agilityIncrement = 0;
		this.attackSpeedIncrement = 0;
		this.attackSizeIncrement = 0;
		this.intensityIncrement = 0;
		this.regenerationIncrement = 0;
		this.piercingIncrement = 0;
		this.resistanceIncrement = 0;

		this.insanity = 0;
		this.warding = 0;
		this.drawback = 0;

		this.durability = 0;
		this.magicStorage = 0;
		this.ramDefense = 0;
		this.ramStrength = 0;
		this.resilience = 0;
		this.speed = 0;
		this.stability = 0;
		this.turning = 0;
	}

	getData() {
		let data: any = { level: this.level };
		for (const key in this) {
			if (!['parentTable', 'level'].includes(key)) {
				if (
					// Filter out nonexistent data
					this.hasOwnProperty(key) &&
					this.parentTable.visiBools[key].bool === true &&
					this[key] !== 0
				) {
					data[key] = this[key];
				}
			}
		}
		return data;
	}
}

export class Table {
	minLevel: number;
	maxLevel: number;
	levelVisibility: boolean;
	columns: Column[];
	visiBools: { [key: string]: visiBoolOptions };
	validModifiers: { [key: string]: boolean };
	constructor(minLevel: number, maxLevel: number, levelVisibility: boolean) {
		this.minLevel = minLevel;
		this.maxLevel = maxLevel;
		this.levelVisibility = levelVisibility;
		this.columns = [];
		this.visiBools = {
			power: {
				bool: false,
				text: 'Power',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png`
			},
			defense: {
				bool: false,
				text: 'Defense',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/defense.png`
			},
			agility: {
				bool: false,
				text: 'Agility',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/agility.png`
			},
			attackSpeed: {
				bool: false,
				text: 'Attack Speed',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/attackSpeed.png`
			},
			attackSize: {
				bool: false,
				text: 'Attack Size',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/attackSize.png`
			},
			intensity: {
				bool: false,
				text: 'Intensity',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/intensity.png`
			},
			regeneration: {
				bool: false,
				text: 'Regeneration',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png`
			},
			piercing: {
				bool: false,
				text: 'Piercing',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png`
			},
			resistance: {
				bool: false,
				text: 'Resistance',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png`
			},

			powerIncrement: {
				bool: false,
				text: 'Power Increment',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png`
			},
			defenseIncrement: {
				bool: false,
				text: 'Defense Increment',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/defense.png`
			},
			agilityIncrement: {
				bool: false,
				text: 'Agility Increment',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/agility.png`
			},
			attackSpeedIncrement: {
				bool: false,
				text: 'Attack Speed Increment',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/attackSpeed.png`
			},
			attackSizeIncrement: {
				bool: false,
				text: 'Attack Size Increment',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/attackSize.png`
			},
			intensityIncrement: {
				bool: false,
				text: 'Intensity Increment',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/intensity.png`
			},
			regenerationIncrement: {
				bool: false,
				text: 'Regeneration Increment',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png`
			},
			piercingIncrement: {
				bool: false,
				text: 'Piercing Increment',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png`
			},
			resistanceIncrement: {
				bool: false,
				text: 'Resistance Increment',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png`
			},

			insanity: {
				bool: false,
				text: 'Insanity',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/insanity.png`
			},
			warding: {
				bool: false,
				text: 'Warding',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/warding.png`
			},
			drawback: {
				bool: false,
				text: 'Drawback',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/drawback.png`
			},

			durability: {
				bool: false,
				text: 'Durability',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/durability.png`
			},

			magicStorage: {
				bool: false,
				text: 'Magic Storage',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/magicStorage.png`
			},
			ramDefense: {
				bool: false,
				text: 'Ram Defense',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/ramDefense.png`
			},
			ramStrength: {
				bool: false,
				text: 'Ram Strength',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/ramStrength.png`
			},
			resilience: {
				bool: false,
				text: 'Resilience',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/resilience.png`
			},
			speed: {
				bool: false,
				text: 'Speed',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/speed.png`
			},
			stability: {
				bool: false,
				text: 'Stability',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/stability.png`
			},
			turning: {
				bool: false,
				text: 'Turning',
				imageId: `https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/turning.png`
			}
		};
		this.validModifiers = {
			'Atlantean Essence': false,
			Frozen: false,
			Archaic: false,
			Sandy: false,
			Superheated: false,
			Drowned: false,
			Blasted: false,
			Crystalline: false
		};

		for (let level = minLevel; level <= maxLevel; level += 10) {
			this.columns.push(new Column(level, this));
		}
		this.updateColumns();
	}

	getColumns() {
		return this.columns;
	}

	//Resie method
	updateColumns() {
		if (this.levelVisibility) {
			const newMinLevel = Math.min(this.minLevel, this.maxLevel);
			const newMaxLevel = Math.max(this.minLevel, this.maxLevel);

			const filteredColumns = this.columns.filter(
				(column) => newMinLevel <= column.level && column.level <= newMaxLevel
			);

			const newColumns = [];
			for (let level = newMinLevel; level <= newMaxLevel; level += 10) {
				let column: any = filteredColumns.find((column) => column.level === level);
				if (column) {
					newColumns.push(column);
				} else {
					newColumns.push(new Column(level, this));
				}
			}

			this.minLevel = newMinLevel;
			this.maxLevel = newMaxLevel;
			this.columns = newColumns;
		} else {
			if (this.columns.length > 1) {
				this.columns = [new Column(0, this)];
			}
		}
	}

	getData() {
		let data = this.columns.map((column) => column.getData());

		if (this.levelVisibility) {
			return data;
		} else {
			delete data[0].level;
			return data[0];
		}
	}
}
