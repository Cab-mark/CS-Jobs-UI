import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getJobById } from "../../lib/mockJobs";

interface JobAdvertProps {
  params: { id: string };
}

async function getJobData(id: string) {
  // Use the mock data util
  return getJobById(id);
}

export async function generateMetadata({ params }: JobAdvertProps): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobData(id);
  return {
    title: job ? job.title : "Job not found",
    description: job ? job.description : "No job found for this ID.",
  };
}

export default async function JobAdvertPage({ params }: JobAdvertProps) {
  const { id } = await params;
  const job = await getJobData(id);
  if (!job) return notFound();

  return (
    <div className="govuk-width-container govuk-!-margin-top-6">
      <h1 className="govuk-heading-l">{job.title}</h1>
      
      <dl className="govuk-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Department</dt>
          <dd className="govuk-summary-list__value">{job.organisation}</dd>
        </div>
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
        {job.closingDate && (
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Closing date</dt>
            <dd className="govuk-summary-list__value">{job.closingDate}</dd>
          </div>
        )}
      </dl>
      <h2 className="govuk-heading-m">Job description</h2>
      <p className="govuk-body">{job.description}</p>
    </div>
  );
}
