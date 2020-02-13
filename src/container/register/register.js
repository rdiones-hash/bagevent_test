import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import '../../index.css'

@connect(
    state => state.user,
    {register}
)
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'boss',
        }
        this.handleRegister = this.handleRegister.bind(this)
        this.login = this.login.bind(this);
    }

    login(){
        console.log(this.props);
        this.props.history.push('/login')
    }
    handleRegister() {
        this.props.register(this.state)
        console.log(this.state);
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
                        <InputItem onChange={v => this.handleChange('user', v)} placeholder="请输入手机号">手机号：</InputItem>
                        <InputItem onChange={v => this.handleChange('pwd', v)} type="password" placeholder="请输入密码">密 码：</InputItem>
                        <InputItem onChange={v => this.handleChange('repeatpwd', v)} type="password" placeholder="请确认密码">确认密码：</InputItem>
                        <WhiteSpace/>
                        <RadioItem onChange={() => this.handleChange('type', 'boss')}
                                   checked={this.state.type === 'boss'}>
                            主管
                        </RadioItem>
                        <RadioItem onChange={() => this.handleChange('type', 'worker')}
                                   checked={this.state.type === 'worker'}>
                            员工
                        </RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                    <WhiteSpace/>
                    <Button onClick={this.login} type="primary">返回</Button>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        )
    }
}

export default Register
