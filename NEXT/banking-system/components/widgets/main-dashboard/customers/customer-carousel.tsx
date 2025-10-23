"use client";

import { AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function CustomerCarousel() {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent>
                <div>
                  <p>aymen hamim</p>
                  <p>moroccan dirham</p>
                  {/* <AvatarImage
                    //   src={"http://localhost:3000/" + transaction.user?.image}
                    src={"http://localhost:3000/users/aymen.jpg"}
                  /> */}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CustomerCarousel;
