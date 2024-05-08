import { port } from './config/environment';
import app from './app';
// import apolloServer from './graphql';

import apolloServer from "./graphql";
import connectDB from './db';

const start = async () => {
  try {
    
    console.log('Connecting to database');
    await connectDB();
    console.log('Connected to database');

    await apolloServer.start();
    apolloServer.applyMiddleware({ app })
    app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch(error) {
    console.log('Not able to run GraphQL server', error.message);
  }
};

start();
//  await apolloServer.start()
//  apolloServer.applyMiddleware({
//   app,
// });

// const server = new ApolloServer({ schema });
// const startApollo = async () => {
//   try {
//     await apolloServer.start();
//     apolloServer.applyMiddleware({ app})
//     app.listen(port);
//     console.log(`🚀  GraphQL server running at port: ${port}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// startApollo()