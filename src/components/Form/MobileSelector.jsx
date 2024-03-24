import React, { useState } from "react";

const MobileSelector = ({ registerBrand, registerModel }) => {
  const mobileBrands = [
    "Samsung",
    "Apple",
    "Xiaomi",
    "OPPO",
    "Vivo",
    "Lenovo",
    "Realme",
    "OnePlus",
    "LG",
    "Sony",
    "Google",
  ];

  const mobileModels = {
    Samsung: [
      "Samsung Galaxy S21 Ultra",
      "Samsung Galaxy Note 20 Ultra",
      "Samsung Galaxy Z Fold 3",
      // Add more Samsung models here
    ],
    Apple: [
      "iPhone 13 Pro Max",
      "iPhone 13 Pro",
      "iPhone 13",
      // Add more Apple models here
    ],
    Xiaomi: [
      "Xiaomi Mi 11 Ultra",
      "Xiaomi Mi 11 Pro",
      "Xiaomi Mi 11 Lite",
      // Add more Xiaomi models here
    ],
    // Add models for other brands similarly
  };

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedModel("");
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      {selectedModel && (
        <div>
          <p className="text-xl">
            You have selected:{" "}
            <span className="font-semibold">{selectedBrand}</span> -{" "}
            <span className="font-semibold">{selectedModel}</span>
          </p>
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="brand" className="block mb-1">
          Select a Brand:
        </label>

        <select
          {...registerBrand}
          onChange={handleBrandChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">--Please select a brand--</option>
          {mobileBrands.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {selectedBrand && (
        <div className="mb-4">
          <label htmlFor="model" className="block mb-1">
            Select a Model:
          </label>
          <select
            {...registerModel}
            onChange={handleModelChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">--Please select a Model--</option>
            {mobileModels[selectedBrand].map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default MobileSelector;
