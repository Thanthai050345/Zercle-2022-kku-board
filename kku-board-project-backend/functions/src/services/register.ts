// import dayjs = require("dayjs");
import * as admin from "firebase-admin";
import { db } from "../index";
import { ClubAdmin, Student } from "../interface/user";

export const createStudent = async (body: Student) => {
  const user = await admin.auth().createUser({
    displayName: `${body.firstName} ${body.lastName}`,
    email: body.email,
    password: body.password,
    uid: body.uid,
    photoURL: body.urlImage,
    disabled: false,
  });
  await admin.auth().setCustomUserClaims(user.uid, {
    authority: body.authority,
  });
  await db
    .collection("students")
    .doc(user.uid)
    .set({ ...body, uid: `${user.uid}` });

  return body;
};

export const createClubAdmin = async (body: ClubAdmin) => {
  const clubAdmin = await admin.auth().createUser({
    displayName: `${body.clubName}`,
    email: body.email,
    password: body.password,
    uid: body.uid,
    photoURL: body.urlImage,
    disabled: false,
  });

  await admin.auth().setCustomUserClaims(clubAdmin.uid, {
    authority: body.authority,
  });
  await db
    .collection("clubAdmins")
    .doc(clubAdmin.uid)
    .set({ ...body, uid: `${clubAdmin.uid}` });

  return body;
};
