import React from 'react';
import { useFieldArray } from 'react-hook-form';

const DynamicAttributes = ({ control, sectionName }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${sectionName}.attributes`, // Use the provided sectionName to construct the field name
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center mb-2">
          <input
            type="text"
            {...field}
            name={`${sectionName}.attributes[${index}].value`} // Use the provided sectionName to construct the input name
            placeholder="Value"
            className="border rounded py-1 px-2 mr-2"
          />
          <input
            type="text"
            name={`${sectionName}.attributes[${index}].attribute`} // Use the provided sectionName to construct the input name
            placeholder="Attribute"
            className="border rounded py-1 px-2 mr-2"
          />
          <button onClick={() => remove(index)} className="bg-red-500 text-white px-2 py-1 rounded">
            -
          </button>
        </div>
      ))}
      <button onClick={() => append({ value: '', attribute: '' })} className="bg-blue-500 text-white px-2 py-1 rounded">
        +
      </button>
    </div>
  );
};

export default DynamicAttributes;
