import Car, { CarExpecification } from '../../domain/entities/car';

const database = new Set<Car>();

interface Args {
	car: CarExpecification;
}

export const resolvers = {
	Query: {
		listAll: (): Car[] => Array.from([...database]),
	},

	Mutation: {
		create: async (_: any, { car }: Args) => {
			const newCar = new Car(car);
			database.add(newCar);
			return newCar;
		},
	},
};
