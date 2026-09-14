import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-5 w-full min-h-screen">
      <div className="w-full flex justify-end">
        <ThemeToggle/>
      </div>
      <h1 className="font-barlow text-blue-500 font-bold">Bienvenue sur GoShop</h1>
      <Button variant="destructive">Click Here</Button>
    </div>
  );
}
