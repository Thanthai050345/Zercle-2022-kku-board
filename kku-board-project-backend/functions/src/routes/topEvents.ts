import * as express from "express";
import { getTopEventByRole } from "../services/topEvents";
import { catchingError } from "../templates/errorsTemplate";

const router = express.Router();

router.get("/:uid", async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    try {
        const topEvent = await getTopEventByRole(uid);
        return res.status(201).json(topEvent);    
      } catch (error) {
        return catchingError(res, error, "user/bad-request");
      }
});

export default router;
