import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const stylesCamera = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    height: "100%",
  },
  cameraContainer: {
    flex: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "gray",
    gap: 10,
    justifyContent: "space-around",
    alignItems: 'center',
  },
});

const stylesSignInAndSignUp = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
    opacity: 0.6,
  },
  input: {
    width: "100%",
    height: 55,
    borderColor: "gray",
    borderWidth: 1.5,
    borderRadius: 7,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "darkblue",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 7,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontWeight: "bold",
    opacity: 0.7,
  },
  link: {
    color: "blue",
    fontWeight: "bold",
  },
});

const stylesImageScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const faceDetection = StyleSheet.create({
  buttonContainer: {
    gap: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "darkblue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "600",
    color: "green",
  },
  result: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.8,
  },
});

export {
  stylesHome,
  stylesCamera,
  stylesSignInAndSignUp,
  stylesImageScreen,
  faceDetection,
};
