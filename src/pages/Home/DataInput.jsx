import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DriveLinkConverter from "../../components/Converter/DriveLinkConverter";
import MobileSelector from "../../components/Form/MobileSelector";
import { RadioButton, TextArea } from "../../components/Form/Warper";
import AddVariant from "../../components/Sections/AddVarients";
import ChipSection from "../../components/Sections/ChipSection";
import NetworksSection from "../../components/Sections/NetworksSection";

const DataInput = () => {
  const [variants, setVariants] = useState([
    { variant: "", rupee: "", dollar: "", pound: "", euro: "" },
  ]);
  console.log(variants);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const formData = { ...data, variants };

      console.log(formData);
      fetch("https://tech-server-vho67r390-abdulahaddf.vercel.ap/phonex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.acknowledged) {
            Swal.fire("Phone has been successfully added");
            reset();
          } else {
            Swal.error("Something Went Wrong");
          }
        });
    } catch (error) {
      Swal.error("Something Went Wrong");
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
        <>
          <p>
            *(Upload the photo to Drive then convert the shared link with
            converter & past the converted link here)
          </p>
          <TextArea
            type="text"
            label="Image URL"
            register={register("image")}
          />
          <TextArea
            type="text"
            label="2nd Image"
            register={register("image2")}
          />
          <TextArea
            type="text"
            label="3rd Image"
            register={register("image3")}
          />
          <TextArea
            type="text"
            label="4th Image"
            register={register("image4")}
          />
        </>
        {/* Launch */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Launch</legend>
          <TextArea
            type="date"
            label="Announced"
            register={register("launch.announced")}
          />
          {/* <DynamicAttributes sectionName="display" /> */}
          <TextArea
            type="date"
            label="Released"
            register={register("launch.released")}
          />
          <TextArea label="Models" register={register("launch.models")} />
        </fieldset>
        {/* Body */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Body</legend>
          <TextArea label="Colours" register={register("body.colours")} />
          <TextArea label="Dimensions" register={register("body.dimensions")} />
          <TextArea label="Weight" register={register("body.weight")} />
          <TextArea label="Build" register={register("body.build")} />
          <TextArea label="Waterproof" register={register("body.waterproof")} />

          <TextArea label="Ruggedness" register={register("body.ruggedness")} />
        </fieldset>
        {/* Chip */}
        <ChipSection register={register} />
        {/* Network */}
        <NetworksSection register={register} />
        {/* main camera */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Main Camera</legend>
          <TextArea
            label="Camera Setup"
            register={register("mainCamera.cameraSetup")}
          />
          <TextArea
            label="Main Camera"
            register={register("mainCamera.main")}
          />
          <TextArea
            label="Ultra Wide"
            register={register("mainCamera.ultraWide")}
          />
          <TextArea
            label="Telephoto"
            register={register("mainCamera.telephoto")}
          />
          <TextArea label="Zoom" register={register("mainCamera.zoom")} />
          <TextArea
            label="Autofocus"
            register={register("mainCamera.autofocus")}
          />
          <TextArea label="OIS" register={register("mainCamera.ois")} />
          <TextArea label="Flash" register={register("mainCamera.flash")} />
          <TextArea
            label="Shooting Modes"
            register={register("mainCamera.shootingModes")}
          />
          <TextArea
            label="Camera Features"
            register={register("mainCamera.cameraFeatures")}
          />
          <TextArea
            label="Video Recording"
            register={register("mainCamera.videoRecording")}
          />
          <TextArea
            label="Recording Features"
            register={register("mainCamera.recordingFeatures")}
          />
        </fieldset>
        {/* Selfie Camera */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">
            Selfie Camera
          </legend>
          <TextArea label="Camera" register={register("selfieCamera.camera")} />
          <TextArea
            label="Autofocus"
            register={register("selfieCamera.autofocus")}
          />
          <TextArea label="Flash" register={register("selfieCamera.flash")} />
          <TextArea
            label="Video Recording"
            register={register("selfieCamera.videoRecording")}
          />
        </fieldset>
        {/* Display */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Display</legend>
          <TextArea label="Type" register={register("display.type")} />
          <TextArea label="Size" register={register("display.size")} />
          <TextArea
            label="Resolution"
            register={register("display.resolution")}
          />
          <TextArea
            label="Protection"
            register={register("display.protection")}
          />
          <TextArea label="Others" register={register("display.others")} />
        </fieldset>
        {/* Storage */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Storage</legend>
          <TextArea
            label="Expandable Memory"
            register={register("storage.expandableMemory")}
          />
          {/* <RadioButton
            label="Expandable Memory"
            register={register("storage.expandableMemory")}
          /> */}
          <TextArea
            label="Internal Memory"
            register={register("storage.internalMemory")}
          />
        </fieldset>
        {/* Battery */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Battery</legend>
          <TextArea label="Type" register={register("battery.type")} />
          <TextArea
            label="Wireless Charging"
            register={register("battery.wirelessCharging")}
          />
          <TextArea label="Charging" register={register("battery.charging")} />
        </fieldset>
        {/* Connectivity */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Connectivity</legend>
          <TextArea label="WLAN" register={register("connectivity.wlan")} />
          <TextArea
            label="Bluetooth"
            register={register("connectivity.bluetooth")}
          />
          <TextArea
            label="Location"
            register={register("connectivity.location")}
          />

          <RadioButton
            label="Radio"
            register={register("connectivity.radio")}
          />
          <TextArea label="USB" register={register("connectivity.usb")} />
          <TextArea
            label="Infrared port"
            register={register("connectivity.infrared")}
          />

          <RadioButton label="NFC" register={register("connectivity.nfc")} />
          <RadioButton label="OTG" register={register("connectivity.otg")} />
        </fieldset>
        {/* Sound */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Sound</legend>
          <TextArea
            label="Loudspeaker"
            register={register("sound.loudspeaker")}
          />

          <RadioButton
            label="3.5mm jack"
            register={register("connectivity.jack")}
          />
          <TextArea label="Audio Jack" register={register("sound.audioJack")} />
          <TextArea label="Features" register={register("sound.features")} />
        </fieldset>
        {/* Features */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Features</legend>
          <TextArea
            label="Fingerprint Sensor"
            register={register("features.fingerprintSensor")}
          />
          <TextArea
            label="Other Sensors"
            register={register("features.otherSensors")}
          />
          <TextArea label="Others" register={register("features.others")} />
        </fieldset>
        {/* Tests */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Tests</legend>
          <TextArea label="AnTuTu" register={register("tests.antutu")} />
          <TextArea label="GeekBench" register={register("tests.geekbench")} />
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
