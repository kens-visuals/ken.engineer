export default function Section({
  id,
  children,
}: {
  id: string;
  children: JSX.Element[];
}) {
  return (
    <section id={id} className="my-40 pt-20 md:my-60 md:pt-40 lg:pt-20">
      {children}
    </section>
  );
}
