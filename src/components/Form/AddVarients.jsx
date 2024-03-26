/* eslint-disable react/prop-types */

const RAM_OPTIONS = ["4GB", "6GB", "8GB", "12GB", "16GB"];
const STORAGE_OPTIONS = ["64GB", "128GB", "256GB", "512GB", "1TB"];

const generateMobileVariants = () => {
  const mobileVariants = [];
  for (const ram of RAM_OPTIONS) {
    for (const storage of STORAGE_OPTIONS) {
      mobileVariants.push(`${ram} RAM, ${storage} Storage`);
    }
  }
  return mobileVariants;
};
const mobileVariants = generateMobileVariants();

function AddVariant({ variants, setVariants }) {
  const handleVariantChange = (value, index, field) => {
    const updatedVariants = [...variants];
    updatedVariants[index][field] = value;
    setVariants(updatedVariants);
  };

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      { variant: "", rupee: "", dollar: "", pound: "", euro: "" },
    ]);
  };

  const handleRemoveVariant = (index) => {
    const updatedVariants = [...variants];
    updatedVariants.splice(index, 1);
    setVariants(updatedVariants);
  };

  return (
    <div className="max-w-md mx-auto my-10 mb-52">
      {variants.map((variant, index) => (
        <div key={index} className="mb-6">
          <label
            htmlFor={`variant${index}`}
            className=" text-sm font-medium text-gray-700 w-32"
          >
            Select Variant:
          </label>
          <select
            id={`variant${index}`}
            name={`variants[${index}].variant`}
            className="text-input"
            value={variant.variant}
            onChange={(e) =>
              handleVariantChange(e.target.value, index, "variant")
            }
          >
            <option value="">Select Variant</option>
            {mobileVariants.map((variantOption, idx) => (
              <option key={idx} value={variantOption}>
                {variantOption}
              </option>
            ))}
          </select>

          <div className="mt-4 flex items-center gap-5">
            <label
              htmlFor={`rupee${index}`}
              className="block text-sm font-medium text-gray-700 w-36"
            >
              Price in Rupee:
            </label>
            <input
              id={`rupee${index}`}
              name={`variants[${index}].rupee`}
              type="number"
              className="text-input"
              value={variant.rupee}
              onChange={(e) =>
                handleVariantChange(e.target.value, index, "rupee")
              }
            />
          </div>

          <div className="mt-4 flex items-center gap-5">
            <label
              htmlFor={`dollar${index}`}
              className="block text-sm font-medium text-gray-700 w-36"
            >
              Price in Dollar:
            </label>
            <input
              id={`dollar${index}`}
              name={`variants[${index}].dollar`}
              type="number"
              className="text-input"
              value={variant.dollar}
              onChange={(e) =>
                handleVariantChange(e.target.value, index, "dollar")
              }
            />
          </div>

          <div className="mt-4 flex items-center gap-5">
            <label
              htmlFor={`pound${index}`}
              className="block text-sm font-medium text-gray-700 w-36"
            >
              Price in Pound:
            </label>
            <input
              id={`pound${index}`}
              name={`variants[${index}].pound`}
              type="number"
              className="text-input"
              value={variant.pound}
              onChange={(e) =>
                handleVariantChange(e.target.value, index, "pound")
              }
            />
          </div>

          <div className="mt-4 flex items-center gap-5">
            <label
              htmlFor={`euro${index}`}
              className="block text-sm font-medium text-gray-700 w-36"
            >
              Price in Euro:
            </label>
            <input
              id={`euro${index}`}
              name={`variants[${index}].euro`}
              type="number"
              className="text-input"
              value={variant.euro}
              onChange={(e) =>
                handleVariantChange(e.target.value, index, "euro")
              }
            />
          </div>

          <button
            type="button"
            onClick={() => handleRemoveVariant(index)}
            className="mt-4 flex items-center gap-5 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            x
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddVariant}
        className="mt-4 flex items-center gap-5 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-5"
      >
        + Add variant
      </button>

      {/* <button
        type="submit"
        className="mt-4 flex items-center gap-5 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Submit
      </button> */}
    </div>
  );
}

export default AddVariant;
