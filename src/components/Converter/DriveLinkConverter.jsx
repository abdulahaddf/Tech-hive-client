import { useState } from "react";

const DriveLinkConverter = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");

  const convertUrl = () => {
    try {
      // Extract the file ID from the input URL
      const match = inputUrl.match(/\/d\/([^/]+)/);
      if (match && match[1]) {
        const fileId = match[1];
        // Generate the new URL format
        const newUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
        setConvertedUrl(newUrl);
        setInputUrl("");
      } else {
        // Handle invalid URL format
        setConvertedUrl("Invalid Google Drive URL");
        setInputUrl("");
      }
    } catch (error) {
      console.error("Error converting URL:", error);
      setConvertedUrl("Error converting URL");
    }
  };

  return (
    <div className="my-2 ">
      <button
        className="border-2 border-black font-semibold px-2 rounded-md flex justify-end hover:bg-black hover:text-white  "
        onClick={() => document.getElementById("mym").showModal()}
      >
        Drive Converter
      </button>

      <dialog id="mym" className="modal p-10 rounded-md shadow-xl">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h2 className="text-md font-semibold mb-4">
            Google Drive URL Converter
          </h2>
          <p className="mb-5 text-sm">
            Upload photo to drive and convert the link from here for the photo
            URL option
          </p>

          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Google Drive Public URL"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <button
            className="border-2 border-black font-semibold px-2 rounded-md flex justify-end hover:bg-black hover:text-white mt-2 mx-auto"
            onClick={convertUrl}
          >
            Convert
          </button>
          {convertedUrl && (
            <div className="my-2 font-normal text-sm">
              <p>Converted URL:</p>
              <p>{convertedUrl}</p>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default DriveLinkConverter;
