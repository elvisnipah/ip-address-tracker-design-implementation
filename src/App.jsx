import Address from "./components/address-form/Address";
import Header from "./components/Header";
import Map from "./components/Map";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [addressData, setAddressData] = useState(null);

  async function getInitialData() {
    const data = await fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_BYH9KtjDMPqYgSjLpv1QnYwKsfnzt"
    );
    const response = await data.json();
    setIsLoading(false);
    setAddressData(response);
  }

  useEffect(() => {
    getInitialData();
  }, []);

  const getIPData = async (ip) => {
    const response = await fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_BYH9KtjDMPqYgSjLpv1QnYwKsfnzt&ipAddress=" +
        ip
    );
    if (response.ok) {
      const data = await response.json();
      setAddressData(data);
    } else {
      window.alert("Bad response from server. Please check entered IP.");
    }
  };

  return (
    <div id="app" className="relative flex flex-col">
      <Header />
      {!isLoading && (
        <Address
          getIPData={getIPData}
          addressData={addressData}
          isLoading={isLoading}
        />
      )}
      {!isLoading && <Map addressData={addressData} />}
    </div>
  );
}

export default App;
