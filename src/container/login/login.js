import React from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from "react-redux";
import {loginApi} from "../../redux/user.redux";

@connect(
    state => state.user,
    {loginApi}
)
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
        }
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
    }

    register() {
        console.log(this.props);
        this.props.history.push('/register')
    }
    handleLogin() {
        this.props.loginApi(this.state)
        console.log(this.state);
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        return (
            <div>

                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
                        <InputItem onChange={v => this.handleChange('phone', v)} placeholder="请输入手机号">手机号</InputItem>
                        <InputItem onChange={v => this.handleChange('password', v)} type="password" placeholder="请输入密码">密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login
