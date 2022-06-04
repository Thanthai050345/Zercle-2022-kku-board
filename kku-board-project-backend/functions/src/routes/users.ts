import * as express from "express";
import {
  deleteUserById,
  getAllClubAdmins,
  getAllStudents,
  getAllUsers,
  getStudentById,
} from "../services/users";
import { catchingError } from "../templates/errorsTemplate";

const router = express.Router();

router.get("/", async (_: express.Request, res: express.Response) => {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (error) {
    return catchingError(res, error, "user/bad-request");
  }
});

router.get("/clubAdmins", async (_: express.Request, res: express.Response) => {
  try {
    const clubAdmins = await getAllClubAdmins();
    return res.json(clubAdmins);
  } catch (error) {
    return catchingError(res, error, "user/bad-request");
  }
});

router.get("/students", async (_: express.Request, res: express.Response) => {
  try {
    const students = await getAllStudents();
    return res.json(students);
  } catch (error) {
    return catchingError(res, error, "user/bad-request");
  }
});

router.get(
  "/students/:studentId",
  async (req: express.Request, res: express.Response) => {
    const studentId = req.params.studentId;
    try {
      const user = await getStudentById(studentId);
      return res.json(user);
    } catch (error) {
      return catchingError(res, error, "user/bad-request");
    }
  }
);

router.delete("/:uid", async (req: express.Request, res: express.Response) => {
  const uid = req.params.uid;
  try {
    const users = await getAllUsers();
    const user = users.find((user) => user.uid === uid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const resDelete = await deleteUserById(uid);
    return res.status(200).json(resDelete);
  } catch (error) {
    return catchingError(res, error, "user/bad-request");
  }
});

export default router;
