import Customers from "@/components/ui/dashboard/customers/customers";
import Overview from "@/components/ui/dashboard/overview/overview";
import Stats from "@/components/ui/dashboard/stats/stats";

export default function Home() {
  return (
    <section>
      <Stats />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-10">
        <Overview />
        <Customers />
      </div>
    </section>
  );
}
