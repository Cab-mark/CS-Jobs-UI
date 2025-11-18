// app/GovukInit.tsx

"use client";

import { useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
// ❌ DELETE: Remove the static import here.
// import { initAll } from "govuk-frontend"; 

type Props = {
    children: ReactNode;
};

export default function GovukInit({ children }: Props) {
    const pathname = usePathname();

    // Run once: add body classes for progressive enhancement
    useEffect(() => {
        // ... (Your existing code is fine)
        if (typeof document !== "undefined") {
            document.body.classList.add("js-enabled");

            if ("noModule" in HTMLScriptElement.prototype) {
                document.body.classList.add("govuk-frontend-supported");
            }
        }
    }, []);

    // Run on first load + every route change: init GOV.UK components
    useEffect(() => {
        // ✅ FIX: Use a DYNAMIC IMPORT inside useEffect.
        // This ensures the govuk-frontend module is only loaded 
        // and initialized in the browser (client-side).
        async function loadGovUK() {
            try {
                // 1. Dynamically import the module.
                const GovUK = await import("govuk-frontend"); 
                
                // 2. Access and call the initAll function.
                GovUK.initAll(); 

            } catch (error) {
                console.error("Failed to load GOV.UK Frontend:", error);
            }
        }

        loadGovUK();

    }, [pathname]); // Re-run when the route changes

    return <>{children}</>;
}