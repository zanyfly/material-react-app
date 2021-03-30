import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import { mainData } from '../../store'

export default function Footer(props) {
    const index = props.selectedData === "" ? 0 : mainData.findIndex((data) => data === props.selectedData) + 1

    return (
        <Tabs
            style={{position:'fixed', bottom: 0, width: '100%'}}
            value={index}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            onChange={(item, index) => {
                //   console.log(item)
                props.onSelect(index === 0 ? "" : mainData[index - 1])
            }}>
            <Tab label="全部"></Tab>
            {props.mainData.map((data, i) =>
                <Tab key={i} label={data}></Tab>
            )}
        </Tabs>
    )

}
