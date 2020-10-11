import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    withStyles
} from '@material-ui/core'

const useStyles = (theme) => ({
    formClass: {
        width: 300
    },
    myEmptyRow: {
        marginTop: theme.spacing(2)
    }
})

export default withStyles(useStyles)(
    class Form extends Component {

        // state = {
        //     oneData: {
        //         title: '',
        //         detail: '',
        //         mainData: ''
        //     }
        // }

        constructor(props) {
            super()
            this.state = this.initState(props)
        }

        initState(props) {

            if (props.isEdit) {
                return {
                    oneData: props.oneData
                }
            } else {
                return {
                    oneData: {
                        title: '',
                        detail: '',
                        mainData: ''
                    }
                }
            }
        }

        //控制props外部变化引起state变化
        static getDerivedStateFromProps(nextProps, prevState){
            if(nextProps.oneData){
                if(nextProps.oneData.id !== prevState.oneData.id){
                    return nextProps
                }  
            }
           return null
        }

        handleChange = (tag) => {
            return e => {
                // console.log(this.state.oneData)
                this.setState({
                    oneData: {
                        ...this.state.oneData,
                        [tag]: e.target.value
                    }
                })
            }
        }

        handleSubmit = () => {
            console.log(this.state.oneData)
            this.props.onDialogSubmit({
                ...this.state.oneData,
                id: this.state.oneData.title.toLocaleLowerCase().replace(/ /g, '-')
            })
        }

        handleUpdate = ()=>{
            this.props.onFormUpdate(
                this.state.oneData)
        }

        render() {
            return (
                <Fragment>
                    <form className={this.props.classes.formClass}>
                        <TextField
                            className={this.props.classes.FormControl + " " + this.props.classes.myEmptyRow}
                            autoFocus
                            margin="dense"
                            label="TITLE"
                            variant="outlined"
                            value={this.state.oneData.title}
                            onChange={this.handleChange('title')}
                            fullWidth
                        />
                        <TextField
                            className={this.props.classes.FormControl + " " + this.props.classes.myEmptyRow}
                            margin="dense"
                            label="detail"
                            variant="outlined"
                            value={this.state.oneData.detail}
                            onChange={this.handleChange('detail')}
                            fullWidth
                        />

                        <FormControl variant="outlined" className={this.props.classes.FormControl + " " + this.props.classes.myEmptyRow}>
                            <InputLabel id="demo-simple-select-outlined-label">program</InputLabel>
                            <Select
                                value={this.state.oneData.mainData}
                                onChange={this.handleChange('mainData')}
                                label="program"
                            >{
                                    this.props.mainData.map((item, index) => {
                                        return (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>


                    </form>
                    <br />
                    {
                        this.props.isEdit ?
                            <Button variant="contained" onClick={this.handleUpdate} color="primary">
                                update
                        </Button>
                            :
                            <Button variant="contained" onClick={this.handleSubmit} color="primary">
                                Submit
                        </Button>

                    }
                </Fragment>
            )
        }
    }
)
