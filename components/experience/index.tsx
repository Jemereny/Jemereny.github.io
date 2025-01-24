import './Experience.css';
import { Experience as ExperienceType } from '../../api/resume';
import { useEffect, useState } from 'react';

interface Props {
  experiences: ExperienceType[];
}

export const Experience = (props: Props) => {
  const { experiences } = props;
  const [currentTab, setTab] = useState(0);

  useEffect(() => {});

  const renderTabs = () => {
    return (
      <>
        <div className='Tabs'>
          {experiences.map((experience, index) => (
            <>
              <div className='IsSelected'>
                <input
                  onClick={() => setTab(index)}
                  type='radio'
                  name='options'
                  id={`${experience.company}-input`}
                />
                <label htmlFor={`${experience.company}-input`}>{experience.company}</label>
              </div>
            </>
          ))}
        </div>
      </>
    );
  };

  const renderExperience = () => {
    const experience = experiences[currentTab];
    return (
      <>
        <div className='CompanyTenure' key={`CompanyTenure`}>
          <div className='Company' key={`Company`}>
            {experience.company}
          </div>
          <div className='Tenure' key={`Tenure`}>
            {experience.startDate.toLocaleString('default', { month: 'short', year: 'numeric' })} -{' '}
            {experience.endDate
              ? experience.endDate.toLocaleString('default', { month: 'short', year: 'numeric' })
              : 'Present'}
          </div>
        </div>
        <div className='CompanyTenure'>[{experience.title}]</div>
        {experience.summary ? (
          <div className='Summary' key={`Summary`}>
            {experience.summary}
            <br />
            <br />
          </div>
        ) : null}
        <div className='Impact' key={`Impact`}>
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
  };

  return (
    <div className='Experience'>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>{renderTabs()}</div>
        <div style={{ flex: 7, marginLeft: '3%' }}>{renderExperience()}</div>
      </div>
    </div>
  );
};
