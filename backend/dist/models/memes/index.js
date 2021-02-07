"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const postgres_1 = __importDefault(require("../../utils/postgres"));
class Meme extends sequelize_2.Model {
}
Meme.init({
    id: {
        type: sequelize_2.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_2.STRING,
        allowNull: false,
    },
    caption: {
        type: sequelize_2.STRING,
        allowNull: false,
    },
    url: {
        type: sequelize_2.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_2.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.fn('now')
    },
    deleted: {
        type: sequelize_2.DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize: postgres_1.default,
    modelName: "memes",
});
exports.default = Meme;
//# sourceMappingURL=index.js.map