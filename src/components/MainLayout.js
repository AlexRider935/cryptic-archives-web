import Header from "./Header";
import Footer from "./Footer";

// This component wraps our main pages to give them the standard look.
export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    );
}