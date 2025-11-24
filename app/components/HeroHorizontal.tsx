"use client";

import { useSearchParams } from 'next/navigation';

/**
 * @component
 * @description A component to display content based on search parameters.
 */
const HeroHorizontal: React.FC = () => {
  // ✅ CORRECT: The hook is called inside the body of a function component (HeroHorizontal)
  const searchParams = useSearchParams();

  // Logic using the hook's result is also inside the component
  const keyword = searchParams.get('q') || '';
  const location = searchParams.get('l') || '';
  
  return (
    <div className="govuk-hero--light">

      <div className="govuk-width-container">
                <h1 className="govuk-heading-l">243 search results</h1>
        <form action="/jobs" method="get" className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <div className="govuk-form-group govuk-grid-column-one-third">
                <label className="govuk-label" htmlFor="q">
                Keyword (optional)
                </label>
                <input
                className="govuk-input"
                id="q"
                name="q"
                type="text"
                defaultValue={keyword}
                />
            </div>
            <div className="govuk-form-group govuk-grid-column-one-third">
                <label className="govuk-label" htmlFor="l">
                Location (optional)
                </label>
                <input
                className="govuk-input"
                id="l"
                name="l"
                type="text"
                defaultValue={location}
                />
            </div>
            <div className="govuk-form-group govuk-grid-column-one-third">
            <button
              className="govuk-button govuk-!-margin-top-6"
              data-module="govuk-button"
              type="submit"
            >
              Search
            </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default HeroHorizontal;