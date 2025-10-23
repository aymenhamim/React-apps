"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getCustomers } from "@/store/slices/bankSlice";
import { useEffect, useRef } from "react";
import CustomersItem from "./customers-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

function CustomersList() {
  const isFetching = useRef(false);
  const dispatch = useAppDispatch();

  const { customers: users, isNeedsFetch } = useAppSelector(
    (state) => state.bank
  );

  useEffect(() => {
    if ((isNeedsFetch || users.length <= 0) && !isFetching.current) {
      isFetching.current = true;
      dispatch(getCustomers());
    }

    // reset isFetching
    if (!isNeedsFetch && users.length <= 0) {
      isFetching.current = false;
    }
  }, [dispatch, isNeedsFetch, users.length]);

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent className="max-sm:mx-2">
          {users.map((user, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="py-1">
                <CardContent className="px-1">
                  {/* --------- */}
                  <CustomersItem key={user.id} user={user} />
                  {/* --------- */}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="min-md:hidden mx-[1rem]" />
        <CarouselNext className="min-md:hidden mx-[1rem]" />
      </Carousel>
    </div>
  );
}

export default CustomersList;
