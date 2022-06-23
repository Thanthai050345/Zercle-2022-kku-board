import * as express from "express";
import {
  createEvents,
  deleteEventById,
  deleteEventByUid,
  getAllEvents,
  getAllEventsByClubId,
  getEventByUid,
  getEventForMyRole,
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
    // const now = Date.now();
    // const filterEvents = event.filter((event: Event, index: number) => {
    //   const endDate = event.endDate ;
    //   return now < endDate;
    // });
    return res.status(201).json(event);
  } catch (error) {
    const err = error as any;
    return catchingError(res, { message: err.code }, err?.code);
  }
});

router.patch(
  "/updateJoin/:eventId/:uid",
  async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    const eventId = req.params.eventId;
    try {
      const updateJoin = await updateUserJoinEvent(uid, eventId);
      return res.status(201).send(updateJoin);
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
      // const now = Date.now();
      // const filterEvents = event.filter((event: Event, index: number) => {
      //   const endDate = event.endDate ;
      //   return now < endDate;
      // });
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
      // const now = Date.now();
      // const filterEvents = event.filter((event: Event, index: number) => {
      //   const startDate = event.startDate ;
      //   console.log(startDate);
      //   return now < startDate;
      // });
      return res.status(201).json(event);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);

router.get(
  "/eventForMyRole/:uid",
  async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    try {
      const event = await getEventForMyRole(uid);
      // const now = Date.now();
      // const filterEvents = event.filter((event: Event, index: number) => {
      //   const endDate = event.endDate ;
      //   return now < endDate;
      // });
      return res.status(201).json(event);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);

router.patch(
  "/leftFromEvent/:eventId/:uid",
  async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    const eventId = req.params.eventId;
    try {
      const delEvent = await deleteEventByUid(uid, eventId);
      return res.status(201).send(delEvent);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);

router.delete(
  "/:eventId",
  async (req: express.Request, res: express.Response) => {
    const eventId = req.params.eventId;
    try {
      const events = await getAllEvents();
      const event = events.find((event) => event.eventId === eventId);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      const resDelete = await deleteEventById(eventId);
      return res.status(200).json(resDelete);
    } catch (error) {
      return catchingError(res, error, "user/bad-request");
    }
  }
);

export default router;
