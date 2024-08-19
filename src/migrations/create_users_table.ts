import mysql from 'mysql2/promise';
import dbConfig from '../config/db.config';

const createUsersTable = async () => {
    const connection = await mysql.createConnection(dbConfig);


    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM('sa', 'admin', 'user') NOT NULL
        );
    `;

    try {
        await connection.query(createTableQuery);
        console.log('Users table created or already exists.');
    } catch (error) {
        console.error('Error creating users table:', error);
    } finally {
        await connection.end();
    }
};

createUsersTable();
