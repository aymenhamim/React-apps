import api from "@/lib/axios";

interface fetchTransactionsType {
  customer?: string;
  type?: string;
  limit?: string;
}

export const fetchTransactions = async ({
  limit = "10",
  type,
  customer,
}: fetchTransactionsType) => {
  try {
    // await api.get("/sanctum/csrf-cookie");

    const response = await api.get(
      `http://localhost:8000/api/transactions?customer=${customer}&type=${type}&limit=${limit}`
    );

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch Transactions error:", error);
    }
    throw error;
  }
};

export const deposit = async (amount: number) => {
  try {
    const res = await api.post(
      "http://localhost:8000/api/transactions/deposit",
      {
        amount,
        currency: "DH",
      }
    );
    return res;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch Transactions error:", error);
    }
    throw error;
  }
};

export const withdraw = async (amount: number) => {
  try {
    const res = await api.post(
      "http://localhost:8000/api/transactions/withdraw",
      {
        amount,
        currency: "DH",
      }
    );
    return res;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch Transactions error:", error);
    }
    throw error;
  }
};

export const fetchAccount = async () => {
  try {
    const res = await api.get("http://localhost:8000/api/account");
    console.log(res);

    return res;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch Transactions error:", error);
    }
    throw error;
  }
};
