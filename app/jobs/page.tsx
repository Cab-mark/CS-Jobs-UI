import Filter from "../components/Filter";
import HeroHorizontal from "../components/HeroHorizontal";
import JobResult from "../components/JobResult";

const JobLinks = [
    { href: '/job/1578', text: 'Policy Advisor' },
    { href: '/job/8478', text: 'Project Manager' },
]

export default function Jobs() {
  return (
    <>
          
        <HeroHorizontal />
          <div className="govuk-width-container govuk-!-margin-top-6">
            <div className="govuk-grid-row">
              <Filter />
              <JobResult links={JobLinks} />
            </div>
          </div>
    </>
  );
}