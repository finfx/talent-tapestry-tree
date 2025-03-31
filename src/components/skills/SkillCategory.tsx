
import { ReactNode } from "react";
import SkillItem, { SkillItemProps } from "./SkillItem";

export type SkillCategoryProps = {
  title: string;
  description: string;
  icon: ReactNode;
  skills: SkillItemProps[];
};

const SkillCategory = ({ title, description, icon, skills }: SkillCategoryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold text-gray-800 ml-3">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <SkillItem 
            key={skillIndex} 
            name={skill.name} 
            description={skill.description} 
            link={skill.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
