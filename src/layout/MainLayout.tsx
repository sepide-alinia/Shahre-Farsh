import type React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="h-screen w-[90vw]  ml-24  bg-amber-100">{children}</div>
  );
}
