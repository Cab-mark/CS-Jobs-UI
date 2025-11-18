// components/ServiceNavigation.js

import Link from 'next/link';

/**
 * GOV.UK Service Navigation Component
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.links - An array of navigation link objects.
 * @param {string} props.links[].href - The URL for the link.
 * @param {string} props.links[].text - The display text for the link.
 * @param {boolean} [props.links[].active=false] - Whether the link is currently active.
 */
export default function ServiceNavigation({ links }) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
<div className="govuk-service-navigation" data-module="govuk-service-navigation">
  <div className="govuk-width-container">
    <div className="govuk-service-navigation__container">
      <nav aria-label="Menu" className="govuk-service-navigation__wrapper">
        <button type="button" className="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden>
          Menu
        </button>
        <ul className="govuk-service-navigation__list" id="navigation">
          {links.map((link, index) => (
                <li 
                  key={index} 
                  className={`govuk-service-navigation__item${link.active ? ' govuk-service-navigation__item--active' : ''}`}
                >
                  <Link 
                    href={link.href} 
                    className="govuk-service-navigation__link"
                    aria-current={link.active ? 'page' : undefined}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
        </ul>
      </nav>
    </div>
  </div>
</div>
);
}