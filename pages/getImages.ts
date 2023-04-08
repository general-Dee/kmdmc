import { storage } from "../firebase";

const getBannerImagesFromFirebaseStorage = async (): Promise<string[]> => {
  const imagesRef = storage.ref().child("images/banner");
  const imageUrls: string[] = [];

  try {
    const images = await imagesRef.listAll();
    for (const image of images.items) {
      const imageUrl = await image.getDownloadURL();
      imageUrls.push(imageUrl);
    }
  } catch (error) {
    console.error(error);
  }

  return imageUrls;
};

export default getBannerImagesFromFirebaseStorage;