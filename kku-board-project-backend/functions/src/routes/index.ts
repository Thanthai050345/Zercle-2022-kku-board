import * as express from "express";
import events from "./events";
import register from "./register";
import users from "./users";
const router = express.Router();

router.use("/users", users);
router.use("/register", register);
router.use("/events", events);

export default router;
