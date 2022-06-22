import * as express from "express";
import { ClubAdmin, Student } from "../interface/user";
import { createClubAdmin, createStudent } from "../services/register";
import { catchingError } from "../templates/errorsTemplate";
const router = express.Router();

router.post("/student", async (req: express.Request, res: express.Response) => {
  try {
    const dataUser: Student = req.body;
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
      const user = await createClubAdmin(dataClubAdmin);
      return res.status(201).json(user);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);

export default router;
