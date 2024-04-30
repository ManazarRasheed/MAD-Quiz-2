import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  Platform,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from "react-native";

// Import custom styles
import { faceDetection } from "./style";

// TensorFlow.js imports
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import * as ImagePicker from "expo-image-picker";
import * as jpeg from "jpeg-js";
import * as Blazeface from "@tensorflow-models/blazeface";

const FaceDetector = () => {
  // State variables
  const [detectedFaces, setDetectedFaces] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect to request permissions and initialize TensorFlow.js on component mount
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        // Request camera roll permissions on mobile
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
      await tf.ready(); // Initialize TensorFlow.js
    })();
  }, []);

  // Function to select an image from the gallery
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        quality: 1,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };

  // Function to detect faces in the selected image
  const detectFaces = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }
    try {
      setIsLoading(true); // Set loading state to true
      const response = await fetch(selectedImage); // Fetch the selected image
      const rawImageData = await response.arrayBuffer(); // Convert image data to raw buffer
      const imageData = jpeg.decode(rawImageData, true); // Decode JPEG image
      const blazeFace = await Blazeface.load(); // Load BlazeFace model
      const faces = await blazeFace.estimateFaces(imageData, false); // Estimate faces in the image
      setDetectedFaces(faces); // Update detected faces state with the results
    } catch (error) {
      console.error("Error detecting faces:", error);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  // Render function
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 20,
        }}
      >
        {selectedImage && ( // Render selected image if available
          <Image
            source={{ uri: selectedImage }}
            style={{ width: 300, height: 300, marginBottom: 20 }}
          />
        )}
        {isLoading && <ActivityIndicator size={40} />} {/* Render loading indicator if isLoading is true */}
        {detectedFaces.length > 0 && ( // Render face detection results if faces are detected
          <View>
            <Text style={faceDetection.result}>Face Detection Result</Text>
            {detectedFaces.map((face, index) => (
              <View key={index} style={{ marginTop: 10 }}>
                <Text style={{ color: "green", fontSize: 20, fontWeight: 600 }}>
                  Face {index + 1}
                </Text>
                <Text style={faceDetection.infoText}>
                  <Text style={{ color: "red" }}>Top: </Text>{"     "}
                  {face.topLeft[0]}
                </Text>
                <Text style={faceDetection.infoText}>
                  <Text style={{ color: "red" }}>Left: </Text>{"     "}
                  {face.topLeft[1]}
                </Text>
                <Text style={faceDetection.infoText}>
                  <Text style={{ color: "red" }}>Width: </Text>{"  "}
                  {face.bottomRight[0] - face.topLeft[0]}
                </Text>
                <Text style={faceDetection.infoText}>
                  <Text style={{ color: "red" }}>Height: </Text>{" "}
                  {face.bottomRight[1] - face.topLeft[1]}
                </Text>
              </View>
            ))}
          </View>
        )}
        <View style={faceDetection.buttonContainer}>
          <Pressable onPress={selectImage} style={faceDetection.button}>
            <Text style={faceDetection.buttonText}>Select Image</Text>
          </Pressable>
          <Button
            title="Detect Faces"
            onPress={detectFaces}
            disabled={!selectedImage} // Disable detection button if no image is selected
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FaceDetector; // Export the FaceDetector component
