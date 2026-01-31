/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true, // Wajib biar gambar muncul
    },
    // KITA TIDAK BUTUH basePath di sini karena ini root domain!
};

export default nextConfig;
