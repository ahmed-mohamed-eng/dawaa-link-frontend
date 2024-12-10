import Footer from "@/components/common/complex/footer";
import ActionHeader from "@/components/home/action-header";
import NavigationHeader from "@/components/home/navigation-header";

export default async function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="w-full">
        <ActionHeader />
        <NavigationHeader />
      </div>

      <main className="w-full px-8 flex flex-col"></main>

      <Footer />
    </div>
  );
}
