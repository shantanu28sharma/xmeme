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
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.list = void 0;
const services_1 = require("../../services");
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _memes = yield services_1.fetch(req.params);
        return res.status(200).json(_memes);
    }
    catch (_a) {
        return res.status(404).json({ err: "Meme doesn't exist" });
    }
});
exports.list = list;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _res = yield services_1.createMeme(req.body);
        if (_res === "Meme already exist") {
            return res.status(409).json({ err: _res });
        }
        return res.status(200).json({ id: _res.id });
    }
    catch (_b) {
        return res.status(404).json({ err: "Malformed Request" });
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _res = yield services_1.Update(Object.assign(Object.assign({}, req.body), req.params));
        if (_res === "Meme doesn't exist") {
            return res.status(404).json({ err: _res });
        }
        else {
            return res.status(200).json({ id: _res.id });
        }
    }
    catch (_c) {
        return res.status(404).json({ err: "Malformed Request" });
    }
});
exports.update = update;
//# sourceMappingURL=index.js.map