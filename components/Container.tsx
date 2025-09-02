import Nav from "./Nav";
import Footer from "./Footer";

export default function Container({ children }: { children: JSX.Element[] }) {
  return (
    <div className="mx-auto w-[92%] max-w-5xl overflow-x-hidden py-4">
      <Nav />

      {children}

      <Footer />
    </div>
  );
}
