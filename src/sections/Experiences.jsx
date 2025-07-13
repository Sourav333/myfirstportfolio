import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section id="work" className="c-space section-spacing">
      <h2 className="text-heading mb-10">Experience</h2>
      <div className="w-full">
        <Timeline data={experiences} />
      </div>
    </section>
  );
};

export default Experiences;
