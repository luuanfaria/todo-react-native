import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 32,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 32,
  },
  input: {
    height: 56,
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    padding: 16,
  },
  button: {
    height: 56,
    backgroundColor: "#1b1b1b",
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    width: 45,
    padding: 8,
    color: "#FCFCFC",
    textAlign: "center",
    fontSize: 24,
  },
  listContainer: {
    width: "100%",
    gap: 16,
  },
  listInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  emptyText: {
    padding: 16,
    textAlign: "center",
  },
});
