import { db } from "../index";
import { Student } from "../interface/User";
import { getClubAdminById } from "./users";

export const updateMember = async (clubId: string, email: string) => {
  const userQuery = await db
    .collection("students")
    .where("email", "==", email)
    .get();
  const user: Student[] = [];
  userQuery.forEach((doc) =>
    user.push({ ...(doc.data() as Student), id: doc.id })
  );
  const club = await getClubAdminById(clubId);
  const clubMembers = club.members;

  const checkClubMember = clubMembers.find((member: any) => {
    return member.email === email;
  });

  if (checkClubMember) {
    return "already member";
  } else {
    const newMembers = clubMembers.concat({
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      email: user[0].email,
      uid: user[0].uid,
      urlImage: user[0].urlImage,
    });
    const newClub = {
      ...clubMembers,
      members: newMembers,
    };
    await db.collection("clubAdmins").doc(clubId).update(newClub);
    const newClubed = [...user[0].clubed, club.clubName];
    await db
      .collection("students")
      .doc(user[0].uid)
      .update({ clubed: newClubed });
    return "successfully added member";
  }
};

export const deleteMember = async (clubId: string, email: string) => {
  const userQuery = await db
    .collection("students")
    .where("email", "==", email)
    .get();
  const user: Student[] = [];
  userQuery.forEach((doc) =>
    user.push({ ...(doc.data() as Student), id: doc.id })
  );
  const clubed = user[0].clubed;
  const club = await getClubAdminById(clubId);
  const clubName = club.clubName;
  const clubMembers = club.members;
  const newMembers = clubMembers.filter(
    (member: Student) => member.email !== email
  );
  await db.collection("clubAdmins").doc(clubId).update({ members: newMembers });
  if (clubed.includes(clubName)) {
    const newClubed = clubed.filter((club) => club !== clubName);
    await db
      .collection("students")
      .doc(user[0].uid)
      .update({ clubed: newClubed });
    return "successfully left";
  } else {
    return "already left";
  }
};

export const getMemberByClubId = async (clubId: string) => {
    const clubAdmin = await getClubAdminById(clubId);
    const clubMembers = clubAdmin.members;
    return clubMembers;
};
