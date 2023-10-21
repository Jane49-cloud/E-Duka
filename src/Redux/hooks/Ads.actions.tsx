import { axiosService } from "../helpers/axios";

export const FetchProducts = async () => {
  try {
    const response = await axiosService.get("/products/getproducts");
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const createProduct = async (payload: any): Promise<any> => {
  try {
    const response = await axiosService.post("/products/addproduct", payload);
    return response;
  } catch (error: any) {
    console.error(error);
    throw new Error();
  }
};
export const getSingleProduct = async (id: any): Promise<any> => {
  try {
    const response = await axiosService.get(
      `/products/getproducts/single/${id}`
    );

    console.log();
    return response.data.Data;
  } catch (error: any) {
    console.log(error);
    throw new Error();
  }
};

export const fetchOurProducts = async () => {
  // Your API call using Axios
  const response = await axiosService.get("/products/getproducts");
  return response;
};

export const fetchOurSingleProduct = async (id: any) => {
  // Your API call using Axios
  const response = await axiosService.get(`/products/getproducts/single/${id}`);
  return response;
};

export const fetchSellersProduct = async (id: any) => {
  // Your API call using Axios
  const response = await axiosService.get(
    `/products/getads/singleuserads?id=${id}`
  );
  return response;
};
