import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined, FaMapMarker } from "react-icons/fa";

export default function PropertyCard({ property }) {
  // console.log("🚀 ~ PropertyCard ~ property:", property.images);

  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="relative h-52 flex flex-col justify-center items-center  rounded-t-xl overflow-hidden">
        <Image
          src={`/images/properties/${property.images[0]}`}
          alt={property.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="400px"
        />
        <div className="absolute top-4 right-4 bg-white border rounded-xl font-bold text-sm px-4 bg-opacity-40 group-hover:bg-opacity-80">
          {property.rates.weekly && <p>{property.rates.weekly} € week</p>}
          {property.rates.monthly && <p>{property.rates.monthly} € month</p>}
          {property.rates.nightly && <p>{property.rates.nightly} € night</p>}
        </div>
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          {property.type}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
          {property.name}
        </h3>
        <h6 className="text-sm text-gray-400 dark:text-neutral-300 dark:hover:text-white">
          <FaMapMarker className="inline" /> {property.location.city},{" "}
          {property.location.state}
        </h6>
        <p className="flex gap-x-2 text-sm justify-center mt-3 text-gray-500 dark:text-neutral-500 ">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            {property.beds} <FaBed className="inline ml-2" />
          </span>
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            {property.baths} <FaBath className="inline ml-2" />
          </span>
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            {property.square_feet} <FaRulerCombined className="inline ml-2" />
          </span>
        </p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        <Link
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          href={`properties/${property.id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
