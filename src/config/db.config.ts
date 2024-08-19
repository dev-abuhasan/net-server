
import { ConnectionOptions } from 'mysql2';

const dbConfig: ConnectionOptions = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '72664228',
    database: process.env.DB_NAME || 'net_server',
};

export default dbConfig;