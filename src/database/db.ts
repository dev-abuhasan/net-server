import mysql from 'mysql2/promise';
import dbConfig from '../config/db.config';

let connection: mysql.Pool | undefined;

const createDatabase = async (dbName: string) => {
    const tempConnection = await mysql.createConnection({
        ...dbConfig,
        database: undefined,
    });

    try {
        await tempConnection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    } catch (error) {
        console.error('Error creating database', error);
        process.exit(1);
    } finally {
        await tempConnection.end();
    }
};

const createConnection = async () => {
    if (dbConfig.database) {
        await createDatabase(dbConfig.database);
    }

    connection = mysql.createPool(dbConfig);

    try {
        await connection.getConnection();
        console.log('Connected to the database'.blue);
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1);
    }
};

createConnection();

export default connection;
