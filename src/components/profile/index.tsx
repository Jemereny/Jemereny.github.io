import { Profile as ProfileType } from '../../api/resume';
import { TypeAnimation } from 'react-type-animation';
import './Profile.css';

interface Props {
  profile: ProfileType;
}

export const Profile = (props: Props) => {
  const { profile } = props;

  return (
    <div className='Profile'>
      <h1 className='Profile'>{profile.name}</h1>
      <h4 className='Profile'>
        <a href={`mailto:${profile.email}`}>{profile.email}</a> • {profile.location} •{' '}
        <a href={profile.linkedin}>{profile.linkedin}</a>
      </h4>
      <h3 className='Profile'>
        <TypeAnimation sequence={[profile.summary]} speed={90} cursor={false} style={{ fontSize: 20 }} />
      </h3>
    </div>
  );
};
