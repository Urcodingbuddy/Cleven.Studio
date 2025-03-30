export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <header className="w-full p-4 bg-blue-600 text-white text-center">
          <h1 className="text-xl font-bold">Checkout</h1>
        </header>
        <main className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">{children}</main>
      </div>
    );
  }