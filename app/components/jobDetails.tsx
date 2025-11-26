import { Job } from '../lib/mockJobs';


function renderTextWithBullets(blob: string, keyPrefix: string = "") {
  if (!blob) return null;
  const lines = blob.split('\n');
  const result: React.ReactNode[] = [];
  let bulletItems: string[] = [];

  function flushBullets() {
    if (bulletItems.length > 0) {
      result.push(
        <ul className="govuk-list govuk-list--bullet" key={keyPrefix + "-ul-" + result.length}>
          {bulletItems.map((item, idx) => <li key={keyPrefix + "-li-" + idx}>{item}</li>)}
        </ul>
      );
      bulletItems = [];
    }
  }

  lines.forEach((line, idx) => {
    if (line.trim().startsWith('* ')) {
      bulletItems.push(line.replace(/^\*\s*/, ''));
    } else if (line.trim() !== "") {
      flushBullets();
      result.push(<p className="govuk-body" key={keyPrefix + "-p-" + idx}>{line}</p>);
    }
  });
  flushBullets();
  return result;
}

export default function JobDetails({ job }: { job: Job }) {
  return (
    <>
      <span className="govuk-caption-xl">{job.organisation}</span>
      <h1 className="govuk-heading-xl">{job.title}</h1>
      <dl className="govuk-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Location</dt>
          <dd className="govuk-summary-list__value">{job.location}</dd>
        </div>
        {job.salary && (
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Salary</dt>
            <dd className="govuk-summary-list__value">{job.salary}</dd>
          </div>
        )}
        <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Contract type</dt>
            <dd className="govuk-summary-list__value">{job.assignmentType}</dd>
          </div>
        {job.jobNumbers && (
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Number of jobs</dt>
            <dd className="govuk-summary-list__value">{job.jobNumbers}</dd>
          </div>
        )}
        {job.profession && (
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Profession</dt>
            <dd className="govuk-summary-list__value">{job.profession}</dd>
          </div>
        )}
        {job.closingDate && (
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Closing date</dt>
            <dd className="govuk-summary-list__value">{job.closingDate}</dd>
          </div>
        )}
      </dl>
      <h2 className="govuk-heading-l">About the job</h2>
      {job.summary && (
        <>
          <h3 className="govuk-heading-m">Summary</h3>
          {renderTextWithBullets(job.summary, "summary")}
        </>
      )}
      <h3 className="govuk-heading-m">Description</h3>
      {renderTextWithBullets(job.description, "desc")}
    </>
  );
}