import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TransactionCarouselItem from "./transaction-carousel-item";

const transactions = [
  {
    id: 1,
    user_id: 2,
    amount: 500.0,
    currency: "DH",
    description: "Deposit 500 DH",
    created_at: new Date("2025-10-01T09:15:00Z"),
    // updated_at: new Date("2025-10-01T09:15:00Z"),
    type: "deposit" as "deposit",
    user: {
      id: 1,
      name: "soufiane hamim",
      email: "soufianehamim@gmail.com",
      email_verified_at: null,
      created_at: new Date("2025-10-10T11:18:44.000000Z"),
      updated_at: new Date("2025-10-10T11:18:44.000000Z"),
      totalSpent: 0.0,
      image: "images/users/soufiane.jpg",
    },
  },
  {
    id: 1,
    user_id: 2,
    amount: 500.0,
    currency: "DH",
    description: "Deposit 500 DH",
    created_at: new Date("2025-10-01T09:15:00Z"),
    // updated_at: new Date("2025-10-01T09:15:00Z"),
    type: "deposit" as "deposit",
    user: {
      id: 1,
      name: "soufiane hamim",
      email: "soufianehamim@gmail.com",
      email_verified_at: null,
      created_at: new Date("2025-10-10T11:18:44.000000Z"),
      updated_at: new Date("2025-10-10T11:18:44.000000Z"),
      totalSpent: 0.0,
      image: "images/users/soufiane.jpg",
    },
  },
  {
    id: 1,
    user_id: 2,
    amount: 500.0,
    currency: "DH",
    description: "Deposit 500 DH",
    created_at: new Date("2025-10-01T09:15:00Z"),
    // updated_at: new Date("2025-10-01T09:15:00Z"),
    type: "deposit" as "deposit",
    user: {
      id: 1,
      name: "soufiane hamim",
      email: "soufianehamim@gmail.com",
      email_verified_at: null,
      created_at: new Date("2025-10-10T11:18:44.000000Z"),
      updated_at: new Date("2025-10-10T11:18:44.000000Z"),
      totalSpent: 0.0,
      image: "images/users/soufiane.jpg",
    },
  },
  {
    id: 1,
    user_id: 2,
    amount: 500.0,
    currency: "DH",
    description: "Deposit 500 DH",
    // created_at: new Date("2025-10-01T09:15:00Z"),
    // updated_at: new Date("2025-10-01T09:15:00Z"),
    type: "deposit" as "deposit",
    user: {
      id: 1,
      name: "soufiane hamim",
      email: "soufianehamim@gmail.com",
      email_verified_at: null,
      created_at: new Date("2025-10-10T11:18:44.000000Z"),
      updated_at: new Date("2025-10-10T11:18:44.000000Z"),
      totalSpent: 0.0,
      image: "images/users/soufiane.jpg",
    },
  },
  {
    id: 1,
    user_id: 2,
    amount: 500.0,
    currency: "DH",
    description: "Deposit 500 DH",
    // created_at: new Date("2025-10-01T09:15:00Z"),
    // updated_at: new Date("2025-10-01T09:15:00Z"),
    type: "deposit" as "deposit",
    user: {
      id: 1,
      name: "soufiane hamim",
      email: "soufianehamim@gmail.com",
      email_verified_at: null,
      created_at: new Date("2025-10-10T11:18:44.000000Z"),
      updated_at: new Date("2025-10-10T11:18:44.000000Z"),
      totalSpent: 0.0,
      image: "images/users/soufiane.jpg",
    },
  },
];

export function TransactionsCarousel() {
  return (
    // <Carousel className="w-full max-w-sm">
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {transactions.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center ">
                  <TransactionCarouselItem transaction={item} key={index} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="min-md:hidden mx-[1rem]" />
      <CarouselNext className="min-md:hidden mx-[1rem]" />
    </Carousel>
  );
}
