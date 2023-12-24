import './Experience.css';
import { Experience as ExperienceType } from '../../api/resume';

interface Props {
  experiences: ExperienceType[];
}

export const Experience = (props: Props) => {
  const { experiences } = props;
  return (
    <div className='Experience'>
      {experiences.map((experience, index) => {
        return (
          <>
            <div className='CompanyTenure' key={`CompanyTenure-${index}`}>
              <div className='Company' key={`Company-${index}`}>
                {experience.company}
              </div>
              <div className='Tenure' key={`Tenure-${index}`}>
                {experience.startDate.toLocaleString('default', { month: 'short', year: 'numeric' })} -{' '}
                {experience.endDate
                  ? experience.endDate.toLocaleString('default', { month: 'short', year: 'numeric' })
                  : 'Present'}
              </div>
            </div>
            {experience.summary ? (
              <div className='Summary' key={`Summary-${index}`}>
                {experience.summary}
                <br />
                <br />
              </div>
            ) : null}
            <div className='Impact' key={`Impact-${index}`}>
              {experience.impacts.map((impact) => {
                return (
                  <>
                    • {impact}
                    <br />
                    <br />
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};
