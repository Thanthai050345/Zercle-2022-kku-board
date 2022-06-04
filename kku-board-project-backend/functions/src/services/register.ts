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

export const createAdmin = async (body: User) => {
  const clubAdmin = await admin.auth().createUser({
    email: body.email,
    password: body.password,
    uid: body.uid,
  });

  await admin.auth().setCustomUserClaims(clubAdmin.uid, {
    authority: body.role,
  });
  await db.collection("clubAdmin").doc(clubAdmin.uid).set({...body, uid: `${clubAdmin.uid}`});

  return body;
};

