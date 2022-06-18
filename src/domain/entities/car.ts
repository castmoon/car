import { randomUUID } from 'crypto';

enum CarType {
	Conversible = 'Conversible',
	Hatchback = 'Hatchback',
	Fastback = 'Fastback',
	SW = 'SW',
	SUV = 'SUV',
	Minivan = 'Minivan',
	Pickup = 'Pickup',
}
export interface CarExpecification {
	name: string;
	model: string;
	type: CarType;
	year: Date;
	price: number;
	kmTraveled: number;
}

export default class Car {
	private id;
	private name;
	private model;
	private type;
	private year;
	private price;
	private kmTraveled;

	constructor({
		name,
		model,
		type,
		year,
		price,
		kmTraveled = 0,
	}: CarExpecification) {
		this.id = randomUUID();
		this.name = name;
		this.model = model;
		this.type = type;
		this.year = new Date(year).toISOString();
		this.price = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(price);
		this.kmTraveled = kmTraveled;
	}
}
