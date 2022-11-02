// Components
import Section from './Section';
import SkillsLogosList from './SkillsLogosList';
import SkillsBackdrop from './SkillsBackdrop';
import SkillsTitle from './SkillsTitle';

// Assets
import * as icons from '../utils/skillsLogos';

// Hooks
import useMediaQuery from '../hooks/useMediaQuery';

export default function Skills() {
  const matches = useMediaQuery('min-width(764px)');

  console.log(matches);

  return (
    <Section id="skills">
      <h2 className="text-6xl text-heading-lg leading-tight text-primary-dark dark:text-primary-light">
        Ever imporving <span className="text-js-yellow underline">skills.</span>
      </h2>

      <div className="my-10 grid grid-cols-2 grid-rows-mobile-row-layout gap-4 text-3xl font-bold md:grid-cols-4 md:grid-rows-tablet-row-layout lg:grid-flow-row-dense lg:grid-cols-6 lg:grid-rows-desk-row-layout">
        <div className="relative col-span-2 flex h-full w-full items-start rounded-lg bg-resume-pattern p-4 md:row-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-1">
          <SkillsLogosList logosArr={icons.mainToolsLogos} />

          <SkillsBackdrop>
            <SkillsTitle
              title="Main Tools"
              bgPattern="bg-resume-pattern--text"
            />
          </SkillsBackdrop>
        </div>
        <div className="relative col-span-2 flex h-full w-full items-start rounded-lg bg-learning-tools-pattern p-4 md:row-start-3 md:row-end-4 lg:row-start-2 lg:row-end-3 ">
          <SkillsLogosList logosArr={icons.currentlyLearningLogos} />

          <SkillsBackdrop>
            <SkillsTitle
              title="Currently Learning"
              bgPattern="bg-learning-tools-pattern--text"
            />
          </SkillsBackdrop>
        </div>
        <div className="relative flex h-full w-full items-start rounded-lg bg-uiux-tools-pattern p-4 lg:col-start-3 lg:col-end-4">
          <SkillsLogosList logosArr={icons.uiuxLogos} />

          <SkillsBackdrop>
            <SkillsTitle
              title="UI/UX"
              bgPattern="bg-uiux-tools-pattern--text"
            />
          </SkillsBackdrop>
        </div>
        <div className="relative flex h-full w-full items-start rounded-lg bg-apps-pattern p-4 lg:col-start-4 lg:col-end-5">
          <SkillsLogosList logosArr={icons.appsLogos} />

          <SkillsBackdrop>
            <SkillsTitle title="Apps" bgPattern="bg-apps-pattern--text" />
          </SkillsBackdrop>
        </div>
        <div className="relative col-span-2 row-span-2 flex h-full w-full items-start rounded-lg bg-main-tools-pattern p-4 lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-3">
          <SkillsLogosList logosArr={icons.otherToolsLogos} />

          <SkillsBackdrop>
            <SkillsTitle
              title="Other Tools"
              bgPattern="bg-main-tools-pattern--text"
            />
          </SkillsBackdrop>
        </div>
      </div>
    </Section>
  );
}
