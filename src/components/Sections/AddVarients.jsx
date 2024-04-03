/* eslint-disable react/prop-types */

const AddVariant = ({ variants, setVariants }) => {
  const RAM_OPTIONS = [
    "512MB",
    "1GB",
    "2GB",
    "3GB",
    "4GB",
    "6GB",
    "8GB",
    "12GB",
    "16GB",
    "20GB",
  ];
  const STORAGE_OPTIONS = [
    "8GB",
    "16GB",
    "32GB",
    "64GB",
    "128GB",
    "256GB",
    "512GB",
    "1TB",
  ];
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
    <div className="max-w-4xl mx-auto my-10 mb-52">
      {variants.map((variant, index) => (
        <div key={index} className="mb-6">
          <div className="flex gap-5 my-5">
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
            <button
              type="button"
              onClick={() => handleRemoveVariant(index)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>

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
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddVariant}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        + Add variant
      </button>
    </div>
  );
};

export default AddVariant;
