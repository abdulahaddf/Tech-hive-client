/* eslint-disable react/prop-types */

const AddVariant = ({ variants, setVariants }) => {
  const RAM_OPTIONS = ["1GB", "2GB", "3GB", "4GB", "6GB", "8GB", "12GB", "16GB"];
const STORAGE_OPTIONS = ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"];
  const handleVariantChange = (value, index, field) => {
    const updatedVariants = [...variants];
    updatedVariants[index][field] = value;
    setVariants(updatedVariants);
  };

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      { ram: "", storage: "", rupee: "", dollar: "", pound: "", euro: "" },
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
            htmlFor={`ram${index}`}
            className="text-sm font-medium text-gray-700 w-32"
          >
            Select RAM:
          </label>
          <select
            id={`ram${index}`}
            name={`variants[${index}].ram`}
            className="text-input"
            value={variant.ram}
            onChange={(e) =>
              handleVariantChange(e.target.value, index, "ram")
            }
          >
            <option value="">Select RAM</option>
            {RAM_OPTIONS.map((ramOption, idx) => (
              <option key={idx} value={ramOption}>
                {ramOption}
              </option>
            ))}
          </select>

          <label
            htmlFor={`storage${index}`}
            className="text-sm font-medium text-gray-700 w-32"
          >
            Select Storage:
          </label>
          <select
            id={`storage${index}`}
            name={`variants[${index}].storage`}
            className="text-input"
            value={variant.storage}
            onChange={(e) =>
              handleVariantChange(e.target.value, index, "storage")
            }
          >
            <option value="">Select Storage</option>
            {STORAGE_OPTIONS.map((storageOption, idx) => (
              <option key={idx} value={storageOption}>
                {storageOption}
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
    </div>
  );
};

export default AddVariant;
