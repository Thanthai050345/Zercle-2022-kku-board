import * as admin from "firebase-admin";
import { User } from "../interface/User";

export const getAllUsers = async () => {
  const db = admin.firestore();
  const docs = await db.collection("students").get();
  let users: User[] = [];
  docs.forEach((doc) => users.push({ ...(doc.data() as User), id: doc.id }));
  return users;
};

export const getAllClubAdmins = async () => {
  const db = admin.firestore();
  const docs = await db
    .collection("clubAdmins")
    .where("authority", "==", "clubAdmin")
    .get();
  let users: User[] = [];
  docs.forEach((doc) => users.push({ ...(doc.data() as User), id: doc.id }));
  return users;
};

export const getAllStudents = async () => {
  const db = admin.firestore();
  const docs = await db
    .collection("students")
    .where("  ", "==", "student")
    .get();
  let users: User[] = [];
  docs.forEach((doc) => users.push({ ...(doc.data() as User), id: doc.id }));
  return users;
};

export const getStudentById = async (uid: string) => {
  const db = admin.firestore();
  const student = await db.collection("students").where("uid", "==", uid).get();
  // const events = await db.collection("events").where("uid", "==", uid).get();
  let user: any = {};
  // let event: any = {};
  // events.forEach((doc) => event = { ...(doc.data() as Event), eventId: doc.id });
  student.forEach((doc) => user = {...doc.data() as User, id: doc.id});
  return user
};

export const deleteStudentById = async (uid: string) => {
  const db = admin.firestore();
  await db.collection("students").doc(uid).delete();
  admin.auth().deleteUser(uid)
  return "successfully deleted user";
}

export const deleteClubAdminById = async (uid: string) => {
  const db = admin.firestore();
  await db.collection("clubAdmins").doc(uid).delete();
  admin.auth().deleteUser(uid)
  return "successfully deleted user";
}
