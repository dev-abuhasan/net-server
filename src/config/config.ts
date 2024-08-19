const config = {
    APP: {
        JWT_SECRET: process.env.JWT_SECRET,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    },
    MY_SQL: {
        HOST: process.env.SQL_HOST,
        USER: process.env.SQL_USER,
        PASSWORD: process.env.SQL_PASSWORD,
        DB: process.env.SQL_DB,
    }
}
export default config;