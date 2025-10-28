import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const users = [
    { id: '1', name: 'Alice', age: 30, isMarried: false },
    { id: '2', name: 'Bob', age: 25, isMarried: true },
    { id: '3', name: 'Charlie', age: 35, isMarried: true },
]

const typeDefs = `#graphql
  type Query{
    getUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation{
    createUser(name: String!, age: Int!, isMarried: Boolean!): User
  }

  type User{
    id: ID!
    name: String!
    age: Int!
    isMarried: Boolean!
  }

`

const resolvers = {
    Query: {
        getUsers: () => users,
        getUserById: (parents, args) => {
            const id = args.id;
            return users.find(user => user.id === id);
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const { name, age, isMarried} = args;
            const newUser = {
                id: (users.length + 1).toString(),
                name,
                age,
                isMarried,
            };
            users.push(newUser);
        },
    },
};

const server = new ApolloServer({typeDefs, resolvers})

const { url } = await startStandaloneServer(server, {
    listen: { port: 5000},
});

console.log(`Server running at ${url}`)

