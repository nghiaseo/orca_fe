import { ArrowRightOutlined } from "@ant-design/icons";
type buttonProps = {
    label?: string;
    disabled?: boolean;
}

export default function OrcaMoreDetailButton({ label = "Xem chi tiết",disabled=false }: buttonProps) {
    return (
        <button disabled={disabled}            
            className={`px-4 py-2 ${disabled ? 'cursor-default pointer-events-none bg-gray-300 text-gray-500 border-transparent' : 'cursor-pointer border-white bg-blue-500 text-white hover:bg-blue-600'} rounded-3xl border  transition-colors border-2`}
        >
            <span className="flex items-center gap-2">
                <span>{label}</span>
                <ArrowRightOutlined />
            </span>
        </button>
    );
}