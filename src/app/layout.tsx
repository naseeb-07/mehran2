import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#033833",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mehranrestaurant.com"),
  title: "Mehran Restaurant | Premium Arabian & Indian Dining Experience",
  description:
    "Welcome to Mehran Restaurant. Discover authentic Mandi delicacies, charcoal-grilled Alfaham, Mutton Raan, royal Dum Biriyani, and private Majlis dining. Founded in 2021.",
  keywords: [
    "Mehran Restaurant",
    "Mandi Restaurant",
    "Arabian Restaurant",
    "Alfaham Chicken",
    "Mutton Raan Mandi",
    "Biriyani",
    "Majlis Dining",
    "Party Hall",
    "Halal Dining",
  ],
  authors: [{ name: "Mehran Restaurant" }],
  openGraph: {
    title: "Mehran Restaurant | Authentic Arabian & Indian Delicacies",
    description:
      "Savor authentic Zafrani Mandi, juicy Alfaham grills, royal Mutton Raan, and exquisite dining with private majlis seating.",
    url: "https://mehranrestaurant.com",
    siteName: "Mehran Restaurant",
    images: [
      {
        url: "/images/food/mandi-mutton-raan-ribs.png",
        width: 1200,
        height: 630,
        alt: "Mehran Restaurant Signature Mutton Raan Mandi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo/mehran-logo.png",
    apple: "/logo/mehran-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/mehran-logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
