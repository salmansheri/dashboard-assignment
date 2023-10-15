import Customers from "@/components/ui/dashboard/customers/customers";
import Overview from "@/components/ui/dashboard/overview/overview";
import ProductSales from "@/components/ui/dashboard/products/product-sales";
import Stats from "@/components/ui/dashboard/stats/stats";

export default function Home() {
  return (
    <section className="space-y-10">
      <Stats />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4  min-h-[500px]">
        <Overview />
        <Customers />
      </div>
      <ProductSales />
    </section>
  );
}
