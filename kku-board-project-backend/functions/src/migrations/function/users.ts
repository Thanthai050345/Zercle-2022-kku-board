import { Student } from "../../interface/user";
import { createClubAdmin, createStudent } from "../../services/register";

export const MOCKUP_STUDENTS: Student[] = [
  {
    firstName: "แทนไทย",
    lastName: "จิตต์ประทุม",
    faculty: "EN",
    major: "CoE",
    email: "test@test.com",
    studentId: "633040157-2",
    phoneNumber: "0996569600",
    password: "123456",
    urlImage:
      "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
    authority: "student",
    clubed: [],
  },
  {
    firstName: "เหลี่ยม",
    lastName: "ทำเทส",
    faculty: "KKBS",
    major: "FIN",
    email: "test2@test.com",
    studentId: "633040000-1",
    phoneNumber: "0863610041",
    password: "123456",
    urlImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    authority: "student",
    clubed: [],
  },
  {
    firstName: "บิ๊ก",
    lastName: "บักเขียบ",
    faculty: "SC",
    major: "SC",
    email: "test3@test.com",
    studentId: "633040157-2",
    phoneNumber: "0996569600",
    password: "123456",
    urlImage: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    authority: "student",
    clubed: [],
  },
  {
    firstName: "ฟอร์ด",
    lastName: "เซอร์",
    faculty: "EN",
    major: "CE",
    email: "test4@test.com",
    studentId: "633040157-2",
    phoneNumber: "0996569600",
    password: "123456",
    urlImage: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
    authority: "student",
    clubed: [],
  },
  {
    firstName: "กิ๊ก",
    lastName: "ธัช",
    faculty: "EN",
    major: "AG",
    email: "test5@test.com",
    studentId: "633040157-2",
    phoneNumber: "0996569600",
    password: "123456",
    urlImage: "https://i.guim.co.uk/img/media/1d554a94e069940467d47735238d1941e83e5877/0_611_3029_1818/master/3029.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=667231b0d8d4615e437ba793da77f569",
    authority: "student",
    clubed: [],
  },
  {
    firstName: "ปอนด์",
    lastName: "อมร",
    faculty: "SC",
    major: "SC",
    email: "test6@test.com",
    studentId: "633040157-2",
    phoneNumber: "0996569600",
    password: "123456",
    urlImage: "https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg",
    authority: "student",
    clubed: [],
  },
];

export const MOCKUP_ADMINS = [
  {
    clubName: "Mnics",
    password: "123456",
    faculty: "Engineering",
    email: "test7@test.com",
    urlImage: "https://www.crucial.com.au/wp-content/uploads/2014/07/example-person.png",
    authority: "clubAdmin",
    members: [],
  },
  {
    clubName: "ScienceLab",
    password: "123456",
    faculty: "Engineering",
    email: "test8@test.com",
    urlImage: "https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
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
