"use client";
import { Card, Progress } from 'antd';
import { useTranslations } from 'next-intl';

type CourseItemCardProps = {
    title: string;
    children?: React.ReactNode;
    backgroundColor?: string;
    subTitle?: string;
    content?: Array<{ title: string; details: string[] }>;
    target: { type: string; value: string };
    duration?: string
    students?: string;
}
export default function OrcaCourseItemCard(props: CourseItemCardProps) {
    const t = useTranslations("pte")
    const cardTitle = props.title ?
        <div className={`text-lg text-white font-semibold flex gap-2 items-center h-10`}>
            <span className='bg-[url(/images/book-closed.svg)] w-8 h-8 bg-center bg-cover'></span>
            <span className='flex gap-1'>
                <span>{props.title}</span>
                {
                    props.subTitle ?
                        <span>{(' - ' + props.subTitle)}</span> : null
                }
            </span>
        </div>
        : null;
    // #region Content rendering
    const courseContent = () => {
        return (
            <div className='bg-white p-4 rounded-lg text-black'>
                <label className='flex items-center gap-2 pb-1 border-b border-gray-300'>
                    <span className='bg-[url(/images/content.svg)] w-4 h-4 bg-center bg-cover'></span>
                    <span className='font-semibold'>{t("content")}</span>
                </label>
                {
                    props.content && props.content.length > 0 ? (
                        props.content.map((item, index) => (
                            <div key={index} className='mt-2'>
                                <h3 className='text-sm font-semibold mb-3'>{t(item.title)}</h3>
                                <ul className='left-caret-list pl-5'>
                                    {item.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className='text-sm before:bg-[var(--content-color)]'>{t(detail)}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p className='text-sm'>{t("no_content")}</p>
                    )
                }
            </div>
        )
    }
    // #region target
    const courseTarget = () => {
        return (
            <div className='bg-white p-4 rounded-lg text-black'>
                <label className='flex items-center gap-2 pb-1 border-b border-gray-300'>
                    <span className='bg-[url(/images/target.svg)] w-4 h-4 bg-center bg-cover'></span>
                    <span className='font-semibold'>{t("target")}</span>
                </label>
                <div className='mt-2 font-bold text-center'>
                    {
                        (props.target?.type=="text") ?
                            <p className='text-sm text-left'>{t(props.target?.value || '')}</p>
                            :
                            <Progress
                                type="circle"
                                percent={100}
                                format={() => (
                                    <span className='text-lg'>                                        
                                        <span>
                                            {t(props.target?.value || '')}
                                        </span>                                        
                                    </span>
                                )}
                                steps={{ count: 5, gap: 7 }}
                                strokeColor={`var(--success-color)`}
                                trailColor="rgba(0, 0, 0, 0.06)"
                                strokeWidth={20}
                            />
                    }

                </div>
            </div>
        )
    }
    // endregion

    // #region duration
    const courseDuration = () => {
        return (
            <div className='bg-white p-4 rounded-lg text-black'>
                <label className='flex items-center gap-2 pb-1 border-b border-gray-300'>
                    <span className='bg-[url(/images/calendar.svg)] w-4 h-4 bg-center bg-cover'></span>
                    <span className='font-semibold'>{t("duration")}</span>
                </label>
                <div className='mt-2 font-bold'>
                    {props.duration ? t(props.duration) : ""}
                </div>
            </div>
        )
    }
    // endregion

    // #region students
    const courseStudents = () => {
        return (
            <div className='bg-white p-4 rounded-lg text-black'>
                <label className='flex items-center gap-2 pb-1 border-b border-gray-300'>
                    <span className='bg-[url(/images/student.svg)] w-4 h-4 bg-center bg-cover'></span>
                    <span className='font-semibold'>{t("students")}</span>
                </label>
                <div className='mt-2 font-bold'>
                    {props.students ? t(props.students) : ""}
                </div>
            </div>
        )
    }
    // endregion
    return (
        <Card hoverable={false} title={cardTitle} className={'courseCard'} style={{ backgroundColor: `var(${props.backgroundColor})` }} >
            <div className='text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
                {courseContent()}
                {courseTarget()}
                {courseDuration()}
                {courseStudents()}
            </div>
        </Card>
    );
}