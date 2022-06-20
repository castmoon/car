import { randomUUID } from 'crypto';
export interface CarExpecification {
	model: string;
	type: string;
	year: Date;
	price: number;
	kmTraveled: number;
	color: string;
}

export default class Car {
	id;
	private model;
	private type;
	private year;
	private price;
	private kmTraveled;
	private color;

	constructor({
		model,
		type,
		year,
		price,
		kmTraveled = 0,
		color,
	}: CarExpecification) {
		this.id = randomUUID();
		this.model = model;
		this.type = type;
		this.year = new Date(year).toISOString();
		this.price = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(price);
		this.kmTraveled = kmTraveled;
		this.color = color;
	}
}
