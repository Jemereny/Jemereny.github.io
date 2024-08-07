import { useEffect, useState } from 'react';
import { Experience as ExperienceType, Profile as ProfileType, experiences, profile } from '../../api/resume';
import { Profile } from '../../components/profile';
import { Experience } from '../../components/experience';
import './Home.css';

export function Home() {
  useEffect(() => {}, []);

  return (
    <div className='Home'>
      <div>
        <Profile profile={profile} />
      </div>
      <hr />
      <div>
        <Experience experiences={experiences} />
      </div>
    </div>
  );
}
