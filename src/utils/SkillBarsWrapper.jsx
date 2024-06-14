import { SkillBar as OriginalSkillBar } from 'react-skills';

const SkillBar = ({ type = 'Skill', level = 0 }) => {
  return <OriginalSkillBar type={type} level={level} />;
};

export default SkillBar;
