import api from "@/lib/axios";

export const fetchTransactions = async () => {
  try {
    // await api.get("/sanctum/csrf-cookie");

    const response = await api.get("http://localhost:8000/api/user");

    console.log("response--------- : ", response);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch Transactions error:", error);
    }
    throw error;
  }
};
