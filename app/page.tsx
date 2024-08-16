import { HeroCarousel } from "@/components/HeroCarousel";
import { Searchbar } from "@/components/Searchbar";
import { columns, Payment } from "@/components/table/Colums";
import { DataTable } from "@/components/table/DataTable";
import axios from "axios";
import Image from "next/image";
import React from "react";

export default function Home() {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "c3f4e2b1",
      amount: 150,
      status: "completed",
      email: "j@example.com",
    },
    {
      id: "a2b3c4d5",
      amount: 200,
      status: "failed",
      email: "t@example.com",
    },
    {
      id: "e1f2g3h4",
      amount: 250,
      status: "pending",
      email: "l@example.com",
    },
    {
      id: "i5j6k7l8",
      amount: 300,
      status: "completed",
      email: "s@example.com",
    },
    {
      id: "m9n0o1p2",
      amount: 350,
      status: "failed",
      email: "r@example.com",
    },
    {
      id: "q3r4s5t6",
      amount: 400,
      status: "pending",
      email: "q@example.com",
    },
    {
      id: "u7v8w9x0",
      amount: 450,
      status: "completed",
      email: "p@example.com",
    },
    {
      id: "y1z2a3b4",
      amount: 500,
      status: "failed",
      email: "o@example.com",
    },
    {
      id: "c5d6e7f8",
      amount: 550,
      status: "pending",
      email: "n@example.com",
    },
    {
      id: "g9h0i1j2",
      amount: 600,
      status: "completed",
      email: "m@example.com",
    },
    {
      id: "k3l4m5n6",
      amount: 650,
      status: "failed",
      email: "l@example.com",
    },
    {
      id: "o7p8q9r0",
      amount: 700,
      status: "pending",
      email: "k@example.com",
    },
    {
      id: "s1t2u3v4",
      amount: 750,
      status: "completed",
      email: "j@example.com",
    },
    {
      id: "w5x6y7z8",
      amount: 800,
      status: "failed",
      email: "i@example.com",
    },
    {
      id: "a9b0c1d2",
      amount: 850,
      status: "pending",
      email: "h@example.com",
    },
    {
      id: "e3f4g5h6",
      amount: 900,
      status: "completed",
      email: "g@example.com",
    },
    {
      id: "i7j8k9l0",
      amount: 950,
      status: "failed",
      email: "f@example.com",
    },
    {
      id: "m1n2o3p4",
      amount: 1000,
      status: "pending",
      email: "e@example.com",
    },
    {
      id: "q5r6s7t8",
      amount: 1050,
      status: "completed",
      email: "d@example.com",
    },
    {
      id: "u9v0w1x2",
      amount: 1100,
      status: "failed",
      email: "c@example.com",
    },
    {
      id: "y3z4a5b6",
      amount: 1150,
      status: "pending",
      email: "b@example.com",
    },
    {
      id: "c7d8e9f0",
      amount: 1200,
      status: "completed",
      email: "a@example.com",
    },
  ];
  console.log(data);

  return (
    <>
      <section className="px-6 md:px-20 py-2">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>
            <p className="mt-6">
              Poweful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>
          {/* <HeroCarousel /> */}
        </div>
      </section>

      <section>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </>
  );
}
