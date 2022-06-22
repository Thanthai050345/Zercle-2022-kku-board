import * as express from "express";
import { getEventClubsCountDown, getEventStudentsCountDown } from "../services/countDown";
import { catchingError } from "../templates/errorsTemplate";

const router = express.Router();

router.get("/students/:uid", async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    try {
      const event = await getEventStudentsCountDown(uid);
      return res.status(201).json(event);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  });

  router.get("/clubs/:uid", async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    try {
      const event = await getEventClubsCountDown(uid);
      return res.status(201).json(event);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  });
export default router;