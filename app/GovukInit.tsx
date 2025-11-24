"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";


export default function GovukInit() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("[GovukInit] useEffect running on client, pathname:", pathname);
    import("govuk-frontend").then(({ initAll }) => {
      console.log("[GovukInit] govuk-frontend loaded, calling initAll()");
      initAll();
    });
  }, [pathname]);

  return null;
}