import PushableButton from "../buttons/pushableButton";
import OrcaCourseCard from "../card/courseCard";
import RegisterForm from "./registerForm";
import { COURSE_ITEMS } from "@/const";
import { useTranslations } from "next-intl";

export default function OrcaLanding() {
  const t = useTranslations('home');
  return (
    <div className="flex flex-col gap-12">
      <section className="relative overflow-hidden xl:rounded-2xl">
        <img src="/images/orca_landing.png" alt="Orca Edu" className="w-full h-auto" />
        <div className="absolute bottom-6 left-[calc(65%)]">
          <PushableButton label={t('sign_up_for_consultation')} />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSE_ITEMS.map((item) => (
            <OrcaCourseCard 
            key={item.key} 
            title={t(item.label)} 
            backgroundColor={item.backgroundColor}
            active={!item.disabled}
            >
              <p className="text-white">
                {item.description?t(item.description):''}
              </p>
            </OrcaCourseCard>
          ))}
        </div>
      </section>
      <section id="regiter-section" className="flex xl:rounded-2xl overflow-hidden border border-[rgba(135,135,135,0.25)]">
        <div className="w-1/2 pr-4 flex overflow-hidden">
          <img src="/images/Course_Poster_Landscape.png" alt="Orca Edu" className="w-full h-auto object-cover" />
        </div>
        <div className="w-1/2 pl-4 py-4 pr-8">
          <h2 className="text-2xl text-center font-bold mb-4 text-blue-500">{t('sign_up_for_free_consultation')}</h2>
          <div>
            <RegisterForm />
          </div>
        </div>
      </section>
    </div>
  );
}