import React from 'react';
import ProfileImageUpload from './ProfileImageUpload';
import ProfileTabs from './ProfileTabs';
import { Tabs, Tab } from './Tabs';
import ProfileComments from './ProfileComments';


const ProfileHomepage = ({ crudOps }) => {
  return (
    <div>
      <Tabs>
        <Tab label="PROFILE" >
          <div className='w-full py-[30 rem] px-4 bg-white text-black'>
            <div class="h-full w-full">
              <ProfileTabs crudOps={crudOps} />
            </div>
          </div>
        </Tab>
        <Tab label="UPLOAD IMAGES">
          <div className="w-full h-full py-[30 rem] px-4 bg-white text-black">
            <ProfileImageUpload />
          </div>
        </Tab>
        <Tab label="REVIEWS">
          <div className="w-full py-[30 rem] px-4 bg-white text-black">
            <ProfileComments />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProfileHomepage;