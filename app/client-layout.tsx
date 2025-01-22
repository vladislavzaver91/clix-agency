"use client";

import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const isAdminPage = pathname?.startsWith("/admin");

    return (
        <>
            {!isAdminPage && <Navbar />}
            {children}
        </>
    );
};

export default ClientLayout;
