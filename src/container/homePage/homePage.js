import React from 'react'
import {List, WingBlank, WhiteSpace} from 'antd-mobile'
import {connect} from "react-redux";

@connect(
    state => state.user,
)
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <div>
                <WingBlank>
                    <List>
                        <p className="error-msg">{"欢迎!"}</p>

                    </List>
                    <WhiteSpace/>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        )
    }
}

export default Login
