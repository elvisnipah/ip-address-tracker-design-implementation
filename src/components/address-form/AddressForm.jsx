import submitButton from "../../assets/icon-arrow.svg";
import { useState } from "react";

function AddressInput({ getIPData }) {
  const [ipValue, setIpValue] = useState("");

  const handleChange = (event) => {
    setIpValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getIPData(ipValue);
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-l-2xl p-3 outline-none w-full lg:w-96"
        value={ipValue}
        onChange={handleChange}
      />
      <button className="bg-black hover:bg-gray-700 p-3 rounded-r-2xl w-12">
        <img src={submitButton} alt="" className="mx-auto" />
      </button>
    </form>
  );
}

export default AddressInput;
