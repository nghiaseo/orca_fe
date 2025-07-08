import OrcaMoreDetailButton from '../buttons/moreDetailButton';
import {Card} from 'antd';
import { useTranslations } from 'next-intl';
type courseCardProps = {
    title: string;
    children: React.ReactNode;
    backgroundColor?: string;
    active?: boolean;
}
export default function OrcaCourseCard({title, children,active=true, backgroundColor=''}:courseCardProps) {       
    const t = useTranslations('home');
    const cardTitle = title ? <div className="text-lg text-white font-semibold">{title}</div> : null;
    return (
        <Card hoverable={true} title={cardTitle} className={'courseCard'} style={{backgroundColor:`var(${backgroundColor})`}} >
            <div className='flex flex-col items-end justify-between gap-4'>
            {children}
                <OrcaMoreDetailButton label={t('learn_more')} disabled={!active} />
            </div>            
        </Card>
    );
}