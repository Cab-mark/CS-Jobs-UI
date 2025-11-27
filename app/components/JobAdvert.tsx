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

export default function JobAdvert({ job }: { job: Job }) {
  return (
    <>
      <h2 id="about-the-job" className="govuk-heading-l">About the job</h2>
      {job.summary && (
        <>
          <h3 className="govuk-heading-m">Summary</h3>
          {renderTextWithBullets(job.summary, "summary")}
        </>
      )}
      <h3 className="govuk-heading-m">Description</h3>
      {renderTextWithBullets(job.description, "desc")}
      <h2 id="what-we-are-looking-for" className="govuk-heading-l">What we are looking for</h2>
      {renderTextWithBullets(job.personalSpec, "personalSpec")}
       {job.benefits && (
      <>
      <h2 id="benefits" className="govuk-heading-l">Benefits</h2>
      {renderTextWithBullets(job.benefits, "benefits")}
      </>
       )}
      <h2 id="before-you-apply" className="govuk-heading-l">Before you apply</h2>
      <p className="govuk-body">You must read the following information before applying for this job.</p>
      <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
      <div className="govuk-accordion__section">
        <div className="govuk-accordion__section-header">
          <h3 className="govuk-accordion__section-heading">
            <span className="govuk-accordion__section-button" id="accordion-default-heading-1">
              How we will assess you
            </span>
          </h3>
        </div>
        <div id="accordion-default-content-1" className="govuk-accordion__section-content">
          <p className="govuk-body">This is the content for Writing well for the web.</p>
        </div>
      </div>
      <div className="govuk-accordion__section">
        <div className="govuk-accordion__section-header">
          <h3 className="govuk-accordion__section-heading">
            <span className="govuk-accordion__section-button" id="accordion-default-heading-2">
              Reasonable adjustments
            </span>
          </h3>
        </div>
        <div id="accordion-default-content-2" className="govuk-accordion__section-content">
          <p className="govuk-body">This is the content for Writing well for specialists.</p>
        </div>
      </div>
      <div className="govuk-accordion__section">
        <div className="govuk-accordion__section-header">
          <h3 className="govuk-accordion__section-heading">
            <span className="govuk-accordion__section-button" id="accordion-default-heading-3">
              Nationality requirements
            </span>
          </h3>
        </div>
        <div id="accordion-default-content-3" className="govuk-accordion__section-content">
          <p className="govuk-body">This is the content for Know your audience.</p>
        </div>
      </div>
      <div className="govuk-accordion__section">
        <div className="govuk-accordion__section-header">
          <h3 className="govuk-accordion__section-heading">
            <span className="govuk-accordion__section-button" id="accordion-default-heading-4">
              Eligibility checks
            </span>
          </h3>
        </div>
        <div id="accordion-default-content-4" className="govuk-accordion__section-content">
          <p className="govuk-body">This is the content for Eligibility checks.</p>
        </div>
      </div>
    </div>
    {job.applyUrl && (
        <a
          href={job.applyUrl}
          className="govuk-button"
          target="_blank"
          role="button"
          rel="noopener noreferrer"
        >
          Apply on advertiser's site
        </a>
      )}
    </>
  );
}  