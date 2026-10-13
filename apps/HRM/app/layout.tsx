import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Viet-ERP | HRM",
  description: "Cổng truy cập phân hệ quản lý nhân sự Viet-ERP",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="vi"><body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f3f7fc", color: "#183153" }}>{children}</body></html>;
}
