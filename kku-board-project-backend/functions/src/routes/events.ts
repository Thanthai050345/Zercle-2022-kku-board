import * as express from "express";
// import * as dayjs from "dayjs";
import {
  createEvents,
  getAllEvents,
  getAllEventsByClubId,
  getEventByUid,
  updateUserJoinEvent,
} from "../services/events";
import { catchingError } from "../templates/errorsTemplate";
import { Event } from "../interface/events";

const router = express.Router();

router.post("/:uid", async (req: express.Request, res: express.Response) => {
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
    const now = Date.now();
    const filterEvents = event.find((event: Event, index: number) => {
      const endDate = event.endDate * 1000;
      return now < endDate;
    });
    return res.status(201).json(filterEvents);
  } catch (error) {
    const err = error as any;
    return catchingError(res, { message: err.code }, err?.code);
  }
});

router.patch(
  "/updateJoin/:clubId/:uid",
  async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    const clubId = req.params.clubId;
    try {
      await updateUserJoinEvent(uid, clubId);
      return res.status(201).json({ message: "Update success" });
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);

router.get(
  "/students/:uid",
  async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    try {
      const event = await getEventByUid(uid);
      return res.status(201).json(event);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);

router.get(
  "/clubs/:clubId",
  async (req: express.Request, res: express.Response) => {
    const clubId = req.params.clubId;
    try {
      const event = await getAllEventsByClubId(clubId);
      return res.status(201).json(event);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);

// events สำหรับ role เดียวกันกับ student

export default router;
