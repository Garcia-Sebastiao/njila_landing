import { BannerIllustration } from "@/assets/illustrations/BannerIllustration";
import { HomeView } from "@/views/home/HomeView";

export default function App() {
  return (
    <>
      <div className="hidden lg:flex absolute -z-10 top-0 left-0">
        {BannerIllustration}
      </div>
      <HomeView />
    </>
  );
}
