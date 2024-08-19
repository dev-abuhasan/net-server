export interface User {
    id?: number; // Optional for create operations
    name: string;
    email: string;
    password: string;
    role: 'sa' | 'admin' | 'user';
}