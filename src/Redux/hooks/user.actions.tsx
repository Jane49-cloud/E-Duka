import { axiosService } from "../helpers/axios";
// import { axiosAuthServices } from "../helpers/axios";

export const RegisterUser = async (payload: any): Promise<any> => {
  try {
    const response = await axiosService.post("/user/auth/signup", payload);
    localStorage.setItem("userToken", response.data.token);
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
//

export const LoginUser = async (payload: any): Promise<any> => {
  try {
    const response = await axiosService.post("/user/auth/signin", payload);
    localStorage.setItem("userToken", response.data.token);
    return response;
  } catch (error: any) {
    console.log(error, "a terrible error occurred");
    throw new Error(error.message);
  }
};

export const currentUser = async () => {
  try {
    const response = await axiosService.get("/user/auth/getuser");
    return response;
  } catch (error: any) {
    console.log(error, "someError");
    throw new Error(error.message);
  }
};
