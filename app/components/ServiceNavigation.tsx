// components/ServiceNavigation.tsx

'use client'; // This hook must be used in a client component

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get the current route

// --- TypeScript Interfaces ---

interface NavLink {
  href: string;
  text: string;
}

interface ServiceNavigationProps {
  links: NavLink[];
}

// --- Component ---

/**
 * GOV.UK Service Navigation Component
 * * Renders a service navigation bar and automatically highlights the active link 
 * based on the current Next.js route path.
 */
export default function ServiceNavigation({ links }: ServiceNavigationProps) {
  // 1. Get the current pathname
  const currentPath = usePathname();

  if (!links || links.length === 0) {
    return null;
  }
  
  // 2. Map links to dynamically calculate the active state
  const activeLinks = links.map(link => ({
    ...link,
    // Determine if the link is active by comparing its href with the current path
    // We use a simple equality check here. For complex nested routes, you might
    // need a more sophisticated check (e.g., currentPath.startsWith(link.href)).
    active: currentPath === link.href,
  }));


  return (
    <div className="govuk-service-navigation" data-module="govuk-service-navigation">
      <div className="govuk-width-container">
        <div className="govuk-service-navigation__container">
          <nav aria-label="Menu" className="govuk-service-navigation__wrapper">
            <button type="button" className="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden>
              Menu
            </button>
            <ul className="govuk-service-navigation__list" id="navigation">
              {activeLinks.map((link, index) => (
                <li 
                  key={index} 
                  // Use the dynamically calculated 'active' property
                  className={`govuk-service-navigation__item${link.active ? ' govuk-service-navigation__item--active' : ''}`}
                >
                  <Link 
                    href={link.href} 
                    className="govuk-service-navigation__link"
                    // Set aria-current for accessibility
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