interface SkillsTitleProps {
  title: string;
  bgPattern: string;
}

export default function SkillsTitle({ title, bgPattern }: SkillsTitleProps) {
  return (
    <span
      className={`bg-primary-dark bg-clip-text px-4 py-3 text-transparent dark:bg-primary-light/30 ${bgPattern}`}
    >
      {title}
    </span>
  );
}
