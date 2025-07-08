export default function PtePage() {
    return (
        <div className="flex flex-col gap-12">
        <section className="relative overflow-hidden xl:rounded-2xl">
            <img src="/images/pte_landing.png" alt="PTE Edu" className="w-full h-auto" />
            <div className="absolute bottom-6 left-[calc(65%)]">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Đăng ký tư vấn
            </button>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course items will be dynamically rendered here */}
            </div>
        </section>
        <section id="regiter-section" className="flex xl:rounded-2xl overflow-hidden border border-[rgba(135,135,135,0.25)]">
            <div className="w-1/2 pr-4 flex overflow-hidden">
            <img src="/images/Course_Poster_Landscape.png" alt="PTE Edu" className="w-full h-auto object-cover" />
            </div>
            <div className="w-1/2 pl-4 py-4 pr-8">
            <h2 className="text-2xl text-center font-bold mb-4 text-blue-500">Đăng ký nhận tư vấn miễn phí</h2>
            <div>
                {/* Register form will be dynamically rendered here */}
            </div>
            </div>
        </section>
        </div>
    );
    }