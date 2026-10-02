export default function AdminMediaPage() {
  return (
    <div>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: "var(--ivory)", marginBottom: 8 }}>Media Library</h1>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", marginBottom: 32 }}>
        Upload and manage images. Images are stored on Cloudinary.
      </p>
      <div style={{ background: "var(--navy)", border: "2px dashed var(--border-dark)", borderRadius: 2, padding: "60px 40px", textAlign: "center" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "var(--muted)", marginBottom: 8 }}>Media library coming soon.</p>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#5C6E7E" }}>
          For now, upload images to Cloudinary directly and paste the URL when creating stories.
        </p>
      </div>
    </div>
  );
}