import GoogleSignIn from "@/lib/modules/GoogleAuth";
import LoginModule from "@/lib/modules/Login";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5 bg-gray-300">
      <LoginModule />

      <GoogleSignIn />
    </div>
  );
};

export default LoginPage;
