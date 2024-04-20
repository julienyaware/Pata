import React, { useContext, useEffect } from 'react';
import { storage } from '../Firabase';
import { auth,db } from '../Firabase';
import {addDoc,collection,doc,serverTimestamp,setDoc, getFirestore, getDoc, updateDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const ProfileImageUpload = () => {
  const [file,setFile] = useState("")
  const [avatarFile, setAvatarFile] = useState("");
  const [optionalImage1File, setOptionalImage1File] = useState("");
  const [optionalImage2File, setOptionalImage2File] = useState("");
  const [avatarImageUrl, setAvatarImageUrl] = useState('');
  const [optionalImage1Url, setOptionalImage1Url] = useState('');
  const [optionalImage2Url, setOptionalImage2Url] = useState('');
  const [avatarProgress, setAvatarProgress] = useState(null);
  const [optionalImage1Progress, setOptionalImage1Progress] = useState(null);
  const [optionalImage2Progress, setOptionalImage2Progress] = useState(null);

  const navigate = useNavigate()
  
  const defualtData = {
    avatar: '',
    optionalImage1: '',
    optionalImage2: ''
  }
  const [data, setData] = useState(defualtData);
  const [per, setPerc] = useState(null);
  const [uploadStatus,setUploadStatus]= useState("")
  const {currentUser} = useContext(AuthContext)
   
  useEffect(() => {
    const uploadFile = (file, setImageUrl, setProgress) => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
            setUploadStatus("Upload is " + progress + "% done")
            //window.alert("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              setUploadStatus("paused")
              //window.alert("Upload is paused");
              break;
            case "running":
              setUploadStatus("Uploading Image")
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
            console.log('download url is', downloadURL)
            setImageUrl(downloadURL)
            // setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    //file && uploadFile();
    avatarFile && uploadFile(avatarFile, setAvatarImageUrl, setAvatarProgress);
    optionalImage1File && uploadFile(optionalImage1File, setOptionalImage1Url, setOptionalImage1Progress);
    optionalImage2File && uploadFile(optionalImage2File, setOptionalImage2Url, setOptionalImage2Progress);
  }, [avatarFile, optionalImage1File, optionalImage2File]);

  const handleOnChangeFile = (e) => {
    setFile(e.target.files[0])
    const { name, value } = e.target.files[0];
    setData((prevState) => ({ ...prevState, [name]: value }));

  }

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      //const firestore = getFirestore();
      //const docRef = doc(firestore, 'profile', currentUser.uid);
      const docRef = doc(db, 'profile', currentUser.uid);
      //const docRef = db.collection('profile').doc(currentUser.uid);
            const docSnapshot = await getDoc(docRef);
            
            if (docSnapshot.exists) {
              // Update the document by adding the extra field with data
              await updateDoc(docRef,{
                  avatarImageUrl: avatarImageUrl,
                  optionalImage1File: optionalImage1Url,
                  optionalImage2Url,
                  timeStamp: serverTimestamp(),

              });
              window.alert('Document updated successfully');
              setUploadStatus('Images have been uploaded successfully')
              
          } else {
              window.alert('Please provide Information about you in the profile tab first');
          }
      
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
                avatarFile
                  ? URL.createObjectURL(avatarFile)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="" />
          </div>
          <label class="cursor-pointer mt-6">
            <span class="mt-2  leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Select Avatar</span>
            <input  id="avatarFile" 
            type='file' 
            class="hidden" 
            multiple="multiple" 
            accept="accept" name='avatar' 
            defaultValue={avatarFile ? avatarFile.name : ''}
            onChange={(e) => setAvatarFile(e.target.files[0])}/>
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
        id="optionalImage1File"
        name='optionalImage1File'
        defaultValue={optionalImage1File ? optionalImage1File.name : ''}
        onChange={(e) => setOptionalImage1File(e.target.files[0])}
      />
      <input
        className="mt-[10px] relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file"
        id="optionalImage2File"
        name='optionalImage2File'
        defaultValue={optionalImage2File ? optionalImage2File.name : ''}
        onChange={(e) => setOptionalImage2File(e.target.files[0])}
      />

      <button className='bg-black rounded-md font-medium w-[200px] my-6 mx-auto py-3  text-[#1623CE]' disabled={per !== null && per < 100} type="submit">
                upload Images
              </button>
      </form>
    </div>
  );
};

export default ProfileImageUpload;