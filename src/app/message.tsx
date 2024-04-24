import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Message() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>And I'll be the API validation screen</Text>
      <Link href="/">
        <Text>
          Go back to{" "}
          <Text style={{ fontWeight: "bold" }}>Cognito Authentication</Text>
        </Text>
      </Link>
    </View>
  );
}
