import { Router } from "express";
const router = Router();
import { list, create, update} from "../controller/memes";

router.get("/:id?", list);
router.post("/", create);
router.patch("/:id", update);

export default router;