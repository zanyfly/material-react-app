import React, { Component } from 'react'
import { AppBar, Typography } from '@material-ui/core'
import Toolbar from "@material-ui/core/Toolbar";
import CreateFormDialog from '../Exercises/Dialog/CreateFormDialog'
export default (props) => {

    return (
        <AppBar position="static">
            <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant="h4">hello</Typography>
                <CreateFormDialog mainData={props.mainData} onDialogSubmit={props.onDialogSubmit}></CreateFormDialog>
            </Toolbar>
        </AppBar>)
}

