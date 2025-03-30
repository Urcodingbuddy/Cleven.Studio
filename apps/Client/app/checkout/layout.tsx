export default function CheckoutLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 p-4 text-white text-center">
          <h1 className="text-2xl font-bold">Secure Checkout</h1>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="text-center p-4 mt-8 text-gray-600">
          &copy; {new Date().getFullYear()} clevenstudios. All Rights Reserved.
        </footer>
      </div>
    );
  }
  