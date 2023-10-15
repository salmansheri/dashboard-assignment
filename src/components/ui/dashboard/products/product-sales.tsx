import React from "react";
import Heading from "../../heading";
import Image from "next/image";
import { productData } from "@/lib/constants/data";

const ProductSales = () => {
  return (
    <section className="bg-white p-6 w-full rounded-md shadow space-y-5 ">
      <Heading title="Product Sells" />
      <div className="w-full overflow-auto">
        <table className="w-full">
          <thead className="text-left">
            <tr className="text-foreground text-sm ">
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((data) => (
              <tr key={data.id} className="py-10">
                {" "}
                <td className="flex items-center gap-4 py-4 w-[80%]">
                  <div className="relative h-12 w-24">
                    <Image
                      src={data.src}
                      alt={data.name}
                      fill
                      className="object-cover object-center shadow rounded-md"
                    />
                  </div>
                  <span className="space-y-2">
                    <h3 className="text-base font-bold">{data.name}</h3>
                    <p className="text-xs text-foreground">
                      {data.description}
                    </p>
                  </span>
                </td>
                <td>{`${data.inStock} in Stock`}</td>
                <td>{data.price}</td>
                <td>{data.totalSales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductSales;
