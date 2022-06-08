import * as express from "express";
import { createEvents, getAllEvents, updateUserJoinEvent } from "../services/events";
import { catchingError } from "../templates/errorsTemplate";
import { Event } from "../interface/events";

const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
  try {
    const dataEvent: Event = req.body;
    const event = await createEvents(dataEvent);
    return res.status(201).json(event);
  } catch (error) {
    const err = error as any;
    return catchingError(res, { message: err.code }, err?.code);
  }
});

router.get("/", async (_: express.Request, res: express.Response) => {
  try {
    const event = await getAllEvents();
    return res.status(201).json(event);
  } catch (error) {
    const err = error as any;
    return catchingError(res, { message: err.code }, err?.code);
  }
});

router.patch("/updateJoin/:clubId/:uid", async (req: express.Request, res: express.Response) => {
  const uid = req.params.uid;
  const clubId = req.params.clubId;
  try {
    await updateUserJoinEvent(uid, clubId);
    return res.status(201).json({ message: "Update success" });
  } catch (error) {
    const err = error as any;
    return catchingError(res, { message: err.code }, err?.code);  
  }
});

export default router;
