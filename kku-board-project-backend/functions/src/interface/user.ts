export interface User {
  [key: string]: any;
  firstName: string;
  lastName: string;
  faculty: string;
  major: string;
  email: string;
  studentId: string;
  phoneNumber: string;
  urlImage: string;
  authority: string;
}

export interface ClubAdmin {
  [key: string]: any;
  clubName: string;
  email: string;
  faculty: string;
  major?: string;
  clubId?: string;
  urlImage: string;
  authority: string;
}
