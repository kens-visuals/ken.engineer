// Components
import SkillsLogosList from './SkillsLogosList';

// Assets
import * as icons from '../utils/skillsLogos';

export default function Skills() {
  return (
    <section className="my-60">
      <h2 className="text-6xl text-heading-lg leading-tight text-primary-dark dark:text-primary-light">
        Ever imporving <span className="text-js-yellow underline">skills.</span>
      </h2>

      <div className="my-10 grid grid-cols-2 grid-rows-mobile-row-layout gap-4 text-3xl font-bold md:grid-cols-4 md:grid-rows-tablet-row-layout md:text-4xl lg:grid-flow-row-dense lg:grid-cols-6 lg:grid-rows-desk-row-layout">
        <div className="relative col-span-2 flex items-start rounded-lg bg-main-tools-pattern p-4 md:row-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-1 ">
          <ul className="flex w-full flex-wrap items-center gap-1">
            <SkillsLogosList logosArr={icons.mainToolsLogos} />
          </ul>

          {/* NOTE: background blur is set manually, change if needed */}
          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg backdrop-blur-[7px]">
            <span className="bg-main-tools-pattern--text bg-clip-text p-4 text-transparent">
              Main Tools
            </span>
          </div>
        </div>
        <div className="relative col-span-2 flex items-start rounded-lg bg-learning-tools-pattern p-4 md:row-start-3 md:row-end-4 lg:row-start-2 lg:row-end-3">
          <ul className="flex flex-wrap items-center gap-1">
            <SkillsLogosList logosArr={icons.currentlyLearningLogos} />
          </ul>

          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg backdrop-blur-sm ">
            <span className="bg-learning-tools-pattern--text bg-clip-text p-4 text-transparent">
              Currently Learning
            </span>
          </div>
        </div>
        <div className="relative flex items-start rounded-lg bg-uiux-tools-pattern p-4">
          <ul className="flex flex-wrap items-center gap-1">
            <SkillsLogosList logosArr={icons.uiuxLogos} />
          </ul>

          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg backdrop-blur-sm ">
            <span className="bg-uiux-tools-pattern--text bg-clip-text p-4 text-transparent">
              UI/UX
            </span>
          </div>
        </div>
        <div className="relative flex items-start rounded-lg bg-apps-pattern p-4">
          <ul className="flex flex-wrap items-center gap-1">
            <SkillsLogosList logosArr={icons.appsLogos} />
          </ul>

          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg backdrop-blur-sm ">
            <span className="bg-apps-pattern--text bg-clip-text p-4 text-transparent">
              Apps
            </span>
          </div>
        </div>
        <div className="relative col-span-2 row-span-2 flex items-start rounded-lg bg-resume-pattern p-4 lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-3">
          <ul className="flex flex-wrap items-center gap-1">
            <SkillsLogosList logosArr={icons.otherToolsLogos} />
          </ul>

          <div className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg backdrop-blur-sm">
            <span className="bg-resume-pattern--text bg-clip-text p-4 text-transparent">
              Other Tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
