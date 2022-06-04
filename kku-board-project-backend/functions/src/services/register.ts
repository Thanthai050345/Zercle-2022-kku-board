// import dayjs = require("dayjs");
import * as admin from "firebase-admin";
import { db } from "../index";
import { User } from "../interface/user";

export const createUser = async (body: User) => {
  const user = await admin.auth().createUser({
    email: body.email,
    password: body.password,
    uid: body.uid,
  });

  await admin.auth().setCustomUserClaims(user.uid, {
    authority: body.role,
  });
  await db.collection("users").doc(user.uid).set({...body, uid: `${user.uid}`});

  return body;
};

