'use client'

import { Coffee } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const handleLogOut = () => {
  router.push('/sign-in')
  };
  return (
    <div className="sticky top-0 w-screen px-4 py-2 flex justify-between">
      <div className="flex gap-3 items-center">
        <Coffee />
        <div>Buy Me Coffee</div>
      </div>
      <Button onClick={handleLogOut}>Sign out</Button>
    </div>
  );
};
export default Header;
