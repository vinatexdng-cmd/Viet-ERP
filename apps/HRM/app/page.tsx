export default function HomePage() {
  return (
    <main style={{ maxWidth: 780, margin: "8vh auto", padding: 32 }}>
      <section style={{ background: "#fff", borderRadius: 16, padding: 36, boxShadow: "0 8px 30px #12345a12" }}>
        <h1 style={{ color: "#0755a4", marginTop: 0 }}>Viet-ERP — Quản lý nhân sự</h1>
        <p>Hệ thống đang trong giai đoạn cấu hình và kiểm thử triển khai.</p>
        <p>Trang chủ đã được khởi tạo để kiểm tra định tuyến Next.js trên Vercel. Chức năng đăng nhập và cơ sở dữ liệu cần được kiểm thử riêng trước khi đưa vào sử dụng.</p>
        <a href="/api/health" style={{ color: "#0755a4", fontWeight: 600 }}>Kiểm tra trạng thái ứng dụng →</a>
      </section>
    </main>
  );
}
