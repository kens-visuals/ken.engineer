// Components
import Nav from "./Nav";
import Footer from "./Footer";

export default function Container({ children }: { children: JSX.Element[] }) {
  return (
    <div className="mx-auto w-[88%] max-w-5xl py-4">
      <Nav />

      {children}

      <Footer />
    </div>
  );
}
