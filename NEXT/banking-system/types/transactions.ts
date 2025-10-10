export interface Transaction {
  id: number;
  user_id: number;
  amount: string;
  currency: string;
  description: string;
  type: "withdraw" | "deposit";
  created_at: string;
  updated_at: string;
}
