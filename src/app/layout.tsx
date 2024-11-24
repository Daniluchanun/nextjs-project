import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";


export const metadata: Metadata = {
    title: "FilmFreeway",
    description: "Discover the world of movies with FilmFreeway. Browse by genres, search for your favorite movies, and explore detailed reviews and ratings.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
