"use client";
import { Col, Form, Input, Row } from "antd";

 const customRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <>
      <span className="font-semibold text-[14px] whitespace-pre">{label}</span>
      {required && <span style={{ color: 'red', marginLeft: 4 }}>*</span>}
    </>
  );
export default function RegisterForm() {
    return (
        <Form name="register" autoComplete="off" layout="vertical" requiredMark={customRequiredMark} size="large">
            <Row gutter={16}>
                <Col xs={{ span: 24 }} md={{ span: 18 }}>
            <Form.Item label="Họ và tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}>
                <Input type="text" placeholder="Họ và tên của bạn" />
            </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 6 }}>
                <Form.Item label="Năm sinh" name="birthYear" rules={[{ required: true, message: 'Vui lòng nhập năm sinh' }]}>
                    <Input type="number" placeholder="Năm sinh" min={1970} max={2025} />
                </Form.Item>
                </Col>
            </Row>
            <Form.Item label="Email" name="email">
                <Input type="email" placeholder="Nhập email của bạn" />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}>
                <Input type="tel" placeholder="Nhập số điện thoại của bạn" />
            </Form.Item>
            <Form.Item>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                    Gửi thông tin
                </button>
            </Form.Item>
        </Form>
    );
}