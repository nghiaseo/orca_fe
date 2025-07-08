import OrcaMoreDetailButton from '../buttons/moreDetailButton';
import styles from './courseCard.module.css';
import {Card} from 'antd';
type courseCardProps = {
    title: string;
    children: React.ReactNode;
    backgroundColor?: string;
    active?: boolean;
}
export default function OrcaCourseCard({title, children,active=true, backgroundColor=''}:courseCardProps) {       
    const cardTitle = title ? <div className="text-lg text-white font-semibold">{title}</div> : null;
    return (
        <Card hoverable={true} title={cardTitle} className={'courseCard'} style={{backgroundColor:`var(${backgroundColor})`}} >
            <div className='flex flex-col items-end justify-between gap-4'>
            {children}
                <OrcaMoreDetailButton label="Tìm hiểu thêm" disabled={!active} />
            </div>            
        </Card>
    );
}