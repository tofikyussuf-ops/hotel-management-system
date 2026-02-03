import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button'; // Assuming your Button is in ui folder
import Heading from '../ui/Heading'; // Using your Heading component

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen items-center justify-center bg-grey-50 px-6">
      <div className="max-w-[96rem] rounded-md border border-grey-100 bg-white p-12 text-center shadow-xl">
        <h1 className="mb-8 text-9xl font-bold text-brand-600">404</h1>

        <div className="mb-10">
          <Heading as="h2">
            The page you are looking for could not be found 😢
          </Heading>
          <p className="mt-6 text-xl leading-7 text-grey-600">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Button variation="secondary" onClick={() => navigate(-1)}>
            &larr; Go back
          </Button>

          <Button variation="primary" onClick={() => navigate('/dashboard')}>
            Go back home
          </Button>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
