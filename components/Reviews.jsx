"use client";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

// Swiper recat
import { Swiper, SwiperSlide } from "swiper/react";

// Swipper Style
import "swiper/css";
import "swiper/css/pagination";
// required modules
import { Pagination } from "swiper/modules";

const reviwData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "person 1",
    job: "job 1",
    review:
      "Repudiandae sunt harum quidem dolores quibusdam omnis, eveniet dignissimos ea blanditiis, iste inventore itaque modi praesentium at nesciunt fugit? Rem, eligendi asperiores.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "person 2",
    job: "job 2",
    review:
      "Repudiandae sunt harum quidem dolores quibusdam omnis, eveniet dignissimos ea blanditiis, iste inventore itaque modi praesentium at nesciunt fugit? Rem, eligendi asperiores.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "person 3",
    job: "job 3",
    review:
      "Repudiandae sunt harum quidem dolores quibusdam omnis, eveniet dignissimos ea blanditiis, iste inventore itaque modi praesentium at nesciunt fugit? Rem, eligendi asperiores.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "person 4",
    job: "job 4",
    review:
      "Repudiandae sunt harum quidem dolores quibusdam omnis, eveniet dignissimos ea blanditiis, iste inventore itaque modi praesentium at nesciunt fugit? Rem, eligendi asperiores.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "person 5",
    job: "job 5",
    review:
      "Repudiandae sunt harum quidem dolores quibusdam omnis, eveniet dignissimos ea blanditiis, iste inventore itaque modi praesentium at nesciunt fugit? Rem, eligendi asperiores.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "person 6",
    job: "job 6",
    review:
      "Repudiandae sunt harum quidem dolores quibusdam omnis, eveniet dignissimos ea blanditiis, iste inventore itaque modi praesentium at nesciunt fugit? Rem, eligendi asperiores.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 }
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true
          }}
          className="h-[350px]"
        >
          {reviwData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] ">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4 ">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
