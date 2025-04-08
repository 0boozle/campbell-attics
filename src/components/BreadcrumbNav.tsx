import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  currentPageTitle?: string;
}

export function BreadcrumbNav({ currentPageTitle }: BreadcrumbProps) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Schema.org breadcrumb data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://campbellsattics.com.au"
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": currentPageTitle || segment.charAt(0).toUpperCase() + segment.slice(1),
        "item": `https://campbellsattics.com.au/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      <nav className="bg-brand-navy py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-brand-copper hover:text-brand-copper-light">
                Home
              </Link>
            </li>
            {pathSegments.map((segment, index) => (
              <li key={segment} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-brand-copper mx-2" />
                {index === pathSegments.length - 1 ? (
                  <span className="text-white">
                    {currentPageTitle || segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </span>
                ) : (
                  <Link
                    to={`/${pathSegments.slice(0, index + 1).join('/')}`}
                    className="text-brand-copper hover:text-brand-copper-light"
                  >
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}