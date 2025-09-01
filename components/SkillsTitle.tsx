interface SkillsTitleProps {
  title: string;
  bgPattern: string;
}

export default function SkillsTitle({ title, bgPattern }: SkillsTitleProps) {
  return (
    <span
      className={`bg-clip-text px-4 py-3 font-semibold tracking-wide text-transparent ${bgPattern}`}
    >
      {title}
    </span>
  );
}
