interface OrcaCourse {
    label: string;
    description?: string;
    backgroundColor?: string;
}
interface MenuItem extends OrcaCourse {
    key: string;    
    isActive: boolean;
    disabled?: boolean;
    children?: MenuItem[];
}