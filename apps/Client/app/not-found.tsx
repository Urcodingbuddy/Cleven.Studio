export default function NotFound() {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-2 text-lg">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-4 text-blue-400 hover:underline">Go back home</a>
      </div>
    );
  }
  