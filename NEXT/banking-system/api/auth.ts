import api from "@/lib/axios";

interface LoginData {
  email: string;
  password: string;
}

// export const login = async (data: LoginData) => {
//   try {
//     // await api.get("/sanctum/csrf-cookie");

//     const res = await api.post("/login", data);
//     return res;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Login error:", error.message);
//     }
//     throw error;
//   }
// };

export const fetchCustomers = async () => {
  try {
    const res = api.get("http://localhost:8000/api/users");
    return res;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login error:", error.message);
    }
    throw error;
  }
};
