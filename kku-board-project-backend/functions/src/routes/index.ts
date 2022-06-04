import * as express from "express";
import register from "./register";
import users from "./users";
const router = express.Router();

router.use("/users", users);
router.use("/register", register);

export default router;
