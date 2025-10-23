"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TransactionCarouselItem from "./transaction-carousel-item";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { getTransactions } from "@/store/slices/bankSlice";

export function TransactionsCarousel() {
  const disptach = useAppDispatch();
  const { recentTransactions, isNeedsFetch } = useAppSelector(
    (state) => state.bank
  );

  useEffect(() => {
    if (isNeedsFetch) {
      disptach(getTransactions({}));
    }
  }, [disptach, isNeedsFetch]);

  return (
    // <Carousel className="w-full max-w-sm">
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {recentTransactions.slice(0, 6).map((item, index) => (
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
