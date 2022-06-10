import * as express from "express";
import events from "./events";
import register from "./register";
import users from "./users";
import topEvents from "./topEvents";
import countdown from "./countDown"
const router = express.Router();

router.use("/users", users);
router.use("/register", register);
router.use("/events", events);
router.use("/topEvents", topEvents);
router.use("/countdown", countdown);


export default router;
