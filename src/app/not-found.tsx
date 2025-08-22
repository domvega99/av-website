
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 dark:bg-gray-900">
      <h1
        className="text-[10rem] font-extrabold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent select-none"
        aria-label="404"
      >
        404
      </h1>
      <p className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
        Page not found
      </p>
      <p className="mt-2 max-w-md text-center text-gray-600 dark:text-gray-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
    </main>
  );
}
