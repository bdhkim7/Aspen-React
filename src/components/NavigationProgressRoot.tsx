import { Suspense } from "react";
import { NavigationProgress } from "@/components/NavigationProgress";

/** Suspense boundary required because NavigationProgress reads useSearchParams. */
export function NavigationProgressRoot() {
  return (
    <Suspense fallback={null}>
      <NavigationProgress />
    </Suspense>
  );
}
