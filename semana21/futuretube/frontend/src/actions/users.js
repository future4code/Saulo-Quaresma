import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../containers/Router/index";

const baseURL = "https://aj29jgfh2g.execute-api.us-east-1.amazonaws.com/V1";

export const login = (email, password) => async (dispatch) => {
   const loginInformation = {
      email,
      password
   };

   try {
      const response = await axios.post(`${baseURL}/login`, loginInformation);
      window.localStorage.setItem("token", response.data.token);
      dispatch(push(routes.feedPage));
   } catch {
      window.alert("Login Error.");
      dispatch(push(routes.loginPage))
   };
};

export const signUp = (name, email, birthDate, picture, password) => async (dispatch) => {
   const signUpInformations = {
      name,
      email,
      birthDate,
      picture,
      password
   };

   try {
      const response = await axios.post(`${baseURL}/signup`, signUpInformations);
      window.localStorage.setItem("token", response.data.token);
      dispatch(push(routes.homePage))
   } catch {
      window.alert("Signup Error!")
      dispatch(push(routes.signUpPage))
   };
};