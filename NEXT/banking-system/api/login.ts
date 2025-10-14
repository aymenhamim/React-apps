import api from "@/lib/axios";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  try {
    await api.get("/sanctum/csrf-cookie");

    const response = await api.post("/login", data);

    console.log("response--------- : ", response);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login error:", error.message);
    }
    throw error;
  }
};
