import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Klikx 3D Isometric Modeling",
  description: "Get in touch with Klikx to enhance your property listings with stunning 3D isometric models.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
