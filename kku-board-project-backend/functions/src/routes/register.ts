import * as express from "express";
import { User } from "../interface/user";
import { createUser } from "../services/register";
import { catchingError } from "../templates/errorsTemplate";
const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
  try {
    const dataUser: User = req.body;
    const user = await createUser(dataUser);
    return res.status(201).json(user);
  } catch (error) {
    const err = error as any;
    return catchingError(res, { message: err.code }, err?.code);
    // return err
  }
});
export default router;
