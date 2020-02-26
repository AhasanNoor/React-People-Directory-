import React, { Component } from 'react'
import { userData } from './data'
import User from './User'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default class UserList extends Component {
 
    state = {
        users: userData,
        loadingOne: false,
        loadingTwo: false
    }

    handlurrentPage = () =>{
        this.setState({
            users: userData
        })
    }

    handleFastPage = () =>{
        this.setState({
            users: userData.slice(0,4)
        })
    }

    handleNextFourItem = () =>{
        this.setState({
            users: userData.slice(0,8)
        })
    }

    handleQuick = () =>{
        this.setState({
            loadingOne: true
        })

        setTimeout(()=>{
            this.setState({
                loadingOne: false,
                users: userData.slice(0,12)
            })
        }, 500)
    }

    handleLazy = () =>{
        this.setState({
            loadingTwo: true
        })

        setTimeout(()=>{
            this.setState({
                loadingTwo: false,
                users: userData.slice(0,16)
            })
        }, 1000)
    }

    render() {

        const {users} = this.state
        const {loadingOne} = this.state
        const {loadingTwo} = this.state

        return (
            <div>
                <User users={users}/>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Button variant="outlined" size="small" color="primary" onClick={this.handlurrentPage}>
                            Load Current Page
                        </Button>
                        <Button variant="outlined" size="small" color="primary" onClick={this.handleFastPage}>
                            Load First page
                        </Button> 
                        <Button variant="outlined" size="small" color="primary" onClick={this.handleNextFourItem}>
                            Load Next Four Item
                        </Button> 
                        <Button variant="outlined" size="small" color="primary" onClick={this.handleQuick} disabled={loadingOne}>

                            { loadingOne && <p>loading....</p>}
                            {!loadingOne && 'Quick Load More Four Item'}

                        </Button> 
                        <Button variant="outlined" size="small" color="primary" onClick={this.handleLazy} disabled={loadingTwo}>
                            
                            { loadingTwo && <p>loading....</p>}
                            {!loadingTwo && 'Lazy Load More Four Item'}

                        </Button> 
                    </Grid>
                </Grid>
            </div>
        )
    }
}
