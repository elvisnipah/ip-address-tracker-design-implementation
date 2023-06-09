import React from "react";
import AddressInput from "./AddressForm";
import AddressDisplay from "./AddressDisplay";

function Address(props) {
  return (
    <main className="flex flex-col items-center absolute top-[70px] left-[10%] right-[10%] lg:top-[120px] gap-8">
      <AddressInput
        getIPData={props.getIPData}
        addressData={props.addressData}
      />
      {props.isLoading && <div>Loading...</div>}
      {!props.isLoading && <AddressDisplay data={props.addressData} />}
    </main>
  );
}

export default Address;
