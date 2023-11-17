import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import CustomDropdown from "@/components/CustomDropdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // data
  const [selectedItem, setSelectedItem] = useState("");
  const [items, setItems] = useState([]);

  // functions
  function numberWithCommas(x) {
    return (x ?? "").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleSelectChange = (e) => {
    console.log(e);
    setSelectedItem(e);
  };

  // Hooks
  useEffect(() => {
    fetch("/api/countries")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className="title">
          Say Hi from <span>Pavlo Liubchenko</span>
        </h1>

        <div className="container">
          <CustomDropdown items={items} onChange={handleSelectChange} />

          {selectedItem && (
            <p className="text">
              {selectedItem.symbol}
              {numberWithCommas(selectedItem.value)}
            </p>
          )}
        </div>
      </main>
    </>
  );
}
