import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import { Experience as ExperienceType, Profile as ProfileType, experiences, profile } from './api/resume';
import { Profile } from './components/profile';
import { Experience } from './components/experience';

function App() {
  const [userExperiences, setExperiences] = useState<ExperienceType[]>([]);
  const [userProfile, setProfile] = useState<ProfileType>();
  const fetchData = () => {
    setTimeout(() => {
      setExperiences(experiences);
    }, 4000);
    setProfile(profile);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {userProfile ? <Profile profile={userProfile} /> : null}
      <hr />
      <InfiniteScroll
        dataLength={userExperiences.length}
        next={fetchData}
        style={{ display: 'flex' }}
        hasMore={false}
        scrollThreshold={0}
        loader={<h4>Loading...</h4>}
      >
        {userExperiences.length ? <Experience experiences={userExperiences} /> : null}
      </InfiniteScroll>
    </div>
  );
}

export default App;
