import React, { useContext } from "react";
import { useFormik } from "formik";
import {} from "react";
import * as yup from "yup";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import AuthContext from "../../../../../config/context/auth.context";
import AxiosClient from "../../../../../config/client/axios-client";
import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";

const Login = ({ navigation }) => {
  const { user, dispatch } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Campo obligatorio"),
      password: yup.string().required("Campo obligatorio"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);
      try {
        const response = await AxiosClient({
          url: "/auth/signin",
          method: "POST",
          data: values,
        });
        console.log(response);
        if (response.status === "OK") {
          dispatch({ type: "SIGN_IN", payload: response.data });
          navigation.navigate("Historigrama");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <form
      className="flex flex-col items-center gap-4 max-w-md mx-auto"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <div className="w-full">
        <div className="mb-2">
          <Label
            htmlFor="username"
            value="Your username"
            style={{ color: "black" }}
          />
        </div>
        <TextInput
          type="text"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={
            formik.errors.username && formik.touched.username ? (
              <span className="text-red-600">{formik.errors.username}</span>
            ) : null
          }
          placeholder="srloki"
          required
        />
      </div>
      <div className="w-full">
        <div className="mb-2">
          <Label
            htmlFor="password1"
            value="Your password"
            style={{ color: "black" }}
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={
            formik.errors.password && formik.touched.password ? (
              <span className="text-red-600">{formik.errors.password}</span>
            ) : null
          }
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="remember" style={{ color: "black" }}>
          Remember me
        </Label>
      </div>
      <Button
        type="submit"
        color="light"
        className="w-full"
        disabled={formik.isSubmitting || !formik.isValid}
      >
        {formik.isSubmitting ? (
          <Spinner />
        ) : (
          <span className="text-base font-bold">Sign in</span>
        )}
      </Button>
    </form>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginBottom: 30,
  },
  input: {
    width: "80%",
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
};

export default Login;
