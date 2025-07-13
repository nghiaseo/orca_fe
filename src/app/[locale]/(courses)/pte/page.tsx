import PushableButton from "@/components/buttons/pushableButton";
import { useTranslations } from "next-intl";
import { PTE_COURSE_ITEMS } from "@/const/index";
import OrcaCourseItemCard from "@/components/card/courseItemCard";
import RegisterForm from "@/components/landing/registerForm";

export default function PtePage() {
    const t = useTranslations('pte');
    return (
        <div className="flex flex-col gap-12">
            <section className="overview overview--pte">
                <div className="max-w-7xl w-full mx-auto bg-white rounded-2xl overflow-hidden flex p-12">
                    <div className="w-1/2 pr-8">
                        <h2 className="overview__title">
                            PTE
                        </h2>
                        <div className="text-[16px] flex gap-4 flex-col">
                            <p>{t('description_1')}</p>
                            <p>{t('description_2')}</p>
                            <div>
                                <PushableButton label={t('register_for_consultation')} />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 rounded-2xl overflow-hidden pl-8 flex">
                        <img src="/images/pte.jpg" alt="orca edu pte" className="object-cover"></img>
                    </div>
                </div>
            </section>
            <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">{t('courses')}</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {
                            PTE_COURSE_ITEMS.map((item) => (
                                <OrcaCourseItemCard
                                    key={item.key}
                                    title={t(item.label)}
                                    backgroundColor={item.backgroundColor}
                                    subTitle={item.subLabel?t(item.subLabel):''}
                                    content={item.content}
                                    target={item.target}
                                    duration={item.duration}
                                    students={item.students}
                                />
                            ))
                        }

                    </div>
                </section>
                <section id="regiter-section" className="flex xl:rounded-2xl overflow-hidden border border-[rgba(135,135,135,0.25)]">
                    <div className="w-1/2 pr-4 flex overflow-hidden">
                        <img src="/images/Course_Poster_Landscape.png" alt="PTE Edu" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-1/2 pl-4 py-4 pr-8">
                        <h2 className="text-2xl text-center font-bold mb-4 text-blue-500">Đăng ký nhận tư vấn miễn phí</h2>
                        <div>
                            <RegisterForm />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}