import PropertiesList from "@/components/Properties/Properties-list";
import PropertiesListSkeleton from "@/components/Properties/Properties-list-skeleton";
import { Suspense } from "react";
export default async function Page() {
  return (
    <Suspense fallback={<PropertiesListSkeleton numberOfProperties={9} />}>
      <PropertiesList />
    </Suspense>
  );
}
