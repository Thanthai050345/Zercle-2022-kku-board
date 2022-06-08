import * as express from "express";
import { ClubAdmin, User } from "../interface/user";
import { createAdmin, createStudent } from "../services/register";
import { catchingError } from "../templates/errorsTemplate";
const router = express.Router();

router.post("/student", async (req: express.Request, res: express.Response) => {
  try {
    const dataUser: User = req.body;
    const user = await createStudent(dataUser);
    return res.status(201).json(user);
  } catch (error) {
    const err = error as any;
    return catchingError(res, { message: err.code }, err?.code);
  }
});

router.post(
  "/clubAdmin",
  async (req: express.Request, res: express.Response) => {
    try {
      const dataClubAdmin: ClubAdmin = req.body;
      const user = await createAdmin(dataClubAdmin);
      return res.status(201).json(user);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);
export default router;
