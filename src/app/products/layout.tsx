import ProductPagePagination from "@/components/UI/navigation/ProductPagePagination";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="mx-auto max-w-screen-2xl">
      <ProductPagePagination />
      {children}
      <ProductPagePagination />
    </main>
  );
}
