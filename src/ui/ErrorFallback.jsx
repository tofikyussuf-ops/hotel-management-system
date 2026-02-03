import Heading from './Heading';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="flex h-screen items-center justify-center bg-grey-50 p-[4.8rem]">
      <div className="flex-[0_1_96rem] rounded-md border border-grey-100 bg-grey-0 p-[4.8rem] text-center">
        <Heading as="h1" className="mb-[1.6rem]">
          Something went wrong 🧐
        </Heading>

        <p className="mb-[3.2rem] font-sono text-grey-500">{error.message}</p>

        {/* Using the Button component we already converted */}
        <button
          onClick={resetErrorBoundary}
          className="rounded-sm bg-brand-600 px-6 py-3 text-brand-50 transition-colors hover:bg-brand-700"
        >
          Try again
        </button>
      </div>
    </main>
  );
}

export default ErrorFallback;
