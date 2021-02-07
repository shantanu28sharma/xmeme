"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const bodyParser = __importStar(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const configs_1 = __importDefault(require("./configs"));
const postgres_1 = require("./utils/postgres");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express_1.default();
        app.use(morgan_1.default("dev"));
        app.use(bodyParser.json({
            limit: "50mb",
            verify(req, res, buf, encoding) {
                req.rawBody = buf;
            },
        }));
        app.use(cors_1.default());
        app.use("/", routes_1.default);
        yield postgres_1.sync();
        http_1.default.createServer(app).listen(configs_1.default.port);
    });
}
function startSwaggerServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express_1.default();
        const swaggerDoc = require('./swagger/doc.json');
        app.use("/swagger-ui", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDoc));
        http_1.default.createServer(app).listen(configs_1.default.swaggerport);
    });
}
startSwaggerServer();
startServer();
//# sourceMappingURL=index.js.map