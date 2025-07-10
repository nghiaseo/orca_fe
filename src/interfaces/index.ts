export interface OrcaCourse {
    label: string;
    description?: string;
    backgroundColor?: string;
}
export interface MenuItem extends OrcaCourse {
    key: string;    
    isActive: boolean;
    disabled?: boolean;
    children?: MenuItem[];
    href?: string;
}

export interface courseCardProps {
    title: string;
    children: React.ReactNode;
    backgroundColor?: string;
    active?: boolean;
    href?: string;
}