// fonts

import { Caveat, Comfortaa, Indie_Flower, Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const caveat = Caveat({
    weight: "400",
    subsets: ["latin"],
});

export const indie = Indie_Flower({
    weight: "400",
    subsets: ["latin"],
});

export const rubic = Comfortaa({
    weight: "600",
    subsets: ["latin"],
});