import Filter from "../components/Filter";
import HeroHorizontal from "../components/HeroHorizontal";
import JobResult from "../components/JobResult";
import { getJobs } from "../lib/mockJobs";

export const metadata = {
  title: 'Search results',
  description: 'Browse and apply for jobs in the UK Civil Service.',
};

export default function Jobs() {
  const jobs = getJobs();
  return (
    <>
      <HeroHorizontal />
      <div className="govuk-width-container govuk-!-margin-top-6">
        <div className="govuk-grid-row">
          <Filter />
          <JobResult jobs={jobs} />
        </div>
      </div>
    </>
  );
}