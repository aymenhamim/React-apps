import { User } from "./user";

export interface Transaction {
  id: number;
  user_id: number;
  amount: number;
  currency: string;
  description: string;
  // type: string;
  type: "deposit" | "withdraw";
  created_at: Date;
  // updated_at: string;
  user?: User;
}
