import Link from 'next/link';

interface JobLink {
  id: string;
  href: string;
  text: string;
  location: string;
  organisation: string;
  salary?: string;
  closingDate?: string;
}

interface ResultsProps {
  jobs: JobLink[]; 
}

export default function JobResult({ 
  jobs}: ResultsProps) {
  return (
    <div className="govuk-grid-column-two-thirds">
      <ol className="govuk-list govuk-list--spaced">
        {jobs.map((job) => (
          <li key={job.id} className="govuk-!-margin-bottom-6">
            <h2 className="govuk-heading-m">
                <Link className="govuk-link" href={job.href}>
                    {job.text}
                </Link>
            </h2>
            <p className="govuk-body-s-govuk-!-margin-bottom-1">
              {job.organisation} · {job.location}
            </p>
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