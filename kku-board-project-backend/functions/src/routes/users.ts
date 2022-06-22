import * as express from "express";
import {
  deleteClubAdminById,
  deleteStudentById,
  getAllClubAdmins,
  getAllStudents,
  getAllUsers,
  getClubAdminById,
  getStudentById,
} from "../services/users";
import { catchingError } from "../templates/errorsTemplate";

const router = express.Router();

router.get("/allUsers", async(req, res) => {
  try {
    const users = await getAllUsers()
    return res.json(users)
  } catch (error) {
    return error
  }
})

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
  "/students/:uid",
  async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    try {
      const user = await getStudentById(uid);
      return res.json(user);
    } catch (error) {
      return catchingError(res, error, "user/bad-request");
    }
  }
);

router.get(
  "/clubAdmins/:uid",
  async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    try {
      const user = await getClubAdminById(uid);
      return res.json(user);
    } catch (error) {
      return catchingError(res, error, "user/bad-request");
    }
  }
);

router.delete(
  "/students/:uid",
  async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    try {
      const users = await getAllStudents();
      const user = users.find((user) => user.uid === uid);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const resDelete = await deleteStudentById(uid);
      return res.status(200).json(resDelete);
    } catch (error) {
      return catchingError(res, error, "user/bad-request");
    }
  }
);

router.delete(
  "/clubAdmins/:uid",
  async (req: express.Request, res: express.Response) => {
    const uid = req.params.uid;
    try {
      const users = await getAllClubAdmins();
      const user = users.find((user) => user.uid === uid);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const resDelete = await deleteClubAdminById(uid);
      return res.status(200).json(resDelete);
    } catch (error) {
      return catchingError(res, error, "user/bad-request");
    }
  }
);

export default router;
