import React from "react";

function AddressDisplay({ data }) {
  return (
    <section className="flex flex-col bg-white w-full items-center p-4 lg:p-0 rounded-2xl gap-4 z-50 lg:flex-row lg:justify-evenly lg:py-4">
      <div className="flex flex-col items-center lg:items-start lg:p-4">
        <h3 className="text-gray-500 text-xs tracking-wider font-bold">
          IP ADDRESS
        </h3>
        <p className="font-bold text-xl">{data.ip}</p>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:p-4 lg:border-l-2">
        <h3 className="text-gray-500 text-xs tracking-wider font-bold">
          LOCATION
        </h3>
        <p className="font-bold text-xl">
          {data.location.region}, {data.location.country}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center lg:items-start lg:p-4 lg:border-l-2">
        <h3 className="text-gray-500 text-xs tracking-wider font-bold">
          TIMEZONE
        </h3>
        <p className="font-bold text-xl">UTC {data.location.timezone}</p>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:p-4 lg:border-l-2">
        <h3 className="text-gray-500 text-xs tracking-wider font-bold">ISP</h3>
        <p className="font-bold text-xl">{data.isp}</p>
      </div>
    </section>
  );
}

export default AddressDisplay;
