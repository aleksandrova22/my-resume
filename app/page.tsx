import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { Job } from "@/components/job";
import {Resume}  from "@/components/resume";
import Home from "@/components/home";
import { Projects } from "@/components/projects";


export default function Page() {
  return <>

    <div id="home">
      <Home />
    </div>
    <div id="education">
      <Education />
    </div>
    <div id="job">
      <Job />
    </div>
    <div id="resume">
      <Resume />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="footer">
      <Footer />
    </div>
  </>
};
