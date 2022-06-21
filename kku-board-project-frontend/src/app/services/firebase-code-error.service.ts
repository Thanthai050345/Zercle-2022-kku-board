import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {
  constructor() {}

  codeError(code: string) {
    switch (code) {
      // El correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'มีผู้ใช้อีเมลนี้แล้ว';

      // Contraseña debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'ความปลอดภัยของรหัสไม่เพียงพอ';

      // Correo invalido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'ไม่มีอีเมลนี้ในระบบ';

      // Contraseña incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'รหัสไม่ถูกต้อง';

      // El usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'ไม่มีผู้ใช้ในระบบ'; 
      default:
        return 'เกิดข้อผิดผลาด';
    }
  }
}
