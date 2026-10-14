import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata={title:"SocialPilot AI",description:"Agency social media content workspace"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}