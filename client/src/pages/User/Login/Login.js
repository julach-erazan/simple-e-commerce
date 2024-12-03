
import Footer from "../../../components/Footer/Footer";
import LoginForm from "../../../components/User/LoginForm/LoginForm";

const Login = () => {
  
  const token = ""

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };
  
  return (
    <div className="w-full min-w-[350px] flex flex-col justify-center items-center pt-[150px]">
      {token ? (
        <div className="w-[90%] md:w-[400px] h-[300px] flex flex-col">
          <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
            Loggin Successfully
          </h1>
          <button
            className="h-[40px] text-[#fff] font-semibold bg-[#2F3C7E] hover:bg-[#E4552D] mt-[100px]"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <LoginForm/>
      )}
      <Footer />
    </div>
  );
};

export default Login;
