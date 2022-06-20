import { resolvers } from './presentation/graphql/resolvers';
import { typeDefs } from './presentation/graphql/typedefs';
import { startApolloServer } from './server';

(async () => {
	await startApolloServer(typeDefs, resolvers);
})();
