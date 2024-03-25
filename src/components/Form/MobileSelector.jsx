import React, { useState } from "react";
import { brands, mobileModels } from "../../Data/Data";

const MobileSelector = ({ registerBrand, registerModel }) => {
 



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
          {brands.map((option, index) => (
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
            {mobileModels[selectedBrand]?.map((model, index) => (
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






























// import React, { useEffect, useState } from "react";
// import CreatableSelect from "react-select/creatable";
// import { brands, mobileModels } from "../../Data/Data";

// const MobileSelector = ({ registerBrand, registerModel }) => {
//   const [selectedBrand, setSelectedBrand] = useState("");
//   const [selectedModel, setSelectedModel] = useState("");
//   const [Models, setModels] = useState([]);
//   console.log(selectedBrand);
//     console.log(Models);
//   useEffect(() => {
//     console.log(mobileModels.selectedBrand);
//     setModels(mobileModels.selectedBrand);
// }, [selectedBrand]);

// // console.log(Models)
// //   const handleBrandChange = (event) => {
//     //     setSelectedBrand(event.target.value);
//     //     setSelectedModel("");
//     //   };
    
//     const handleModelChange = (event) => {
//         setSelectedModel(event.target.value);
//     };
    
//     const handleSelectChange = (selectedOption) => {
//         if (selectedOption) {
//             console.log("Selected value:", selectedOption.value);
//             setSelectedBrand(selectedOption.value);
//             // setModels(mobileModels.selectedOption.value);
//       //   setSelectedModel("");
//       //   setModels(mobileModels.selectedOption.value)
//     } else {
//       console.log("No option selected");
//     }
//   };
//   return (
//     <div className="flex flex-col items-center justify-center mb-10">
//       {selectedModel && (
//         <div>
//           <p className="text-xl">
//             You have selected:{" "}
//             <span className="font-semibold">{selectedBrand}</span> -{" "}
//             <span className="font-semibold">{selectedModel}</span>
//           </p>
//         </div>
//       )}
//       <CreatableSelect
//         isClearable
//         options={brands}
//         onChange={handleSelectChange}
//         className="w-96"
//       />
//       <CreatableSelect
//         isClearable
//         options={mobileModels?.Samsung}
//         // onChange={handleSelectChange}
//         className="w-96"
//       />
//     </div>
//   );
// };

// export default MobileSelector;
