import { Student } from "../../interface/user";
import { createClubAdmin, createStudent } from "../../services/register";

export const MOCKUP_STUDENTS: Student[] = [
  {
    firstName: "เหลี่ยม",
    lastName: "ทำเทส",
    faculty: "KKBS",
    major: "การเงิน",
    email: "test2@test.com",
    studentId: "633040000-1",
    phoneNumber: "0863610041",
    password: "123456",
    urlImage: "https://picsum.photos/200/300",
    authority: "student",
    clubed: [],
  },
  {
    firstName: "แทนไทย",
    lastName: "จิตต์ประทุม",
    faculty: "EN",
    major: "EN",
    email: "test@test.com",
    studentId: "633040157-2",
    phoneNumber: "0996569600",
    password: "123456",
    urlImage: "https://picsum.photos/200/300",
    authority: "student",
    clubed: ["Engine"],
  },
];

export const MOCKUP_ADMINS = [
  {
    clubName: "Mnics",
    password: "123456",
    faculty: "Engineering",
    email: "test3@test.com",
    urlImage: "https://picsum.photos/200/300",
    authority: "clubAdmin",
    members: [],
  },
];

export const migrateUsers = async () => {
  for (const user of MOCKUP_STUDENTS) {
    try {
      const userRegistered = await createStudent(user);
      console.log(
        `   - Migrate users successfully: ${userRegistered.authority} -> ${userRegistered.firstName} ${userRegistered.lastName}`
      );
    } catch (error) {
      const err = error as any;
      if (
        err.errorInfo.code !== "auth/email-already-exists" &&
        err.errorInfo.code !== "auth/uid-already-exists"
      ) {
        console.warn(`   - Migrate users error: ${err.errorInfo.code}`);
      } else {
        console.log(
          `   - Migrate users already: ${user.authority} -> ${user.firstName} ${user.lastName}`
        );
      }
    }
  }
  for (const admin of MOCKUP_ADMINS) {
    try {
      const adminRegistered = await createClubAdmin(admin);
      console.log(
        `   - Migrate admins successfully: ${adminRegistered.authority} -> ${adminRegistered.clubName}`
      );
    } catch (error) {
      const err = error as any;
      if (
        err.errorInfo.code !== "auth/email-already-exists" &&
        err.errorInfo.code !== "auth/uid-already-exists"
      ) {
        console.warn(`   - Migrate users error: ${err.errorInfo.code}`);
      } else {
        console.log(
          `   - Migrate users already: ${admin.authority} -> ${admin.clubName}`
        );
      }
    }
  }
};
