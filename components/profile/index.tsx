import { Profile as ProfileType } from '../../api/resume';
import './Profile.css';

interface Props {
  profile: ProfileType;
  isCompletedCallback?: () => void;
}

export const Profile = (props: Props) => {
  const { profile } = props;

  return (
    <>
      <div className='Profile'>
        <div style={{ flex: 1 }}>
          <p>
            Hi there! I'm{' '}
            <b>
              <u>Jeremy</u>
            </b>
            <br />
            I'm a Software Engineer based in Singapore.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <h2>
            <u>About me</u>
          </h2>
          {profile.summary}
        </div>
      </div>
    </>
  );
};
