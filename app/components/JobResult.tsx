import Link from 'next/link';
import { Job } from '../lib/mockJobs';

export default function JobResult({ 
  jobs}: { jobs: Job[] }) {
  return (
    <div className="govuk-grid-column-two-thirds">
      <ol className="govuk-list govuk-list--spaced">
        {jobs.map((job) => (
          <li key={job.id} className="govuk-!-margin-bottom-6">
            <h2 className="govuk-heading-m">
                <Link className="govuk-link govuk-link--no-visited-state" href={`/job/${job.id}`}>
                    {job.title}
                </Link>
            </h2>
            <p className="govuk-body-s govuk-!-margin-bottom-1">
              {job.organisation} · {job.location}
            </p>
            {job.assignmentType && (
              <p className="govuk-body-s govuk-!-margin-bottom-1">
                <strong>Contract type:</strong> {job.assignmentType}
              </p>
            )}
               {job.salary && (
              <p className="govuk-body-s govuk-!-margin-bottom-1">
                <strong>Salary:</strong> {job.salary}
              </p>
            )}
            {/* Closing date */}
            {job.closingDate && (
              <p className="govuk-hint govuk-!-margin-bottom-2">
                Closing date: {job.closingDate}
              </p>
            )}
          </li>
        ))}
        </ol>
    </div>
  );
}