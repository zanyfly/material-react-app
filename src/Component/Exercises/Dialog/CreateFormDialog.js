import React, { Fragment, Component } from 'react'
import {
    Dialog, 
    DialogTitle, 
    DialogContent, 
    Fab,
 } from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Form from '../Pub/Form'

class CreateFormDialog extends Component {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false })
    }
    onDialogSubmit = (obj)=>{
        this.props.onDialogSubmit(obj)
        this.handleClose()
    }

    render() {
        return (
            <Fragment>
                <Fab size="small" aria-label="add" color="secondary" onClick={this.handleClickOpen}>
                    <AddOutlinedIcon></AddOutlinedIcon>
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">custom program</DialogTitle>
                    <DialogContent>
                        <Form mainData={this.props.mainData} onDialogSubmit={this.onDialogSubmit}></Form>
                    </DialogContent>
     
                </Dialog>
            </Fragment>
        )
    }
}

export default CreateFormDialog
