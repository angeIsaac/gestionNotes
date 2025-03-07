import dotenv from 'dotenv';
dotenv.config();

export const configs = {
    env: process.env.NODE_ENV || 'development',
    APP_DEBUG: process.env.APP_DEBUG === 'true',
    PORT: parseInt(process.env.PORT || "3000", 10),
    DB_PORT: parseInt(process.env.DB_PORT || "5432", 10),
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_NAME: process.env.DB_NAME || "",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    NAME: process.env.NAME || "",
}