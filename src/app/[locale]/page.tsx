import { BannerIllustration } from "@/assets/illustrations/BannerIllustration";
import { HomeView } from "@/views/home/HomeView";

export default function App() {
  return (
    <>
      <div className="absolute top-0 left-0">{BannerIllustration}</div>
      <HomeView />
    </>
  );
}
