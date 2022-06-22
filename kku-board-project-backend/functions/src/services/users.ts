import * as admin from "firebase-admin";
import { ClubAdmin, Student } from "../interface/User";

export const getAllClubAdmins = async () => {
  const db = admin.firestore();
  const docs = await db
    .collection("clubAdmins")
    .where("authority", "==", "clubAdmin")
    .get();
  let clubAdmins: ClubAdmin[] = [];
  docs.forEach((doc) =>
    clubAdmins.push({ ...(doc.data() as ClubAdmin), id: doc.id })
  );
  return clubAdmins;
};

export const getAllUsers = async () => {
  const db = admin.firestore();
  const studentsDocs = await db.collection("students").get();
  const clubAdminsDocs = await db.collection("clubAdmins").get();
  let users: Student[] = [];
  let clubAdmins: ClubAdmin[] = [];
  studentsDocs.forEach((doc) =>
    users.push({ ...(doc.data() as Student), id: doc.id })
  );
  clubAdminsDocs.forEach((doc) =>
    clubAdmins.push({ ...(doc.data() as ClubAdmin), id: doc.id })
  );
  let allUsers: any[] = [];
  allUsers = [...users, ...clubAdmins];
  return allUsers;
}

export const getAllStudents = async () => {
  const db = admin.firestore();
  const docs = await db
    .collection("students")
    .where("authority", "==", "student")
    .get();
  let students: Student[] = [];
  docs.forEach((doc) =>
    students.push({ ...(doc.data() as Student), id: doc.id })
  );
  return students;
};

export const getStudentById = async (uid: string) => {
  const db = admin.firestore();
  const student = await db.collection("students").where("uid", "==", uid).get();
  let students: any = {};
  student.forEach(
    (doc) => (students = { ...(doc.data() as Student), id: doc.id })
  );
  return students;
};

export const getClubAdminById = async (uid: string) => {
  const db = admin.firestore();
  const clubAdmin = await db
    .collection("clubAdmins")
    .where("uid", "==", uid)
    .get();
  let clubAdmins: any = {};
  clubAdmin.forEach(
    (doc) => (clubAdmins = { ...(doc.data() as Student), id: doc.id })
  );
  return clubAdmins;
};

export const deleteStudentById = async (uid: string) => {
  const db = admin.firestore();
  await db.collection("students").doc(uid).delete();
  admin.auth().deleteUser(uid);
  return "successfully deleted user";
};

export const deleteClubAdminById = async (uid: string) => {
  const db = admin.firestore();
  await db.collection("clubAdmins").doc(uid).delete();
  admin.auth().deleteUser(uid);
  return "successfully deleted user";
};
