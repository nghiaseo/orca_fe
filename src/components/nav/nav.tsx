const items = [
    {
        key: '1',
        label: 'Home'
    },
    {
        key: '2',
        label: 'About',
    },
    {
        key: '3',
        label: 'Contact',
    },
]

export default function OrcaNav() {
    return (
        <nav className="flex items-center justify-center">
            <ul className="flex space-x-10">
                {items.map(item => (
                    <li key={item.key} className="font-bold text-[18px] hover:text-blue-500 hover:cursor-pointer">
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
}