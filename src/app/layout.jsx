import "./styles/globals.css";
import { BookingProvider } from "@/context/BookingContext";

export const metadata = {
  title: "Housing Market",
  description: "Rental Market for housing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BookingProvider>
        <body className="montserratFont w-full p-0 m-0">{children}</body>
      </BookingProvider>
    </html>
  );
}
