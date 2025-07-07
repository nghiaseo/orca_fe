import PushableButton from "../buttons/pushableButton";
import RegisterForm from "./registerForm";

export default function OrcaLanding() {
  return (
    <div className="flex flex-col gap-12">
      <div className="relative overflow-hidden xl:rounded-2xl">
        <img src="/images/orca_landing.png" alt="Orca Edu" className="w-full h-auto" />
        <div className="absolute bottom-6 left-[calc(65%)]">
          <PushableButton label="Đăng ký tư vấn" />
        </div>
      </div>
      <div className="flex xl:rounded-2xl overflow-hidden border border-[rgba(135,135,135,0.25)]">
        <div className="w-1/2 pr-4 flex overflow-hidden">
          <img src="/images/Course_Poster_Landscape.png" alt="Orca Edu" className="w-full h-auto object-cover" />
        </div>
        <div className="w-1/2 pl-4 py-4 pr-8">
          <h2 className="text-2xl text-center font-bold mb-4 text-blue-500">Đăng ký nhận tư vấn miễn phí</h2>          
          <div>
            <RegisterForm />            
          </div>
          </div>        
      </div>
    </div>
  );
}