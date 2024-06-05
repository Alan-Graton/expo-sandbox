import React from "react";

import { Link } from "expo-router";

import { Text, View } from "react-native";

import { styles } from "@/styles/message";

export default function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validação de Ambiente de API</Text>
      <Text style={styles.api_endpoint}>
        O Endpoint da API é: {"\n\n"}
        {process.env.API_ENDPOINT}
      </Text>
      <Link href="/" style={styles.go_back_button}>
        <Text style={styles.subtitle}>
          voltar para tela de{" "}
          <Text style={{ fontWeight: "bold" }}>Autenticação Cognito</Text>
        </Text>
      </Link>
    </View>
  );
}
