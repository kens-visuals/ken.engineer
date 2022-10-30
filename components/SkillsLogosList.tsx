import Image from 'next/image';
import { nanoid } from 'nanoid';

export default function SkillsLogosList({
  logosArr,
}: {
  logosArr: {
    name: string;
    img: string;
  }[];
}) {
  return (
    <ul className="flex w-full flex-wrap items-center gap-1">
      {logosArr.map(({ name, img }) => (
        <li key={nanoid()}>
          <Image src={img} alt={name} height={60} width={60} />
        </li>
      ))}
    </ul>
  );
}
