//react
import { type ReactNode } from "react";
//style
import "./Page.css";
//components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface Props {
    children: ReactNode;
}

export default function Page ( { children }: Props) {
    return (
        <>
            <Header/>
            <div className="page">
                <main className="container page-content">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}