import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchItem<T>(url: string): Promise<T> {
  try {
    const response = await api.get(url);
    return response.data || ({} as T);
  } catch (error: any) {
    throw error;
  }
}

export async function deleteItem(url: string): Promise<AxiosResponse<any>> {
  try {
    const response = await api.delete(url);
    return response;
  } catch (error: any) {
    throw error;
  }
}

export async function updateItem<T>(url: string, body: T) {
  try {
    const {data} = await api.put(url, body);
    return data;
  } catch (error: any | AxiosError) {
    if(axios.isAxiosError(error)){
      throw new AxiosError(error.response?.data);
    }else{
      throw {message: "Something went wrong"};
    }
  }
}
