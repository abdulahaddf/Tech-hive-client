import React from 'react';
import { TextArea } from '../Form/Warper';

const ChipSection = ({register}) => {
    return (
        <fieldset className="mb-8">
        <legend className="block text-xl font-bold mb-4">Chip</legend>
        <TextArea label="OS" register={register("chip.os")} />
        <TextArea label="UI" register={register("chip.ui")} />
        <TextArea label="Chipset" register={register("chip.chipset")} />
        <TextArea label="CPU" register={register("chip.cpu")} />
        <TextArea label="GPU" register={register("chip.gpu")} />
      </fieldset>
    );
};

export default ChipSection;