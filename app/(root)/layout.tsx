import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";
import { Toaster } from "sonner";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className=" font-work-sans ">
      <Navbar />
      {children}
      <Toaster/>
    </main>
  );
};

export default layout;
