import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DriveLinkConverter from "../../components/Converter/DriveLinkConverter";
import AddVariant from "../../components/Form/AddVarients";
import MobileSelector from "../../components/Form/MobileSelector";
import { RadioButton, TextInput } from "../../components/Form/Warper";

const DataInput = () => {
  const [variants, setVariants] = useState([
    { variant: "", rupee: "", dollar: "", pound: "", euro: "" },
  ]);
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const formData = { ...data, variants };

      console.log(formData);
      fetch("https://tech-server-vho67r390-abdulahaddf.vercel.app/phone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.acknowledged) {
            Swal.fire("Your Toy has been successfully added");
          }
          else{
              Swal.error("Something Went Wrong")
          }
        });
    } catch (error) {
        Swal.error("Something Went Wrong")
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <DriveLinkConverter />
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl mx-auto">
        <MobileSelector
          registerBrand={register("brand")}
          registerModel={register("model")}
        />
        {/* Image */}
        <p>
          *(Upload the photo to Drive then convert the shared link with
          converter)
        </p>
        <TextInput type="text" label="Image URL" register={register("image")} />
        <TextInput
          type="text"
          label="2nd Image"
          register={register("image2")}
        />
        <TextInput
          type="text"
          label="3rd Image"
          register={register("image3")}
        />
        <TextInput
          type="text"
          label="4th Image"
          register={register("image4")}
        />
        {/* Launch */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Launch</legend>
          <TextInput
            type="date"
            label="Announced"
            register={register("launch.announced")}
          />
          {/* <DynamicAttributes sectionName="display" /> */}
          <TextInput
            type="date"
            label="Released"
            register={register("launch.released")}
          />
          <TextInput label="Models" register={register("launch.models")} />
        </fieldset>
        {/* Body */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Body</legend>
          <TextInput label="Colours" register={register("body.colours")} />
          <TextInput
            label="Dimensions"
            register={register("body.dimensions")}
          />
          <TextInput label="Weight" register={register("body.weight")} />
          <TextInput label="Build" register={register("body.build")} />
          <TextInput
            label="Waterproof"
            register={register("body.waterproof")}
          />

          <TextInput
            label="Ruggedness"
            register={register("body.ruggedness")}
          />
        </fieldset>
        {/* Chip */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Chip</legend>
          <TextInput label="OS" register={register("chip.os")} />
          <TextInput label="UI" register={register("chip.ui")} />
          <TextInput label="Chipset" register={register("chip.chipset")} />
          <TextInput label="CPU" register={register("chip.cpu")} />
          <TextInput label="GPU" register={register("chip.gpu")} />
        </fieldset>
        {/* Network */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Network</legend>
          <TextInput label="SIM" register={register("network.sim")} />
          <TextInput label="2G" register={register("network.2g")} />
          <TextInput label="3G" register={register("network.3g")} />
          <TextInput label="4G" register={register("network.4g")} />
          <TextInput label="5G" register={register("network.5g")} />
        </fieldset>
        {/* main camera */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Main Camera</legend>
          <TextInput
            label="Camera Setup"
            register={register("mainCamera.cameraSetup")}
          />
          <TextInput
            label="Main Camera"
            register={register("mainCamera.main")}
          />
          <TextInput
            label="Ultra Wide"
            register={register("mainCamera.ultraWide")}
          />
          <TextInput
            label="Telephoto"
            register={register("mainCamera.telephoto")}
          />
          <TextInput label="Zoom" register={register("mainCamera.zoom")} />
          <TextInput
            label="Autofocus"
            register={register("mainCamera.autofocus")}
          />
          <TextInput label="OIS" register={register("mainCamera.ois")} />
          <TextInput label="Flash" register={register("mainCamera.flash")} />
          <TextInput
            label="Shooting Modes"
            register={register("mainCamera.shootingModes")}
          />
          <TextInput
            label="Camera Features"
            register={register("mainCamera.cameraFeatures")}
          />
          <TextInput
            label="Video Recording"
            register={register("mainCamera.videoRecording")}
          />
          <TextInput
            label="Recording Features"
            register={register("mainCamera.recordingFeatures")}
          />
        </fieldset>
        {/* Selfie Camera */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">
            Selfie Camera
          </legend>
          <TextInput
            label="Camera"
            register={register("selfieCamera.camera")}
          />
          <TextInput
            label="Autofocus"
            register={register("selfieCamera.autofocus")}
          />
          <TextInput label="Flash" register={register("selfieCamera.flash")} />
          <TextInput
            label="Video Recording"
            register={register("selfieCamera.videoRecording")}
          />
        </fieldset>
        {/* Display */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Display</legend>
          <TextInput label="Type" register={register("display.type")} />
          <TextInput label="Size" register={register("display.size")} />
          <TextInput
            label="Resolution"
            register={register("display.resolution")}
          />
          <TextInput
            label="Protection"
            register={register("display.protection")}
          />
          <TextInput label="Others" register={register("display.others")} />
        </fieldset>
        {/* Storage */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Storage</legend>
          <TextInput label="Expandable Memory" register={register("storage.expandableMemory")} />
          {/* <RadioButton
            label="Expandable Memory"
            register={register("storage.expandableMemory")}
          /> */}
          <TextInput
            label="Internal Memory"
            register={register("storage.internalMemory")}
          />
        </fieldset>
        {/* Battery */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Battery</legend>
          <TextInput label="Type" register={register("battery.type")} />
          <TextInput
            label="Wireless Charging"
            register={register("battery.wirelessCharging")}
          />
          <TextInput label="Charging" register={register("battery.charging")} />
        </fieldset>
        {/* Connectivity */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Connectivity</legend>
          <TextInput label="WLAN" register={register("connectivity.wlan")} />
          <TextInput
            label="Bluetooth"
            register={register("connectivity.bluetooth")}
          />
          <TextInput
            label="Location"
            register={register("connectivity.location")}
          />

          <RadioButton
            label="Radio"
            register={register("connectivity.radio")}
          />
          <TextInput label="USB" register={register("connectivity.usb")} />
          <TextInput
            label="Infrared port"
            register={register("connectivity.infrared")}
          />

          <RadioButton label="NFC" register={register("connectivity.nfc")} />
          <RadioButton label="OTG" register={register("connectivity.otg")} />
        </fieldset>
        {/* Sound */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Sound</legend>
          <TextInput
            label="Loudspeaker"
            register={register("sound.loudspeaker")}
          />

          <RadioButton
            label="3.5mm jack"
            register={register("connectivity.jack")}
          />
          <TextInput
            label="Audio Jack"
            register={register("sound.audioJack")}
          />
          <TextInput label="Features" register={register("sound.features")} />
        </fieldset>
        {/* Features */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Features</legend>
          <TextInput
            label="Fingerprint Sensor"
            register={register("features.fingerprintSensor")}
          />
          <TextInput
            label="Other Sensors"
            register={register("features.otherSensors")}
          />
          <TextInput label="Others" register={register("features.others")} />
        </fieldset>
        {/* Tests */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Tests</legend>
          <TextInput label="AnTuTu" register={register("tests.antutu")} />
          <TextInput label="GeekBench" register={register("tests.geekbench")} />
        </fieldset>
        <AddVariant variants={variants} setVariants={setVariants} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataInput;
