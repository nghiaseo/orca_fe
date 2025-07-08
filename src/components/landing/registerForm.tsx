"use client";
import { useTranslations } from "next-intl";
import { Col, Form, Input, Row } from "antd";

 const customRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <>
      <span className="font-semibold text-[14px] whitespace-pre">{label}</span>
      {required && <span style={{ color: 'red', marginLeft: 4 }}>*</span>}
    </>
  );
export default function RegisterForm() {
    const t = useTranslations('home');
    return (
        <Form name="register" autoComplete="off" layout="vertical" requiredMark={customRequiredMark} size="large">
            <Row gutter={16}>
                <Col xs={{ span: 24 }} md={{ span: 18 }}>
            <Form.Item label={t('full_name')} name="name" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}>
                <Input type="text" placeholder={t('placeholder_full_name')} />
            </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 6 }}>
                <Form.Item label={t('birth_year')} name="birthYear" rules={[{ required: true, message: 'Vui lòng nhập năm sinh' }]}>
                    <Input type="number" placeholder={t('placeholder_birth_year')} min={1970} max={2025} />
                </Form.Item>
                </Col>
            </Row>
            <Form.Item label={t('email')} name="email">
                <Input type="email" placeholder={t('placeholder_email')} />
            </Form.Item>
            <Form.Item label={t('phone_number')} name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}>
                <Input type="tel" placeholder={t('placeholder_phone_number')} />
            </Form.Item>
            <Form.Item>
                <button type="submit" className=" cursor-pointer w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                    {t('submit')}
                </button>
            </Form.Item>
        </Form>
    );
}