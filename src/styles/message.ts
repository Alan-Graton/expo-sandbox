import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 32,

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
  },
  api_endpoint: {
    marginTop: 24,
    fontSize: 16,
    textAlign: "center",
  },
  go_back_button: {
    marginTop: 32,
    borderRadius: 6,
    backgroundColor: "#7dadfa",
    padding: 15,
  },
});
