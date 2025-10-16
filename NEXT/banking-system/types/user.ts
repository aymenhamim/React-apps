import { StaticImageData } from "next/image";

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: Date | null;
  created_at: Date;
  updated_at: Date;
  totalSpent: number;
  image?: string | StaticImageData;
}
