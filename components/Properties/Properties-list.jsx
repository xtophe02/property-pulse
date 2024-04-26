import { resolve } from "path";
import PropertyCard from "./Property-card";
import { getProperties } from "@/lib/actions";

export default async function PropertiesList({ numberOfProperties = 0 }) {
  let { properties } = await getProperties();
  // console.log("🚀 ~ PropertiesList ~ properties:", properties);
  if (numberOfProperties > 0) {
    properties = properties
      .sort(() => Math.random() - Math.random())
      .slice(0, numberOfProperties);
  }
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <div className="col-span-full text-center">
            <h2 className="text-lg font-medium text-gray-500 dark:text-neutral-300">
              No properties found
            </h2>
          </div>
        )}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
