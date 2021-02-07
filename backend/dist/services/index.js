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
exports.Update = exports.createMeme = exports.fetch = void 0;
const memes_1 = __importDefault(require("../models/memes"));
let previously_fetched = null;
const fetch = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (id) {
            return memes_1.default.findOne({ where: { id }, attributes: ['id', 'url', 'caption', 'name'] });
        }
        else {
            if (previously_fetched) {
                return previously_fetched;
            }
            else {
                let _memes = yield memes_1.default.findAll({ where: {
                        deleted: false
                    },
                    order: [
                        ['createdAt', 'DESC'],
                    ],
                    limit: 100,
                    attributes: ['id', 'url', 'caption', 'name']
                });
                previously_fetched = _memes;
                return _memes;
            }
        }
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.fetch = fetch;
const createMeme = ({ name, caption, url, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let check = yield memes_1.default.findOne({ where: {
                url,
                name,
                caption
            } });
        if (check !== null) {
            return "Meme already exist";
        }
        previously_fetched = null;
        let _meme = yield new memes_1.default({
            name,
            caption,
            url
        }).save();
        return _meme;
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.createMeme = createMeme;
const Update = ({ id, caption, url, deleted = false }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _meme = yield memes_1.default.findByPk(id);
        if (_meme) {
            previously_fetched = null;
            _meme.caption = caption;
            _meme.url = url;
            _meme.deleted = deleted;
            yield _meme.save();
            return _meme;
        }
        else {
            return "Meme doesn't exist";
        }
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.Update = Update;
//# sourceMappingURL=index.js.map