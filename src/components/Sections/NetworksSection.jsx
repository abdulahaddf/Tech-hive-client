import { useState } from "react";
import { TextArea } from "../Form/Warper";

const countries = [
  "International",
  "USA",
  "UK",
  "India",
  "China",
  "Canada / Japan",
];

const NetworksSection = ({ register }) => {
  const [network4G, setNetwork4G] = useState([
    { modelName: "", country: "", FDD: "", TDD: "" },
  ]);
  const [network5G, setNetwork5G] = useState([
    { modelName: "", country: "", NR: "", mmWave: "" },
  ]);

  const handleAddNetwork4G = () => {
    setNetwork4G([
      ...network4G,
      { modelName: "", country: "", FDD: "", TDD: "" },
    ]);
  };

  const handleRemoveNetwork4G = (index) => {
    const updatedNetwork4G = [...network4G];
    updatedNetwork4G.splice(index, 1);
    setNetwork4G(updatedNetwork4G);
  };
  const handleAddNetwork5G = () => {
    setNetwork5G([
      ...network5G,
      { modelName: "", country: "", NR: "", mmWave: "" },
    ]);
  };

  const handleRemoveNetwork5G = (index) => {
    const updatedNetwork5G = [...network5G];
    updatedNetwork5G.splice(index, 1);
    setNetwork5G(updatedNetwork5G);
  };

  return (
    <fieldset className="mb-8">
      <legend className="block text-xl font-bold mb-4">Network</legend>
      <TextArea label="SIM" register={register("network.sim")} />
      <TextArea label="2G (GSM/EDGE)" register={register("network.2g")} />
      <TextArea label="3G (UMTS)" register={register("network.3g")} />

      {/* 4G Section */}
      <div className="my-10">
        <label className="block text-md font-bold w-32 mr-10">4G Network</label>
        {network4G.map((network, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-center items-center gap-5">
              <label className="block text-sm font-bold w-32 mr-10"></label>
              <input
                placeholder="Model Name"
                {...register(`network.4g[${index}].modelName`)}
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <select
                label="Select Country"
                {...register(`network.4g[${index}].country`)}
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a Country Variant</option>
                {countries.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => handleRemoveNetwork4G(index)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
            <div className="my-4 pl-28 flex justify-center items-center gap-4">
              <textarea
                {...register(`network.4g[${index}].FDD`)}
                placeholder="FDD LTE"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-10"
              />
            </div>
            <div className="mb-4 pl-28 flex justify-center items-center gap-4">
              <textarea
                {...register(`network.4g[${index}].TDD`)}
                placeholder="TDD LTE"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-10"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddNetwork4G}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          + Add 4G Configuration
        </button>
      </div>

      {/* 5G Section */}
      <div className="my-10">
        <label className="block text-md font-bold w-32">5G Network</label>
        {network5G.map((network, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-center items-center gap-5">
              <label className="block text-sm font-bold w-32 mr-10"></label>
              <input
                placeholder="Model Name"
                {...register(`network.5G[${index}].modelName`)}
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <select
                label="Select Country"
                {...register(`network.5G[${index}].country`)}
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a Country Variant</option>
                {countries.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => handleRemoveNetwork5G(index)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
            <div className="my-4 pl-28 flex justify-center items-center gap-4">
              <textarea
                {...register(`network.5G[${index}].NR`)}
                placeholder="5G NR"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-10"
              />
            </div>
            <div className="mb-4 pl-28 flex justify-center items-center gap-4">
              <textarea
                {...register(`network.5G[${index}].mmWave`)}
                placeholder="5G mmWave"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-10"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddNetwork5G}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          + Add 5G Configuration
        </button>
      </div>
    </fieldset>
  );
};

export default NetworksSection;
