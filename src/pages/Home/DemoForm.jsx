import React from 'react';
import { TextInput } from '../../components/Form/Warper';
import { useForm } from 'react-hook-form';

const DemoForm = () => {
    const {handleSubmit ,register} = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl mx-auto mb-96 ">
            <TextInput
        label="Image"
        register={register("image")} 
        placeholder="Image URL"
      />
        <button type='submit'>sdf</button>
        </form> 
    );
};

export default DemoForm;