import localFont from "next/font/local";
import { Alumni_Sans, Inter } from 'next/font/google'

const geistSans = localFont({
    src: "GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});


const alumniSans = Alumni_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-alumni-sans",
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-inter",
})


export {
    geistSans,
    geistMono,
    alumniSans,
    inter,
}