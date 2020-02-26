import React,{ Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Modal from './Modal'

class User extends Component {

    state = {
        shaowModal: 0
    }

    handleModalOpen = (value) =>{
        this.setState({
            shaowModal: value
        })
    }

    handleModalHide = (value) =>{
        this.setState({
            shaowModal: 0
        })
    }

    render(){

        const {users} = this.props

        const userList = users.map(user=>{
        return(
            <Grid item xs={6} sm={3} key={user.id}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Name: {user.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Address: {user.address}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="outlined" size="small" color="primary" onClick={()=>this.handleModalOpen(user.id)}>
                            Share
                        </Button>
                        <Modal 
                            show={this.state.shaowModal === user.id}
                            onHide={()=>this.handleModalHide(user.id)}
                            userName={user.name}
                            userId={user.id}
                            userHash={user.hash}
                            userPhone={user.number}
                            userEmail={user.email}
                        />
                    </CardActions>
                </Card>
            </Grid>
        )
    })    
        return (
            <Grid container spacing={3}>
                {userList}
            </Grid>
        )
    }
}

export default User