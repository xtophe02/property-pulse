export default async function PropertiesListSkeleton({ numberOfProperties }) {
  const properties = Array.from(
    { length: numberOfProperties },
    (_, i) => i + 1
  );
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property}
            className="w-full h-72 bg-gray-200 rounded-xl dark:bg-neutral-700 animate-pulse"
          ></div>
        ))}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
