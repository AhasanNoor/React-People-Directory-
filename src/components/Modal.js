import React, { Component } from 'react'
import './modal.css'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default class Modal extends Component {

    state = {
        phone: 'click to view',
        email: 'Click to view'
    }

    handlePhone = () =>{
        this.setState({
            phone: this.props.userPhone
        })
    }

    handleEmail = () =>{
        this.setState({
            email: this.props.userEmail
        })
    }

    render() {
        return (
            <div>
                {this.props.show && (
                    <div className="modal">
                        <Typography gutterBottom variant="h5" component="h2">
                            Id: {this.props.userId}
                        </Typography>
                        <div className="custom-border">
                            <Typography gutterBottom variant="h5" component="h2">
                                Hash: {this.props.userHash}
                            </Typography>
                        </div>
                        <div className="phone-email">
                            <div className="phone">
                                <Typography variant="body2" color="textSecondary" component="p" onClick={this.handlePhone}>
                                    {/* Phone: {this.props.userPhone} */}
                                    Phone: {this.state.phone}
                                </Typography>
                            </div>
                            <div className="email">
                                <Typography variant="body2" color="textSecondary" component="p" onClick={this.handleEmail}>
                                    Email: {this.state.email}
                                </Typography>
                            </div>
                        </div>
                        <Button onClick={this.props.onHide} size="large" color="secondary" className="custom-btn">
                            X
                        </Button>
                    </div>
                )}
            </div>
        )
    }
}
