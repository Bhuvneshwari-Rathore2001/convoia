import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";



//  ********************paste from upload files from firebase********************************
//  turn this function into promise becz I want to return this downloadURL in our login component we can use it in try catch block

const upload = async(file)=>{
    const date = new Date()

    const storageRef = ref(storage, `images/${date + file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve,reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
         const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
       reject("Something went wrong!" + error.code)
      },
      () => {
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL)
        });
      }
    );
});
}

export default upload