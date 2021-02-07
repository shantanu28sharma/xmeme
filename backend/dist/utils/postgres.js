"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sync = void 0;
const sequelize_1 = require("sequelize");
const configs_1 = __importDefault(require("../configs"));
let sequelize;
try {
    sequelize = new sequelize_1.Sequelize(configs_1.default.database, configs_1.default.user, configs_1.default.password, {
        dialect: "postgres",
        host: configs_1.default.host,
        port: configs_1.default.dbport,
    });
}
catch (_a) {
    throw new Error("Failed to connect");
}
const sync = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.sync({ alter: true });
        //conssole.log("DB Models Synced");
    }
    catch (e) {
        console.error("Cannot sync models", e);
    }
});
exports.sync = sync;
exports.default = sequelize;
//# sourceMappingURL=postgres.js.map