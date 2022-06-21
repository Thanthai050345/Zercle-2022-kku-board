export interface Student {
  [key: string]: any;
  firstName: string;
  lastName: string;
  faculty: string;
  major: string;
  email: string;
  password: string;
  studentId: string;
  phoneNumber: string;
  urlImage: string;
  authority: string;
  clubed: string[];
}

export interface ClubAdmin {
  [key: string]: any;
  clubName: string;
  email: string;
  password: string;
  faculty: string;
  major?: string;
  clubId?: string;
  urlImage: string;
  authority: string;
  members: string[];
}
