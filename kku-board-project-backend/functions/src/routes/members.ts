import * as express from "express";
import { deleteMember, getMemberByClubId, updateMember } from "../services/members";
import { catchingError } from "../templates/errorsTemplate";

const router = express.Router();

router.get("/:clubId", async (req: express.Request, res: express.Response) => {
  const clubId = req.params.clubId;
  try {
    const members = await getMemberByClubId(clubId);
    return res.json(members);
  } catch (error) {
    return catchingError(res, error, "user/bad-request");
  }
});

router.patch(
  "/updateClubMember/:clubId/:email",
  async (req: express.Request, res: express.Response) => {
    const clubId = req.params.clubId;
    const email = req.params.email;
    try {
      const memberUpdate = await updateMember(clubId, email);
      return res.status(201).json(memberUpdate);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);

router.patch(
  "/deleteClubMember/:clubId/:email",
  async (req: express.Request, res: express.Response) => {
    const clubId = req.params.clubId;
    const email = req.params.email;
    try {
      const memberDelete = await deleteMember(clubId, email);
      return res.status(201).json(memberDelete);
    } catch (error) {
      const err = error as any;
      return catchingError(res, { message: err.code }, err?.code);
    }
  }
);

export default router;
