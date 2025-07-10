import OrcaMoreDetailButton from '../buttons/moreDetailButton';
import {Card} from 'antd';
import { useTranslations } from 'next-intl';
import { courseCardProps } from '@/interfaces';
export default function OrcaCourseCard({title, children,active=true, backgroundColor='',href}:courseCardProps) {       
    const t = useTranslations('home');
    const cardTitle = title ? <div className="text-lg text-white font-semibold">{title}</div> : null;
    return (
        <Card hoverable={true} title={cardTitle} className={'courseCard'} style={{backgroundColor:`var(${backgroundColor})`}} >
            <div className='flex flex-col items-end justify-between gap-4'>
            {children}
                {href&&<OrcaMoreDetailButton href={href} label={t('learn_more')} disabled={!active} />}
            </div>            
        </Card>
    );
}