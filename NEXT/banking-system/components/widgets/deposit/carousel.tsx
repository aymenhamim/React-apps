import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomersItem from "../main-dashboard/customers/customers-item";

const users = [
  {
    id: 1,
    name: "soufiane hamim",
    email: "soufianehamim@gmail.com",
    email_verified_at: null,
    created_at: new Date("2025-10-10T11:18:44.000000Z"),
    updated_at: new Date("2025-10-10T11:18:44.000000Z"),
    totalSpent: 0.0,
    image: "images/users/soufiane.jpg",
  },
  {
    id: 2,
    name: "aymen hamim",
    email: "aymenhamim@gmail.com",
    email_verified_at: null,
    // created_at: "2025-10-10T11:18:44.000000Z",
    // updated_at: "2025-10-10T19:53:12.000000Z",
    created_at: new Date("2025-10-10T11:18:44.000000Z"),
    updated_at: new Date("2025-10-10T11:18:44.000000Z"),
    totalSpent: 250.0,
    image: "images/users/aymen.jpg",
  },
  {
    id: 3,
    name: "khadija hamim",
    email: "khadijahamim@gmail.com",
    email_verified_at: null,
    // created_at: "2025-10-10T11:18:45.000000Z",
    // updated_at: "2025-10-10T11:18:45.000000Z",
    created_at: new Date("2025-10-10T11:18:44.000000Z"),
    updated_at: new Date("2025-10-10T11:18:44.000000Z"),
    totalSpent: 0.0,
    image: "images/users/khadija.jpg",
  },
  {
    id: 4,
    name: "abdessamad hamim",
    email: "abdessamadhamim@gmail.com",
    email_verified_at: null,
    // created_at: "2025-10-10T11:18:45.000000Z",
    // updated_at: "2025-10-10T11:18:45.000000Z",
    created_at: new Date("2025-10-10T11:18:44.000000Z"),
    updated_at: new Date("2025-10-10T11:18:44.000000Z"),
    totalSpent: 0.0,
    image: "images/users/abdessamad.jpg",
  },
];

const user = {
  id: 1,
  name: "soufiane hamim",
  email: "soufianehamim@gmail.com",
  email_verified_at: null,
  created_at: new Date("2025-10-10T11:18:44.000000Z"),
  updated_at: new Date("2025-10-10T11:18:44.000000Z"),
  totalSpent: 0.0,
  image: "images/users/soufiane.jpg",
};

export function TransactionsCarousel() {
  return (
    // <Carousel className="w-full max-w-sm">
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center ">
                  {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                  <CustomersItem user={user} isActive={true} key={index} />
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
