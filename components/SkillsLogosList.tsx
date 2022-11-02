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
    <ul className="flex w-full flex-wrap items-center gap-2">
      {logosArr.map(({ name, img }) => (
        <li key={nanoid()} className="w-fit">
          <Image src={img} alt={name} height={58} width={58} />
        </li>
      ))}
    </ul>
  );
}
