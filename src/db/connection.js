import {Sequelize} from "sequelize"
import {configs} from "../utils/config.js";
import cls from "cls-hooked";

const nameSpace = cls.createNamespace("transaction");
Sequelize.useCLS(nameSpace);
export const sequelize = new Sequelize(configs.DB_NAME, configs.NAME, configs.DB_PASSWORD, {
    host: configs.DB_HOST,
    port: configs.DB_PORT,
    dialect: "postgres",
})

export const connection = async function() {
    try {
        await sequelize.authenticate()
        //await sequelize.sync()
        console.log("Connected to database")
    }catch (error) {
        console.error(error)
    }
}

const transaction = await sequelize.transaction();