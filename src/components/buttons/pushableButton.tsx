
export default function PushableButton(props: { label: string }) {
    return (
        <button className="pushable">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front font-bold">{props.label}</span>
        </button>
    );
}