import { Sequelize } from "sequelize";
import config from "../configs";

let sequelize: Sequelize;

try {
  sequelize = new Sequelize(config.database, config.user, config.password, {
    dialect: "postgres",
    host: config.host,
    port: config.dbport,
  });
} catch {
  throw new Error("Failed to connect");
}

export const sync = async () => {

  try {
    await sequelize.sync({ alter: true });
    //conssole.log("DB Models Synced");
  } catch (e) {
    console.error("Cannot sync models", e);
  }
};

export default sequelize;
