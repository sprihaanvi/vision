import React, { useState } from "react";
import { TbLoader } from "react-icons/tb"; // Import the loader icon
import './styles/apt.css';

const Assessment = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [accuracy, setAccuracy] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload an image file");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      setLoading(true); // Start loading
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log("API Response:", data); // Debugging line
  
      if (data.prediction && data.accuracy !== undefined) {
        setPrediction(data.prediction);
        setAccuracy(data.accuracy);
      } else {
        alert("Unexpected response format. Please check the server.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error with the prediction. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column" }}>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Predicting...</h1>
        <TbLoader style={{ fontSize: "4rem", animation: "spin 2s linear infinite" }} />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col flex">
          <div className="flex justify-end items-center h-screen ml-72 col1">
            <div>
              <h1 className="text-3xl font-bold mb-8 text-center">
                Take your assessment with us today!
              </h1>
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Full Name
                    </label>
                    <input
                      className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="file-upload"
                    >
                      Upload Retinal Image of your Eye to test
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="file-upload"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                  >
                    Predict
                  </button>
                </div>
              </form>

              {prediction && (
                <div className="mt-8 text-center">
                  <h2 className="text-xl font-bold">Prediction: {prediction}</h2>
                  <p className="text-lg">Accuracy: {accuracy}%</p>
                </div>
              )}
            </div>
          </div>
          <div className="col flex mt-16">
            <img style={{ height: '600px' }} src="./assess.png" alt="res" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
