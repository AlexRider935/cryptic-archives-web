// File: web/src/app/(auth)/layout.jsx

// This layout applies ONLY to routes inside the (auth) folder.
// It provides a clean, neutral background for the login/register forms.
export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#e9d8c1]">
            {children}
        </div>
    );
}