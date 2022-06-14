"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateUsers = exports.MOCKUP_ADMINS = exports.MOCKUP_STUDENTS = void 0;
const register_1 = require("../../services/register");
exports.MOCKUP_STUDENTS = [
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
        clubed: ["Mnics"],
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
        clubed: ["Mnics", "Engine"],
    },
];
exports.MOCKUP_ADMINS = [
    {
        clubName: "Mnics",
        password: "123456",
        faculty: "Engineering",
        email: "test3@test.com",
        urlImage: "https://picsum.photos/200/300",
        authority: "clubAdmin",
    },
];
exports.migrateUsers = async () => {
    for (const user of exports.MOCKUP_STUDENTS) {
        try {
            const userRegistered = await register_1.createStudent(user);
            console.log(`   - Migrate users successfully: ${userRegistered.authority} -> ${userRegistered.firstName} ${userRegistered.lastName}`);
        }
        catch (error) {
            const err = error;
            if (err.errorInfo.code !== "auth/email-already-exists" &&
                err.errorInfo.code !== "auth/uid-already-exists") {
                console.warn(`   - Migrate users error: ${err.errorInfo.code}`);
            }
            else {
                console.log(`   - Migrate users already: ${user.authority} -> ${user.firstName} ${user.lastName}`);
            }
        }
    }
    for (const admin of exports.MOCKUP_ADMINS) {
        try {
            const adminRegistered = await register_1.createClubAdmin(admin);
            console.log(`   - Migrate admins successfully: ${adminRegistered.authority} -> ${adminRegistered.clubName}`);
        }
        catch (error) {
            const err = error;
            if (err.errorInfo.code !== "auth/email-already-exists" &&
                err.errorInfo.code !== "auth/uid-already-exists") {
                console.warn(`   - Migrate users error: ${err.errorInfo.code}`);
            }
            else {
                console.log(`   - Migrate users already: ${admin.authority} -> ${admin.clubName}`);
            }
        }
    }
};
//# sourceMappingURL=users.js.map