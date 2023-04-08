import { storage } from '../firebase';

export const uploadImage = async (file: File) => {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(file.name);
  await fileRef.put(file);
  const imageUrl = await fileRef.getDownloadURL();
  return imageUrl;
};