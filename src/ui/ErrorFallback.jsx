// src/ui/ErrorFallback.jsx
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="flex h-screen items-center justify-center bg-[var(--color-grey-50)] p-12">
      <div className="max-w-[96rem] flex-1 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-12 text-center">
        <h1 className="mb-4 text-3xl font-semibold">Something went wrong </h1>
        <p className="mb-8 font-mono text-[var(--color-grey-500)]">
          {error.message}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="rounded-sm bg-brand-600 px-6 py-3 font-medium text-brand-50 transition-colors hover:bg-brand-700"
        >
          Try again
        </button>
      </div>
    </main>
  );
}

export default ErrorFallback;
