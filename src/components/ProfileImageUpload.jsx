import React from 'react';

const ProfileImageUpload = () => {
  return (

    <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <div class="py-3 center mx-auto">
        <div class="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-48">
          <div class="mb-4">
            <img class="w-auto mx-auto rounded-full object-cover object-center" src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg" alt="Avatar Upload" />
          </div>
          <label class="cursor-pointer mt-6">
            <span class="mt-2  leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Select Avatar</span>
            <input type='file' class="hidden" multiple="multiple" accept="accept" />
          </label>
        </div>
      </div>
      <label
        htmlFor="formFile"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
       (Optional) Upload pictures of your work 
      </label>
      <input
        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file"
        id="formFile"
      />
    </div>
  );
};

export default ProfileImageUpload;