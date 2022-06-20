import Car, { CarExpecification } from '../../domain/entities/car';
import { faker } from '@faker-js/faker';

const database = new Map();

function* generateData(entries: number): Generator<Car> {
	for (let i = 0; i < entries; i++) {
		const car = new Car({
			kmTraveled: 0,
			model: faker.vehicle.model(),
			type: faker.vehicle.type(),
			price: +faker.random.numeric(5),
			year: faker.date.future(1),
			color: faker.vehicle.color(),
		});

		yield car;
	}
}

for (const data of generateData(10)) {
	database.set(data.id, data);
}

interface Args {
	car: CarExpecification;
}

export const resolvers = {
	Query: {
		listAll: () => database.values(),
		get: (_: any, { id }: any) => {
			return database.get(id);
		},
	},

	Mutation: {
		create: async (_: any, { car }: Args) => {
			const newCar = new Car(car);
			database.set(newCar.id, newCar);
			return newCar;
		},
	},
};
