export const APP_TITLE = "Orca Edu";
export const COURSE_ITEMS: MenuItem[] = [
    {
        key: '1-1',
        label: 'pte',
        isActive: false,
        disabled: false,
        description: 'pte_description',
        backgroundColor: '--info',
    },
    {
        key: '1-2',
        label: 'pronunciation',
        isActive: false,
        disabled: false,
        description: 'pronunciation_description',
        backgroundColor: '--secondary',
    },
    {
        key: '1-3',
        label: 'ielts',
        isActive: false,
        disabled: true,
        description: 'ielts_description',
        backgroundColor: '--primary',
    },
    {
        key: '1-4',
        label: 'toeic',
        isActive: false,
        disabled: true,
        description: 'toeic_description',
        backgroundColor: '--success',
    },

    {
        key: '1-5',
        label: 'cll',
        isActive: false,
        disabled: true,
        description: 'cll_description',
        backgroundColor: '--ai-purple',
    },
]
export const MENU_ITEMS: MenuItem[] = [
    {
        key: '1',
        label: 'course',
        isActive: true,
        disabled: false,
        children: COURSE_ITEMS
    },
    {
        key: '2',
        label: 'test_input',
        isActive: false,
        disabled: true,
    },
    {
        key: '3',
        label: 'news',
        isActive: false,
        disabled: true,
    },
]
