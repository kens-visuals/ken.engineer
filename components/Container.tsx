import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-[92%] max-w-5xl overflow-x-hidden py-4 lg:overflow-x-visible">
      <Nav />

      {children}

      <Footer />
    </div>
  );
}
