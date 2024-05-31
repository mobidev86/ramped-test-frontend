import { Navbar } from "@/components/navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="h-full w-full">
        <Navbar />
        <div className="px-[100px]">
            {children}
        </div>
      </div>
    );
  };
  
  export default AuthLayout;
  