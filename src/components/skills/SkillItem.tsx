
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export type SkillItemProps = {
  name: string;
  description: string;
  link?: string;
};

const SkillItem = ({ name, description, link }: SkillItemProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full cursor-help">
          {name}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2">
        {link ? (
          <div>
            <p className="text-sm text-gray-700">{description}</p>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block mt-1 text-xs"
            >
              Learn more
            </a>
          </div>
        ) : (
          <p className="text-sm text-gray-700">{description}</p>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default SkillItem;
