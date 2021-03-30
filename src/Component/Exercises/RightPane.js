import React, { Fragment } from 'react'
import { Paper, Typography } from "@material-ui/core";
import Form from './Pub/Form'

export default (props) => {
    const { styles, oneData, isEdit, mainData, onFormUpdate } = props
    return (
        <Paper style={styles.paper}>
            {
                JSON.stringify(oneData) !== '{}' ?
                    (isEdit ?
                        <Form mainData={mainData} oneData={oneData} onFormUpdate={onFormUpdate} isEdit={isEdit}></Form>
                        :
                        <Fragment>
                            <Typography variant='h6'>{oneData.title}</Typography>
                            <Typography variant='body1' style={{ marginTop: 20 }}>{oneData.id}</Typography>
                            <Typography variant='body1' style={{ marginTop: 20 }}>{oneData.detail}</Typography>
                        </Fragment>
                    )
                    :
                    <Fragment>
                        <Typography variant='h6'>欢迎使用</Typography>
                    </Fragment>

            }
        </Paper>
    )
}

