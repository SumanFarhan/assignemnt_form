import React, { useState, createContext, useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

// const authContext = createContext({ item: [], setItem: (item, userData) => { } })
// const ContextComponent = () => {
//     const [item, setItem] = useState([])
//     return <>
//         <authContext.Provider value={{ item, setItem }}>

//         </authContext.Provider>
//     </>
// }

// export default ContextComponent
 export const authContext = createContext({ item: [], setItem: (item,userData) => { }})
export default function ContextComponent() {
    const [item, setItem] = useState([])
    return <>
        <authContext.Provider value={{ item, setItem }}>
            <Signup/>
        </authContext.Provider>
    </>
}

export function Signup() {
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
    const { item, setItem } = useContext(authContext);
    const btn = () => {
        setItem(() => {
            return console.log([...item, userData])
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
            <Link to="/welcome">Dashboard</Link>
            <Form
                name="basic"
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
                    <Button type='primary' htmlType='submit' onClick={btn}>
                        Signup
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

// export default Signup