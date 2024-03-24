/* eslint-disable react/prop-types */

const TextInput = ({ label, register, ...rest }) => {
  return (
    <div className="mb-4 flex justify-center items-center gap-4">
      <label className="block text-sm font-bold mb-2 w-32">{label}</label>
      <input
        placeholder={label}
        {...register}
        {...rest}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

const TextArea = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <textarea
        {...rest}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

const SelectInput = ({ label, options, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <select
        {...rest}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
const OptionInput = ({ label, options, register }) => {
  return (
    <div className="mb-4 flex justify-center items-center gap-4">
      <label className="block text-sm font-bold mb-2 w-32">{label}</label>
      <select
        {...register}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const RadioButton = ({ label, register }) => {
  return (
    <div className="mb-4 flex  items-center gap-4">
      <label className="block text-sm font-bold mb-2 w-32">{label}</label>
      <div className="flex items-center">
        <input
          type="radio"
          id={`${name}-yes`}
          value="yes"
          {...register}
          className="mr-2"
        />
        <label htmlFor={`${name}-yes`} className="mr-4">
          Yes
        </label>
        <input
          type="radio"
          id={`${name}-no`}
          value="no"
          {...register}
          className="mr-2"
        />
        <label htmlFor={`${name}-no`}>No</label>
      </div>
    </div>
  );
};

export { OptionInput, RadioButton, SelectInput, TextArea, TextInput };
