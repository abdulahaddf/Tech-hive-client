import React from "react";
import { useForm } from "react-hook-form";
import DynamicAttributes from "../../components/Form/DynamicFields";

function MobileVariantForm() {
  const { control } = useForm();

  return (
    <>
      <DynamicAttributes control={control} sectionName="DATA" />
    </>
  );
}

export default MobileVariantForm;
