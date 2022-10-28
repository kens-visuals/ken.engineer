import Image from 'next/image';
// Assets
import shape from '../public/assets/shapes.svg';

export default function Skills() {
  return (
    <section className="my-60">
      <h2 className="text-6xl text-heading-lg leading-tight text-primary-dark dark:text-primary-light">
        Ever imporving <span className="text-js-yellow underline">skills.</span>
      </h2>

      <div className="my-10 grid grid-cols-2 grid-rows-mobile-row-layout gap-4 text-3xl font-bold md:grid-cols-4 md:grid-rows-tablet-row-layout md:text-4xl lg:grid-flow-row-dense lg:grid-cols-6 lg:grid-rows-desk-row-layout">
        <div className="relative col-span-2 flex items-start justify-end rounded-lg bg-main-tools-pattern  p-6">
          <Image src={shape} alt="" height={100} width={50} />
          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg p-6 backdrop-blur-sm ">
            <span className="bg-main-tools-pattern--text bg-clip-text text-transparent">
              Main Tools
            </span>
          </div>
        </div>
        <div className="relative col-span-2 flex items-start justify-end rounded-lg bg-learning-tools-pattern p-6 md:row-start-3 md:row-end-4 lg:row-start-2 lg:row-end-3">
          <Image src={shape} alt="" height={100} width={50} />
          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg p-6 backdrop-blur-sm ">
            <span className="bg-learning-tools-pattern--text bg-clip-text text-transparent">
              Currently Learning
            </span>
          </div>
        </div>
        <div className="relative flex items-start justify-end rounded-lg bg-uiux-tools-pattern p-6">
          <Image src={shape} alt="" height={100} width={50} />
          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg p-6 backdrop-blur-sm ">
            <span className="bg-uiux-tools-pattern--text bg-clip-text text-transparent">
              UI/UX
            </span>
          </div>
        </div>
        <div className="relative flex items-start justify-end rounded-lg bg-apps-pattern p-6">
          <Image src={shape} alt="" height={100} width={50} />
          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg p-6 backdrop-blur-sm ">
            <span className="bg-apps-pattern--text bg-clip-text text-transparent">
              Apps
            </span>
          </div>
        </div>
        <div className="relative col-span-2 flex items-start justify-end rounded-lg bg-resume-pattern p-6">
          <Image src={shape} alt="" height={100} width={50} />
          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg  p-6 backdrop-blur-sm ">
            <span className="bg-resume-pattern--text bg-clip-text text-transparent">
              Resume
            </span>
          </div>
        </div>
        <div className="relative col-span-2 row-span-2 flex items-start justify-end rounded-lg bg-other-tools-pattern p-6 lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-3">
          <Image src={shape} alt="" height={100} width={50} />
          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg  p-6 backdrop-blur-sm ">
            <span className="bg-other-tools-pattern--text bg-clip-text text-transparent">
              Other Tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
