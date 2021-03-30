import React, { Fragment } from 'react'

import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { DeleteOutlineOutlined, EditOutlined } from '@material-ui/icons';

export default (props) => {
    const { styles, newData, onDetail, selectedData, onDelete, onEdit } = props
    return (
        <Paper style={styles.paper}>
            {newData.map((item, index) =>
                (selectedData === "" || item[0] === selectedData) ?
                    <Fragment key={"main" + index}>
                        <Typography variant="h5">{item[0]}</Typography>
                        <List key={"L" + index}>
                            {
                                item[1].map((detailItem, j) =>
                                    <ListItem button onClick={() => onDetail(detailItem.id)} key={"L" + j}>
                                        <ListItemText>
                                            {detailItem.title + " " + detailItem.detail}
                                        </ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="Edit" onClick={() => onEdit(detailItem.id)}>
                                                <EditOutlined></EditOutlined>
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(detailItem.id)}>
                                                <DeleteOutlineOutlined></DeleteOutlineOutlined>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )
                            }
                        </List>
                    </Fragment>
                    :
                    null
            )}
        </Paper>
    )
}

