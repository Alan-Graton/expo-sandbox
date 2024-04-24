import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Cognito() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>I'll be the Cognito authentication screen</Text>
      <Link href="/message">
        <Text>
          Test <Text style={{ fontWeight: "bold" }}>API Endpoint</Text>
        </Text>
      </Link>
    </View>
  );
}
