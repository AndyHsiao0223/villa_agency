import Featured from "@/components/Featured";
import HomeCarousel from "@/components/HomeCarousel";
import ViedoView from "@/components/ViedoView";

export default function Home() {
  return (
    <main>
      <HomeCarousel />
      <Featured />
      <ViedoView />
    </main>
  );
}
