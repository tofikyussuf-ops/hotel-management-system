import LoginForm from '../features/authentication/LoginForm'; // You'll convert this soon!
import Heading from '../ui/Heading';
import Logo from '../ui/Logo';
function Login() {
  return (
    <main className="grid min-h-screen grid-cols-[48rem] content-center justify-center gap-[3.2rem] bg-grey-50">
      {/* Centering the Logo wrapper */}
      <div className="flex justify-center">
        <Logo />
      </div>

      <Heading as="h4" className="text-center">
        Log in to your account
      </Heading>
      <LoginForm />
    </main>
  );
}
export default Login;
