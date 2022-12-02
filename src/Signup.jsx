import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const Signup = () => {
    const [userData, setuserData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    })
    const add = (event) => {
        const { name, value } = event.target
        setuserData((preValues) => {
            return {
                ...preValues,
                [name]: value
            }
        })
    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="signUp">
            <Form
                // name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 12,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your firstname !',
                        },
                    ]}
                >
                    <Input name="firstname"
                        value={userData.firstname}
                        onChange={add} />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your lastname!',
                        },
                    ]}
                >
                    <Input name="lastname"
                        value={userData.lastname}
                        onChange={add} />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input name="username"
                        value={userData.username}
                        onChange={add} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password name="password"
                        value={userData.password}
                        onChange={add} />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type='primary' htmlType='submit' >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <p>{userData.firstname}</p>
            <p>{userData.lastname}</p>
            <p>{userData.username}</p>
            <p>{userData.password}</p>
        </div>
    )
}

export default Signup