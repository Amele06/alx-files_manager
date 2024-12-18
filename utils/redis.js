// Import necessary modules
// import { createClient } from 'redis';  // createClient is used to create a Redis client instance
// import { promisify } from 'util';  // promisify converts callback-based functions to return Promises
//
// class RedisClient {
//   constructor() {
//       // Create a Redis client instance and assign it to this.myClient
//           this.myClient = createClient();
//
//               // Log any errors that occur with the Redis client connection
//                   this.myClient.on('error', (error) => console.log(error));
//                     }
//
//                       // Method to check if Redis is alive (connected)
//                         isAlive() {
//                             return this.myClient.connected;  // Returns 'true' if connected, otherwise 'false'
//                               }
//
//                                 // Asynchronous method to get the value for a specific key from Redis
//                                   async get(key) {
//                                       // Promisify the Redis GET command to work with async/await
//                                           const getAsync = promisify(this.myClient.GET).bind(this.myClient);
//                                               // Retrieve the value for the given key and return it
//                                                   return getAsync(key);
//                                                     }
//
//                                                       // Asynchronous method to set a value for a specific key in Redis with an expiration time
//                                                         async set(key, val, time) {
//                                                             // Promisify the Redis SET command to use async/await
//                                                                 const setAsync = promisify(this.myClient.SET).bind(this.myClient);
//                                                                     // Store the value for the key with an expiration time (in seconds)
//                                                                         return setAsync(key, val, 'EX', time);
//                                                                           }
//
//                                                                             // Asynchronous method to delete a specific key from Redis
//                                                                               async del(key) {
//                                                                                   // Promisify the Redis DEL command to use async/await
//                                                                                       const delAsync = promisify(this.myClient.DEL).bind(this.myClient);
//                                                                                           // Delete the key from Redis and return the result
//                                                                                               return delAsync(key);
//                                                                                                 }
//                                                                                                 }
//
//                                                                                                 // Create an instance of the RedisClient class and export it
//                                                                                                 const redisClient = new RedisClient();
//                                                                                                 export default redisClient;
//
