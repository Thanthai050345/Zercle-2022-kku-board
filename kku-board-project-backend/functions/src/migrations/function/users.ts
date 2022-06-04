import { User } from "../../interface/user";
import { createUser } from "../../services/register";

export const MOCKUP_USER: (User)[] = [
  {
    firstName: "เหลี่ยม",
    lastName: "ทำเทส",
    faculty: "บริหารธุรกิจ",
    major: "การเงิน",
    email: "test2@test.com",
    studentId: "633040000-1",
    phoneNumber: "0863610041",
    password: "123456",
    urlImage: "https://picsum.photos/200/300",
    authority: "clubAdmin",
  },
  {
    firstName: "แทนไทย",
    lastName: "จิตต์ประทุม",
    faculty: "วิศวกรรมศาสตร์",
    major: "วิศวกรรมคอมพิวเตอร์",
    email: "test@test.com",
    studentId: "633040157-2",
    phoneNumber: "0996569600",
    password: "123456",
    urlImage: "https://picsum.photos/200/300",
    authority: "student",
  },
];
export const migrateUsers = async () => {
  for (const user of MOCKUP_USER) {
    try {
      const userRegistered = await createUser(user);
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
};
