import Header from "@/components/header";
import ActionHeader from "@/components/action-header";
import NavigationHeader from "@/components/navigation-header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ActionHeader />
      <NavigationHeader />
    </div>
  );
}
