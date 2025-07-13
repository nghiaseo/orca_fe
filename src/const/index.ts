import { MenuItem } from "@/interfaces";

export const APP_TITLE = "Orca Edu";
// #region Course Items
export const COURSE_ITEMS: MenuItem[] = [
    {
        key: '1-1',
        label: 'pte',
        isActive: false,
        disabled: false,
        description: 'pte_description',
        backgroundColor: '--pte-main-color',
        href: '/pte',
    },
    {
        key: '1-2',
        label: 'pronunciation',
        isActive: false,
        disabled: false,
        description: 'pronunciation_description',
        backgroundColor: '--pronunciation-main-color',
        href: '/pronunciation',
    },
    {
        key: '1-3',
        label: 'ielts',
        isActive: false,
        disabled: true,
        description: 'ielts_description',
        backgroundColor: '--ielts-main-color',
        href: '/ielts',
    },
    {
        key: '1-4',
        label: 'toeic',
        isActive: false,
        disabled: true,
        description: 'toeic_description',
        backgroundColor: '--toeic-main-color',
        href: '/toeic',
    },

    {
        key: '1-5',
        label: 'cll',
        isActive: false,
        disabled: true,
        description: 'cll_description',
        backgroundColor: '--cll-purple-main-color',
        href: '/cll',
    },
]
//#region Menu Items
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

// #region PTE Course Items
export const PTE_COURSE_ITEMS = [
    {
        key: 'pte-1',
        label: 'pte_foundation',
        subLabel: 'pte_foundation_subtitle',
        description: 'pte_foundation_description',
        backgroundColor: '--pte-main-color',
        content: [
            {
                title: 'pte_foundation_content_1',
                details: [
                    'pte_foundation_content_1_detail_1',
                    'pte_foundation_content_1_detail_2'
                ]
            }
        ],
        target:{          
            type: '',  
            value: 'pte_foundation_target'
        },
        duration: 'pte_foundation_duration',
        students: 'pte_foundation_students'
    },
    {
        key: 'pte-2',
        label: 'pte_30',
        subLabel: 'pte_30_subtitle',
        description: 'pte_30_description',
        backgroundColor: '--pte-main-color',
        content: [
            {
                title: 'pte_30_content_1',
                details: [
                    'pte_30_content_1_detail_1',
                    'pte_30_content_1_detail_2',
                    'pte_30_content_1_detail_3'
                ]
            }
        ],
        target:{            
            type: '',  
            value: 'pte_30_target'
        } ,
        duration: 'pte_30_duration',
        students: 'pte_30_students'
    },
    {
        key: 'pte-3',
        label: 'pte_50',
        subLabel: 'pte_50_subtitle',
        description: 'pte_50_description',
        backgroundColor: '--pte-main-color',
        content: [
            {
                title: 'pte_50_content_1',
                details: [
                    'pte_50_content_1_detail_1',
                    'pte_50_content_1_detail_2'
                ]
            }
        ],
        target:{        
            type: '',      
            value: 'pte_50_target'
        },
        duration: 'pte_50_duration',
        students: 'pte_50_students'
    },
    {
        key: 'pte-4',
        label: 'pte_79',
        subLabel: 'pte_79_subtitle',
        description: 'pte_79_description',
        backgroundColor: '--pte-main-color',
        content: [
            {
                title: 'pte_79_content_1',
                details: [
                    'pte_79_content_1_detail_1',
                    'pte_79_content_1_detail_2'
                ]
            }
        ],
        target: {           
            type: '',   
            value: 'pte_79_target'
        },
        duration: 'pte_79_duration',
        students: 'pte_79_students'
    },
    {
        key: 'pte-5',
        label: 'pte_intensive',
        description: 'pte_intensive_description',
        backgroundColor: '--pte-main-color',
        content: [
            {
                title: 'pte_intensive_content_1',
                details: []
            }
        ],
        target: {
            type: 'text',
            value:'pte_intensive_target'
        },
        duration: 'pte_intensive_duration',
        students: 'pte_intensive_students'
    }
]
