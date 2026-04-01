import { ReactNode } from "react";

import Nav from "./Nav";

/**
 * Same horizontal width as Nav inner column (w-[92%] max-w-5xl).
 * Disciplines-themed nav (no site footer). Prose avoids mid-word breaks.
 */
export default function DisciplinesLegalShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <div className="mx-auto w-[92%] max-w-5xl pb-16 pt-24 md:pb-24 md:pt-28">
      <main className="w-full">
        <div className="hyphens-none break-normal [overflow-wrap:normal] [word-break:normal] [&_a]:break-words">
          {children}
        </div>
      </main>
    </div>
    </>
  );
}
