export const APP_TITLE = "Orca Edu";
export const COURSE_ITEMS:MenuItem[] = [
            {
                key:'1-1',
                label:'IELTS',
                isActive: false,
                disabled: true,
                description: 'Khóa học IELTS tại Orca Edu giúp bạn nâng cao kỹ năng nghe, nói, đọc, viết tiếng Anh để đạt điểm cao trong kỳ thi IELTS. Đội ngũ giảng viên giàu kinh nghiệm sẽ hướng dẫn bạn từng bước để chinh phục kỳ thi này.',
                backgroundColor:'--primary',
            },
            {
                key:'1-2',
                label:'TOEIC',
                isActive: false,
                disabled: true,
                description: 'Khóa học TOEIC tại Orca Edu giúp bạn cải thiện kỹ năng tiếng Anh giao tiếp và làm việc trong môi trường quốc tế. Chương trình học được thiết kế phù hợp với nhu cầu của người học, từ cơ bản đến nâng cao.',
                backgroundColor:'--success',
            },
            {
                key:'1-3',
                label:'PTE',
                isActive: false,
                disabled: false,
                description: 'Khóa học PTE tại Orca Edu cung cấp cho bạn kiến thức và kỹ năng cần thiết để đạt điểm cao trong kỳ thi PTE. Chương trình học bao gồm các bài tập thực hành, mô phỏng kỳ thi và hướng dẫn từ giảng viên chuyên nghiệp.',
                backgroundColor:'--info',
            },
            {
                key:'1-4',
                label:'CLL',
                isActive: false,
                disabled: true,
                description: 'Khóa học CLL (Cambridge Language Learning) tại Orca Edu giúp bạn nâng cao kỹ năng tiếng Anh thông qua các bài học tương tác và thực hành. Chương trình học được thiết kế để phù hợp với nhu cầu của từng học viên, từ cơ bản đến nâng cao.',
                backgroundColor:'--ai-purple',
            },
        ]
export const MENU_ITEMS:MenuItem[] = [
    {
        key: '1',
        label: 'Khoá học',
        isActive: true,
        disabled: false,
        children: COURSE_ITEMS
    },
    {
        key: '2',
        label: 'Kiểm tra đầu vào',
        isActive: false,
        disabled: true,        
    },
    {
        key: '3',
        label: 'Tin tức',
        isActive: false,
        disabled: true,
    },
]
