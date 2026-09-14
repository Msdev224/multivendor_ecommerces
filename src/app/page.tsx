import ThemeToggle from "@/components/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <div className="p-5 w-full min-h-screen">
      <div className="w-full gap-x-5 flex justify-end">
        <UserButton/>
        <ThemeToggle/>
      </div>
      <h1 className="font-barlow text-blue-500">Page D&apos;acceuil</h1>
      
    </div>
  );
}
