import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import brainTumor from '../../src/assets/brainTumor.png';
import Navbar2 from '../components/Navbar2';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
    },
    header: {
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    resultText: {
      fontSize: 16,
      marginBottom: 5,
    },
  });
  
  function ReportDocument() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.title}>Alzheimer's Disease Detection Report</Text>
          </View>
          <View>
            <Text style={styles.resultText}>Detection Status: Alzheimer's Disease Detected</Text>
            <Text style={styles.resultText}>Alzheimer's Type: Mild demented</Text>
            <Text style={styles.resultText}>Accuracy: 99.9%</Text>
          </View>
        </Page>
      </Document>
    );
  }

  function CheckBrainTumor() {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [generateButtonClicked, setGenerateButtonClicked] = useState(false);
    const [viewReportModalOpen, setViewReportModalOpen] = useState(false);
  
    const handleUploadImage = () => {
      fileInputRef?.current.click();
    };
  
    const handleRemoveImage = () => {
      setSelectedImage(null);
      setShowResults(false); 
      setGenerateButtonClicked(false);
    };
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      }
    };
  
    const handleDetectClick = () => {
      // Perform detection logic here
      setShowResults(true);
    };
  
    const handleGenerateClick = () => {
      // Perform generation logic here
      // This is separate from detection logic
      setGenerateButtonClicked(true);
    };
  
    const handleViewReportClick = () => {
      setViewReportModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setViewReportModalOpen(false);
    };
  
    return (
      <>
        <Navbar2 />
        <div className="flex flex-col items-center py-10 h-screen bg-white relative">
          {/* Title */}
          <h1 className="font-poppins font-bold text-3xl text-center mb-8">Check Brain Tumor Disease</h1>
          
          {/* Upload Button or Selected Image */}
          {selectedImage ? (
            <div className="relative mb-8">
              <img src={selectedImage} className="w-40 h-40 mb-4" alt="Uploaded" />
              <button className="absolute top-0 right-0 p-1 bg-white rounded-full" onClick={handleRemoveImage}>
                <FaTimes className="text-red-500" />
              </button>
            </div>
          ) : (
            <button className="mb-8 bg-purple-700 text-white font-poppins font-bold text-lg py-3 px-6 rounded-lg hover:bg-purple-800 transition duration-300" onClick={handleUploadImage}>
              Upload an Image
            </button>
          )}
    
          {/* Hidden input for file upload */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
    
          {/* Detect  Button */}
          {!showResults && selectedImage && (
            <button className="mb-8 lg:absolute lg:bottom-28 lg:right-28 bg-purple-700 text-white font-poppins font-bold text-lg py-3 px-6 rounded-lg hover:bg-purple-800 transition duration-300" onClick={handleDetectClick}>
              Detect
            </button>
          )}
    
          {/* Generate  */}
          {!generateButtonClicked && showResults && (
            <button className="mb-8 lg:absolute lg:bottom-28 lg:right-28 bg-purple-700 text-white font-poppins font-bold text-lg py-3 px-6 rounded-lg hover:bg-purple-800 transition duration-300" onClick={handleGenerateClick}>
              Generate Report
            </button>
          )}
    
          {generateButtonClicked && (
            <button className="mb-8 lg:absolute lg:bottom-28 lg:right-28 bg-purple-700 text-white font-poppins font-bold text-lg py-3 px-6 rounded-lg hover:bg-purple-800 transition duration-300" onClick={handleViewReportClick}>
              View Report
            </button>
          )}
    
          {/* Results */}
          {showResults && (
            <div className="items-center mb-8">
              <div className="font-poppins font-bold text-lg mb-2">Brain Tumor Result</div>
              <div className="font-poppins mb-2">Detection Status: <span className="font-bold">Brain Tumor Detected</span></div>
              <div className="font-poppins mb-2">Tumor Type: <span className="font-bold">Mild demented</span></div>
              <div className="font-poppins mb-2">Accuracy: <span className="font-bold">99.9%</span></div>
            </div>
          )}
    
          {/* Modal for View Report */}
          {viewReportModalOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="relative bg-white rounded-lg overflow-hidden max-w-lg">
                <div className="flex justify-between items-center px-6 py-4 bg-purple-600 text-white">
                  <h3 className="text-lg font-semibold">View Report</h3>
                  <button  onClick={handleCloseModal}>
                    <FaTimes />
                  </button>
                </div>
                <div className="px-6 py-4">
                  <PDFViewer width="100%" height="400px">
                    <ReportDocument />
                  </PDFViewer>
                </div>
              </div>
            </div>
          )}
          
          {/* Bottom Left Corner */}
          <div className="absolute bottom-0 left-0 p-4">
            <img src={brainTumor} className="h-80 w-80" alt="Brain Tumor" />
          </div>
        </div>
      </>
    );
  }
  
export default CheckBrainTumor;
