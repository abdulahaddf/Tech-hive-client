import { OptionInput, TextArea } from "../Form/Warper";

const NetworksSection = ({ register }) => {
  const countries = [
    "International",
    "USA",
    "UK",
    "India",
    "China",
    "Canada / Japan",
  ];
  return (
    <fieldset className="mb-8">
      <legend className="block text-xl font-bold mb-4">Network</legend>
      <TextArea label="SIM" register={register("network.sim")} />
      <TextArea label="2G (GSM/EDGE)" register={register("network.2g")} />
      <TextArea label="3G (UMTS)" register={register("network.3g")} />
      <div className="my-10 flex items-center">
        {/* <TextArea label="4G" register={register("network.4g")} /> */}

        <label className="block text-sm font-bold mb-2 w-32">4G</label>
        <input
          placeholder="Model Name"
          {...register("network.4g.modelName")}
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <OptionInput
          label="Select Country"
          options={countries}
          register={register("network.4g.country")}
        />
        <div className="mb-4 flex justify-center items-center gap-4">
          <label className="block text-sm font-bold mb-2 w-32">FDD LTE</label>
          <textarea
            {...register("network.4g.FDD")}
            placeholder="FDD LTE"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 flex justify-center items-center gap-4">
          <label className="block text-sm font-bold mb-2 w-32">TDD LTE</label>
          <textarea
            {...register("network.4g.TDD")}
            placeholder="TDD LTE"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <TextArea label="5G" register={register("network.5g")} />
    </fieldset>
  );
};

export default NetworksSection;
