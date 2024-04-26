import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import InfoBoxes from "@/components/InfoBoxes/InfoBoxes";
import PropertiesList from "@/components/Properties/Properties-list";
import PropertiesListSkeleton from "@/components/Properties/Properties-list-skeleton";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <Suspense fallback={<PropertiesListSkeleton numberOfProperties={3} />}>
        <section className="text-center">
          <h2 className="mt-4 text-3xl font-semibold text-blue-500 dark:text-gray-100">
            Featured Properties
          </h2>
          <PropertiesList numberOfProperties={3} />
          <Link
            href="/properties"
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-500 text-white shadow-sm hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            View All Properties
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </section>
      </Suspense>
      <Footer />
    </>
  );
}
