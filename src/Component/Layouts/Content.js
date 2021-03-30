import React, { Component } from 'react'
import { Grid } from "@material-ui/core";
import LeftPane from "../Exercises/LeftPane.js"
import RightPane from "../Exercises/RightPane.js"

const styles = {
    paper: {
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        height: '100%'
    }
}
export class Content extends Component {
    render() {
        return (
            <Grid container spacing={5}>
                <Grid item sm>
                    <LeftPane
                        newData={this.props.newData}
                        selectedData={this.props.selectedData}
                        styles={styles}
                        onDelete={this.props.onDelete}
                        onDetail={this.props.onDetail}
                        onEdit={this.props.onEdit}
                    ></LeftPane>
                </Grid>
                <Grid item sm>
                    <RightPane styles={styles} oneData={this.props.oneData} isEdit={this.props.isEdit} mainData={this.props.mainData}
                        onFormUpdate={this.props.onFormUpdate}></RightPane>
                </Grid>
            </Grid>
        )
    }
}

export default Content
