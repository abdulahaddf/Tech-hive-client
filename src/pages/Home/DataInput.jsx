import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DriveLinkConverter from "../../components/Converter/DriveLinkConverter";
import MobileSelector from "../../components/Form/MobileSelector";
import { RadioButton, TextArea, TextInput } from "../../components/Form/Warper";
import AddVariant from "../../components/Sections/AddVarients";
import ChipSection from "../../components/Sections/ChipSection";
import NetworksSection from "../../components/Sections/NetworksSection";

const DataInput = () => {
  const editor = useRef(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const [variants, setVariants] = useState([
    { ram: "", storage: "", rupee: "", dollar: "", pound: "", euro: "" },
  ]);
  // console.log(variants);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);

    try {
      const formData = { ...data, variants, summary };

      console.log(formData);
      const response = await fetch(
        "https://tech-server-sooty.vercel.app/addPhone",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.acknowledged) {
        setLoading(false);
        Swal.fire("Phone has been successfully added");
        reset();
        setSummary("");
        setVariants([]);
      } else {
        setLoading(false);
        Swal.fire("Something Went Wrong");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      Swal.fire("Something Went Wrong");
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
          <TextInput
            type="text"
            label="Image URL"
            register={register("image")}
          />
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
        </>
        {/* Launch */}
        <fieldset className="mb-8">
          <legend className="block text-2xl font-bold mb-4">Launch</legend>
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
          <TextArea label="Models" register={register("launch.models")} />
        </fieldset>
        {/* Body */}
        <fieldset className="mb-8">
          <legend className="block text-2xl font-bold mb-4">Body</legend>
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
          <legend className="block text-2xl font-bold mb-4">Main Camera</legend>
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
          <legend className="block text-2xl font-bold mb-4">
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
          <legend className="block text-2xl font-bold mb-4">Display</legend>
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
          <legend className="block text-2xl font-bold mb-4">Storage</legend>
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
          <legend className="block text-2xl font-bold mb-4">Battery</legend>
          <TextArea label="Type" register={register("battery.type")} />
          <TextArea
            label="Wireless Charging"
            register={register("battery.wirelessCharging")}
          />
          <TextArea label="Charging" register={register("battery.charging")} />
        </fieldset>
        {/* Connectivity */}
        <fieldset className="mb-8">
          <legend className="block text-2xl font-bold mb-4">
            Connectivity
          </legend>
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
          <legend className="block text-2xl font-bold mb-4">Sound</legend>
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
          <legend className="block text-2xl font-bold mb-4">Features</legend>
          <TextArea
            label="Fingerprint Sensor"
            register={register("features.fingerprintSensor")}
          />
          <TextArea
            label="Other Sensors"
            register={register("features.otherSensors")}
          />
          <TextArea label="Others" register={register("features.others")} />
          <TextArea label="In The Box" register={register("inBox")} />
        </fieldset>
        {/* Tests */}
        <fieldset className="mb-8">
          <legend className="block text-2xl font-bold mb-4">Tests</legend>
          <TextArea label="AnTuTu" register={register("tests.antutu")} />
          <TextArea label="GeekBench" register={register("tests.geekbench")} />
        </fieldset>
        <fieldset className="mb-8">
          <legend className="block text-2xl font-bold mb-4">
            Price & Variants
          </legend>
          <AddVariant variants={variants} setVariants={setVariants} />
        </fieldset>
        <fieldset className="mb-36">
          <legend className="block text-2xl font-bold mb-4">
            Summary & Review
          </legend>
          <JoditEditor
            ref={editor}
            value={summary}
            // config={config}
            tabIndex={1} // tabIndex of textarea
            onChange={(newContent) => setSummary(newContent)}
            // onBlur={newContent => {}}
          />
        </fieldset>
        <button
          type="submit"
          className="py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg max-w-md mx-auto"
        >
          {loading ? (
            <>
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2 animate-spin"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
              </svg>
              Submitting{" "}
            </>
          ) : (
            <>Submit Info</>
          )}
        </button>
        ;
      </form>
    </div>
  );
};

export default DataInput;
