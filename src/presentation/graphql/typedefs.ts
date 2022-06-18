import { gql } from 'apollo-server-core';

export const typeDefs = gql`
	scalar Date
	type Car {
		id: ID!
		name: String!
		model: String!
		type: CarType!
		year: Date!
		price: String!
		kmTraveled: Int
	}

	enum CarType {
		Conversible
		Hatchback
		Fastback
		SW
		SUV
		Minivan
		Pickup
	}

	type Query {
		listAll: [Car]
	}

	input CreateCar {
		name: String!
		model: String!
		type: CarType!
		year: Date!
		price: Int!
		kmTraveled: Int
	}

	type Mutation {
		create(car: CreateCar): Car
	}
`;
