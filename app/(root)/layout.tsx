import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className=" font-work-sans ">
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
