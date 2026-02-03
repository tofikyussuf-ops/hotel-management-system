import Logo from '../ui/Logo';
import Heading from '../ui/Heading';
import LoginForm from '../features/authentication/LoginForm'; // You'll convert this soon!

function Login() {
  return (
    <main className="grid min-h-screen grid-cols-[48rem] content-center justify-center gap-[3.2rem] bg-grey-50">
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </main>
  );
}

export default Login;
