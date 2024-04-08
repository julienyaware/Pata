import React, { useEffect } from 'react';
import { storage } from '../Firabase';
import { auth,db } from '../Firabase';
import {addDoc,collection,doc,serverTimestamp,setDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';


const ProfileImageUpload = () => {
  const [file,setFile] = useState("")
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const [uploadStatus,setUploadStatus]= useState("")
   
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadStatus("Upload is " + progress + "% done")
            //window.alert("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              setUploadStatus("paused")
              //window.alert("Upload is paused");
              break;
            case "running":
              setUploadStatus("Upload is running")
              //window.alert("Upload is running");      
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file,uploadStatus]);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "profile", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };


  return (

    <div className='max-w-[800px] mt-[-56px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-3xl text-[#1623CE]'>{uploadStatus !== "" ? uploadStatus : ""}</p>
      <form onSubmit={handleAdd}>
      <div class="py-3 center mx-auto">
        <div class="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-48">
          <div class="mb-4">
            <img class="w-auto mx-auto rounded-full object-cover object-center"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="" />
          </div>
          <label class="cursor-pointer mt-6">
            <span class="mt-2  leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Select Avatar</span>
            <input  id="avatar" type='file' class="hidden" multiple="multiple" accept="accept"  onChange={(e) => setFile(e.target.files[0])}/>
          </label>
        </div>
      </div>
      <label
        htmlFor="file"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
       (Optional) Upload pictures of your work 
      </label>
      <input
        className="mt-[10px] relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file"
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        className="mt-[10px] relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file"
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
      />


      <button className='bg-black rounded-md font-medium w-[200px] my-6 mx-auto py-3  text-[#1623CE]' disabled={per !== null && per < 100} type="submit">
                Send
              </button>
      </form>
    </div>
  );
};

export default ProfileImageUpload;