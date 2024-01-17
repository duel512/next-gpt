import Navigation from "@/components/home/Navigation/index";
import Main from "@/components/home/Main";

export default function Home() {
  return (
    <div className="h-full flex">
      <Navigation />
      <Main />
    </div>
  );
}
