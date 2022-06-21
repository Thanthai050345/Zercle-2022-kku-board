import { Injectable } from '@angular/core';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

@Injectable({
  providedIn: 'root',
})

export class UploadImageService {
  constructor() {}
  async UploadImageReturnUrl(path: string, imageFile: Blob[], uid?: string) {
    const urlImage: string[] = [];

    for (let image of imageFile) {
      const storage = getStorage();
      const fileName = `${this.RandomId()}_${uid}.${this.GetExtensionFile(image.type)}`;
      const pathImage = `${path}/${fileName}`;
      const storageRef = ref(storage, pathImage);

      //initiates the firebase side uploading
      try {
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        urlImage.push(url);
      } catch (error) {
        return error;
      }
    }
    return urlImage;
  }

  GetExtensionFile(type: string) {
    return type.split('/')[type.split('/').length - 1];
  }

  RandomId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
      Math.random().toString(36).substr(2, 30) +
      Math.random().toString(36).substr(2, 30)
    );
  }

  async FileToBlob(file: File) {
    return new Blob([new Uint8Array(await file.arrayBuffer())], {
      type: file.type,
    });
  }

  FileToBase64(file: File) {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
