import { HeroSection } from "./components/Hero";
import GithubContributionGraph from "./components/GithubContributionGraph";
import Mayur from "./components/Mayur";
import TechStack from "./components/TechStack";
import ProjectHighlights from "./components/ProjectHighlight";
import { SocailMediaHandles } from "./components/SocailMediaHandles";
import CurrentDateAndTime from "./components/ScratchComp";
import { CertificateHighlights } from "./components/CertificationHighlight";

export default function Home() {
  return (
    <>
      <div className="flex-col gap-y-10 h-full w-full p-6 mb-10 ">
        <Mayur />
        <HeroSection />
        <GithubContributionGraph />
        <TechStack />
        <ProjectHighlights />
        <div className="lg:flex w-full lg:items-center gap-x-5 h-fit">
          <div className="lg:w-2/3 w-full">
            <SocailMediaHandles />
          </div>
          <div className="lg:w-1/3 lg:flex-col gap-y-5 w-full">
            <div className="w-full">
              <CurrentDateAndTime />
            </div>
          </div>
        </div>
        <CertificateHighlights />
      </div>
    </>
  );
}
