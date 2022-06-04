import * as admin from "firebase-admin";
import { User } from "../interface/User";

export const getAllUsers = async () => {
  const db = admin.firestore();
  const docs = await db.collection("users").get();
  let users: User[] = [];
  docs.forEach((doc) => users.push({ ...(doc.data() as User), id: doc.id }));
  return users;
};

export const getAllClubAdmins = async () => {
  const db = admin.firestore();
  const docs = await db
    .collection("users")
    .where("authority", "==", "clubAdmin")
    .get();
  let users: User[] = [];
  docs.forEach((doc) => users.push({ ...(doc.data() as User), id: doc.id }));
  return users;
};

export const getAllStudents = async () => {
  const db = admin.firestore();
  const docs = await db
    .collection("users")
    .where("authority", "==", "student")
    .get();
  let users: User[] = [];
  docs.forEach((doc) => users.push({ ...(doc.data() as User), id: doc.id }));
  return users;
};

export const getStudentById = async (studentId: string) => {
  const db = admin.firestore();
  const student = await db.collection("users").where("studentId", "==", studentId).get();
  let user: any = {};
  student.forEach((doc) => user = ({ ...(doc.data() as User), id: doc.id }));
  return user
};

export const deleteUserById = async (uid: string) => {
  const db = admin.firestore();
  await db.collection("users").doc(uid).delete();
  admin.auth().deleteUser(uid)
  return "successfully deleted user";
}
