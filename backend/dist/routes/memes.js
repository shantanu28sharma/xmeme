"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const memes_1 = require("../controller/memes");
router.get("/:id?", memes_1.list);
router.post("/", memes_1.create);
router.patch("/:id", memes_1.update);
exports.default = router;
//# sourceMappingURL=memes.js.map