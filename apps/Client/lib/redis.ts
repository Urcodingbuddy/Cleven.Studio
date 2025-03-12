import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || '12243')
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

export default client;

