import * as express from "express";

type ErrorMessageObj = { [key: string]: string };

export const errorTemp = (errCode: string) => {
  return {
    message: errMassage[errCode] || "เกิดข้อผิดพลาดบางอย่าง",
    code: errCode,
  };
};

export const catchingError = (
  res: express.Response,
  err: unknown,
  errCode: string
) => {
  if (err instanceof Error) {
    return res.status(400).json(errorTemp(err.message));
  } else {
    return res.status(400).json(errorTemp(errCode));
  }
};

export const errMassage: ErrorMessageObj = {
  "auth/forbidden": "ไม่มีสิทธิ์การเข้าถึงการดำเนินการนี้",
  "auth/invalid-custom-token": "ไม่พบ token ที่ระบุ ไม่สามารถดำเนินการต่อได้",
  "auth/no-role-accessed": "ไม่สามารถเข้าใช้งานเนื่องจากไม่มีสิทธิ์การเข้าถึง",
  "auth/email-already-exists": "อีเมลล์ผู้ใช้งานนี้มีอยู่แล้ว",
  "auth/lineUid-not-found": "ไม่พบข้อมูลไลน์ในระบบ",
  "auth/same-password": "รหัสผ่านใหม่จะต้องไม่เหมือนกับรหัสผ่านเก่า",
  "auth/uid-already-exists": "รหัสพนักงานนี้มีอยู่แล้ว",
  "auth/old-password-incorrect": "รหัสผ่านเก่าไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง",
  "auth/old-password-not-found": "ไม่พบรหัสผ่านเก่าของคุณ กรุณาลองใหม่อีกครั้ง",
  "approval/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "env/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "export/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "report/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "report/invalid-date":
    "ไม่พบวันที่เริ่มต้นหรือวันที่สิ้นสุด กรุณาลองใหม่อีกครั้ง",
  "report/date-incorrect":
    "วันที่เริ่มต้นจะต้องน้อยกว่าวันที่สิ้นสุด กรุณาลองใหม่อีกครั้ง",
  "holiday/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "holiday/financial-API-falied":
    "API ธนาคารกลางขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "milerate/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "overtime/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "overtime/error-normal-day":
    "ไม่สามารถเพิ่มชั่วโมงการทำงานล่วงเวลาในเวลาทำงานปกติได้",
  "overtime/error-holiday":
    "ไม่สามารถเพิ่มชั่วโมงการทำงานที่ช่วงเวลา 00.00 น - 06.00 น. ในวันหยุดได้",
  "project/projectId-already-exist":
    "มีโครงการนี้ในระบบแล้ว ไม่สามารถดำเนินการซํ้าได้",
  "project/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "register/email-already-exist":
    "มีอีเมลนี้ในระบบแล้ว ไม่สามารถดำเนินการซํ้าได้",
  "register/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "timestamp/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
  "user/bad-request": "การดำเนินการขัดข้อง กรุณาดำเนินการใหม่อีกครั้ง",
};
