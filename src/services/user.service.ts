import mysql from 'mysql2/promise';
import dbConfig from '../config/db.config';
import { User } from '../models/user.model';

const pool = mysql.createPool(dbConfig);

export const createUser = async (user: User) => {
    const [result] = await pool.query(
        'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
        [user.name, user.email, user.password, user.role]
    );
    return result;
};

export const getUserById = async (id: number) => {
    const [rows]: any = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

export const getAllUsers = async () => {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
};

export const updateUser = async (id: number, user: Partial<User>) => {
    const [result] = await pool.query(
        'UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?',
        [user.name, user.email, user.password, user.role, id]
    );
    return result;
};

export const deleteUser = async (id: number) => {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return result;
};
