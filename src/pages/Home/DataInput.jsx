import { useForm } from "react-hook-form";
import DynamicAttributes from "../../components/Form/DynamicFields";
import { TextInput } from "../../components/Form/Warper";

const DataInput = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl mx-auto">
        {/* Image */}
        <TextInput
          type="text"
          label="Image"
          register={register("image")}
          placeholder="Image URL"
        />
        {/* Launch */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Launch</legend>
          <TextInput
            type="date"
            label="Announced"
            register={register("launch.announced")}
            placeholder="Announced"
          />
          {/* <DynamicAttributes sectionName="display" /> */}
          <TextInput
            type="date"
            label="Released"
            register={register("launch.released")}
            placeholder="Released"
          />
          <TextInput
            label="Models"
            register={register("launch.models")}
            placeholder="Models"
          />
        </fieldset>

        {/* Body */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Body</legend>
          <TextInput
            label="Colours"
            register={register("body.colours")}
            placeholder="Colours"
          />
          <TextInput
            label="Dimensions"
            register={register("body.dimensions")}
            placeholder="Dimensions"
          />
          <TextInput
            label="Weight"
            register={register("body.weight")}
            placeholder="Weight"
          />
          <TextInput
            label="Build"
            register={register("body.build")}
            placeholder="Build"
          />
          <TextInput
            label="Waterproof"
            register={register("body.waterproof")}
            placeholder="Waterproof"
          />
          <TextInput
            label="Ruggedness"
            register={register("body.ruggedness")}
            placeholder="Ruggedness"
          />
        </fieldset>

        {/* Chip */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Chip</legend>
          <TextInput label="OS" register={register("chip.os")} placeholder="OS" />
          <TextInput label="UI" register={register("chip.ui")} placeholder="UI" />
          <TextInput
            label="Chipset"
            register={register("chip.chipset")}
            placeholder="Chipset"
          />
          <TextInput label="CPU" register={register("chip.cpu")} placeholder="CPU" />
          <TextInput label="GPU" register={register("chip.gpu")} placeholder="GPU" />
        </fieldset>

        {/* Network */}

        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Network</legend>
          <TextInput
            label="SIM"
            register={register("network.sim")}
            placeholder="SIM"
          />
          <TextInput label="2G" register={register("network.2g")} placeholder="2G" />
          <TextInput label="3G" register={register("network.3g")} placeholder="3G" />
          <TextInput label="4G" register={register("network.4g")} placeholder="4G" />
          <TextInput label="5G" register={register("network.5g")} placeholder="5G" />
        </fieldset>

        {/* main camera */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Main Camera</legend>
          <TextInput
            label="Camera Setup"
            register={register("mainCamera.cameraSetup")}
            placeholder="Camera Setup"
          />
          <TextInput
            label="Main Camera"
            register={register("mainCamera.main")}
            placeholder="Main Camera"
          />
          <TextInput
            label="Ultra Wide"
            register={register("mainCamera.ultraWide")}
            placeholder="Ultra Wide"
          />
          <TextInput
            label="Telephoto"
            register={register("mainCamera.telephoto")}
            placeholder="Telephoto"
          />
          <TextInput
            label="Zoom"
            register={register("mainCamera.zoom")}
            placeholder="Zoom"
          />
          <TextInput
            label="Autofocus"
            register={register("mainCamera.autofocus")}
            placeholder="Autofocus"
          />
          <TextInput
            label="OIS"
            register={register("mainCamera.ois")}
            placeholder="OIS"
          />
          <TextInput
            label="Flash"
            register={register("mainCamera.flash")}
            placeholder="Flash"
          />
          <TextInput
            label="Shooting Modes"
            register={register("mainCamera.shootingModes")}
            placeholder="Shooting Modes"
          />
          <TextInput
            label="Camera Features"
            register={register("mainCamera.cameraFeatures")}
            placeholder="Camera Features"
          />
          <TextInput
            label="Video Recording"
            register={register("mainCamera.videoRecording")}
            placeholder="Video Recording"
          />
          <TextInput
            label="Recording Features"
            register={register("mainCamera.recordingFeatures")}
            placeholder="Recording Features"
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
            placeholder="Camera"
          />
          <TextInput
            label="Autofocus"
            register={register("selfieCamera.autofocus")}
            placeholder="Autofocus"
          />
          <TextInput
            label="Flash"
            register={register("selfieCamera.flash")}
            placeholder="Flash"
          />
          <TextInput
            label="Video Recording"
            register={register("selfieCamera.videoRecording")}
            placeholder="Video Recording"
          />
        </fieldset>
        {/* Display */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Display</legend>
          <TextInput
            label="Type"
            register={register("display.type")}
            placeholder="Type"
          />
          <TextInput
            label="Size"
            register={register("display.size")}
            placeholder="Size"
          />
          <TextInput
            label="Resolution"
            register={register("display.resolution")}
            placeholder="Resolution"
          />
          <TextInput
            label="Protection"
            register={register("display.protection")}
            placeholder="Protection"
          />
          <TextInput
            label="Others"
            register={register("display.others")}
            placeholder="Others"
          />
        </fieldset>
        {/* Storage */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Storage</legend>
          <TextInput
            label="Expandable Memory"
            register={register("storage.expandableMemory")}
            placeholder="Expandable Memory"
          />
          <TextInput
            label="Internal Memory"
            register={register("storage.internalMemory")}
            placeholder="Internal Memory"
          />
        </fieldset>
        {/* Battery */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Battery</legend>
          <TextInput
            label="Type"
            register={register("battery.type")}
            placeholder="Type"
          />
          <TextInput
            label="Wireless Charging"
            register={register("battery.wirelessCharging")}
            placeholder="Wireless Charging"
          />
          <TextInput
            label="Charging"
            register={register("battery.charging")}
            placeholder="Charging"
          />
        </fieldset>
        {/* Connectivity */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Connectivity</legend>
          <TextInput
            label="WLAN"
            register={register("connectivity.wlan")}
            placeholder="WLAN"
          />
          <TextInput
            label="Bluetooth"
            register={register("connectivity.bluetooth")}
            placeholder="Bluetooth"
          />
          <TextInput
            label="Location"
            register={register("connectivity.location")}
            placeholder="Location"
          />
          <TextInput
            label="Radio"
            register={register("connectivity.radio")}
            placeholder="Radio"
          />
          <TextInput
            label="USB"
            register={register("connectivity.usb")}
            placeholder="USB"
          />
          <TextInput
            label="Infrared port"
            register={register("connectivity.infrared")}
            placeholder="Infrared port"
          />
          <TextInput
            label="NFC"
            register={register("connectivity.nfc")}
            placeholder="NFC"
          />
          <TextInput
            label="OTG"
            register={register("connectivity.otg")}
            placeholder="OTG"
          />
        </fieldset>
        {/* Sound */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Sound</legend>
          <TextInput
            label="Loudspeaker"
            register={register("sound.loudspeaker")}
            placeholder="Loudspeaker"
          />
          <TextInput
            label="3.5mm jack"
            register={register("sound.jack")}
            placeholder="3.5mm jack"
          />
          <TextInput
            label="Audio Jack"
            register={register("sound.audioJack")}
            placeholder="Audio Jack"
          />
          <TextInput
            label="Features"
            register={register("sound.features")}
            placeholder="Features"
          />
        </fieldset>
        {/* Features */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Features</legend>
          <TextInput
            label="Fingerprint Sensor"
            register={register("features.fingerprintSensor")}
            placeholder="Fingerprint Sensor"
          />
          <TextInput
            label="Other Sensors"
            register={register("features.otherSensors")}
            placeholder="Other Sensors"
          />
          <TextInput
            label="Others"
            register={register("features.others")}
            placeholder="Others"
          />
        </fieldset>
        {/* Tests */}
        <fieldset className="mb-8">
          <legend className="block text-xl font-bold mb-4">Tests</legend>
          <TextInput
            label="AnTuTu"
            register={register("tests.antutu")}
            placeholder="AnTuTu"
          />
          <TextInput
            label="GeekBench"
            register={register("tests.geekbench")}
            placeholder="GeekBench"
          />
        </fieldset>

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
