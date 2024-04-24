import React from "react";

import { Auth } from "aws-amplify";
import awsExports from "@/aws-exports";

import { Link } from "expo-router";

import {
  ActivityIndicator,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  loginSchema,
  DEFAULT_VALUES,
  ILoginSchema,
} from "@/schemas/login.schema";

import { styles } from "@/styles/login";

Auth.configure(awsExports);

export default function Cognito() {
  const [loading, setLoading] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver<ILoginSchema>(loginSchema),
  });

  async function handleLogin(data: ILoginSchema) {
    try {
      setLoading(true);

      await Auth.signIn(data.email, data.password);
      ToastAndroid.show("Autenticação bem sucedida!", 2000);
    } catch (error) {
      console.error("Error while authenticating: ", error);
      ToastAndroid.show(String(error), 2000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Autenticação Cognito</Text>
        <Text style={styles.subtitle}>
          Entre com suas credenciais do ambiente configurado
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.fields}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  placeholder="E-mail"
                  autoComplete="email"
                  style={styles.text_input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
                {errors.email?.message && (
                  <View>
                    <Text>{errors.email?.message}</Text>
                  </View>
                )}
              </>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  placeholder="Senha"
                  autoComplete="password"
                  style={styles.text_input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
                {errors.password?.message && (
                  <View>
                    <Text>{errors.password?.message}</Text>
                  </View>
                )}
              </>
            )}
          />
        </View>
      </View>
      <View style={styles.footer}>
        {loading && (
          <ActivityIndicator color="#7dadfa" animating={loading} size="large" />
        )}
        {!loading && (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(handleLogin)}
            >
              <Text style={styles.button_title}>LOGIN</Text>
            </TouchableOpacity>
            <Link href="/message" style={styles.link_button}>
              <Text style={styles.button_title}>PULAR LOGIN</Text>
            </Link>
          </>
        )}
      </View>
    </View>
  );
}
