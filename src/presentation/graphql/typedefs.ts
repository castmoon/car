import { gql } from 'apollo-server-core';

export const typeDefs = gql`
	scalar Date
	type Car {
		id: ID!
		model: String!
		type: String!
		year: Date!
		price: String!
		kmTraveled: Int
	}

	type Query {
		listAll: [Car]
		get(id: String): Car
	}

	input CreateCar {
		model: String!
		type: String!
		year: Date!
		price: Int!
		kmTraveled: Int
	}

	type Mutation {
		create(car: CreateCar): Car
	}
`;
