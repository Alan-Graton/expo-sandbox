import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "space-between",

    padding: 32,
  },
  header: {
    padding: 10,
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
  },
  body: { padding: 10, width: "100%" },
  fields: {
    gap: 8,
  },
  footer: {
    padding: 10,

    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    gap: 8,
  },
  button: {
    padding: 10,

    alignItems: "center",
    justifyContent: "center",

    width: "100%",

    height: 50,
    backgroundColor: "#7dadfa",

    borderRadius: 6,
  },
  button_title: {
    color: "white",
  },
  link_button: {
    backgroundColor: "#7dadfa",
    padding: 15,
    borderRadius: 6,
  },
  text_input: {
    backgroundColor: "#e3e4e6",
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: 6,
  },
});
