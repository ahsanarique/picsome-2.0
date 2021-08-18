import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="bg-blue opacity-70 col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6 animate-pulse w-24 h-24 flex justify-center items-center">
      <p className="text-lg text-gray-700 italic">Loading...</p>
    </div>
  );
};

export default SkeletonLoader;
