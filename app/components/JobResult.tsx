import Link from 'next/link';

interface JobLink {
  href: string;
  text: string;
}

interface ResultsProps {
  links: JobLink[]; 
}

export default function JobResult({ 
  links}: ResultsProps) {
  return (
    <div className="govuk-grid-column-two-third">
        {links.map((link) => (
            <h2 className="govuk-heading-m">
                <Link className="govuk-link" href={link.href}>
                    {link.text}
                </Link>
            </h2>
        ))}
    </div>
  );
}