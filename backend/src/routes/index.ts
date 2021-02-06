import { Router } from "express";
import * as memeRouter from "./memes";
// import * as adminRouter from "./admin";
// import * as authorRouter from "./author";
// import * as tagRouter from "./tag";
const router = Router();

router.use("/memes", memeRouter.default);

export default router;
