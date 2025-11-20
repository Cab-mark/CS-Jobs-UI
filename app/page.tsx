import HeroSearch from "./components/HeroSearch";

export default function Home() {
  return (
  <>
    <HeroSearch />
    <div className="govuk-width-container govuk-!-margin-top-6">
      <h2 className="govuk-heading-m">More ways to explore jobs</h2>
      <p className="govuk-body">
        <a href="https://www.civil-service-careers.gov.uk/" className="govuk-link govuk-link--no-visited-state">Civil Service Careers</a>
      </p>
      <p className="govuk-body">
        <a href="https://www.civil-service-careers.gov.uk/fast-stream/" className="govuk-link govuk-link--no-visited-state">Civil Service Fast Stream</a>
      </p>
      <p className="govuk-body">
        <a href="https://www.civil-service-careers.gov.uk/publicsectorresourcing/" className="govuk-link govuk-link--no-visited-state">Contingent labour</a>
      </p>
    </div>
  </>
  );
}
