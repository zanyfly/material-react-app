import React, { Component, Fragment } from 'react'
import { Header, Footer, Content } from './Layouts'
import { mainData, detailData } from "../store.js"
import { CssBaseline } from '@material-ui/core'

export class App extends Component {

  state = {
    oneData: {}, //选中的数据
    detailData, //完整数据
    selectFooterData: "",
    isEdit:false
  }
  createData() {
    const mainLevel = mainData.reduce((resData, item) => {
      resData = {
        ...resData,
        [item]: []
      }
      return resData
    }, {})
    // console.log("mainLevel =" + mainLevel)

    return Object.entries(this.state.detailData.reduce((resData, item) => {
      resData[item.mainData] = [...resData[item.mainData], item]
      return resData
    }, mainLevel))

  }

  handleDetail = (id) => {
  
    this.setState((prevState) => (
      {
        ...prevState.detailData,
        oneData: prevState.detailData.find(item => item.id === id),
        isEdit: false
      }
    )
    )
  }

  handleDialogSubmit = (obj) => {
    // console.log(obj)
    //why use prevstate, maybe relative with the asyn handle.
    this.setState((prevState) => {
      return {
        detailData: [
          ...prevState.detailData,
          obj
        ]
      }
    })
  }

  handleFormUpdate = (obj) =>{
    console.log(obj)
    this.setState((prevState)=>{
      // ...prevState.detailData,
       return {
        detailData: [
          ...prevState.detailData.filter(item=>item.id !== obj.id),
          obj
        ]
       } 
    })
  }


  handleSelect = (item) => {
    this.setState({
      selectFooterData: item
    })
  }

  handleEdit = (id) =>{
    console.log("handleEdit " + id)
    this.setState((prevState)=>({
      ...prevState.detailData,
      oneData: prevState.detailData.find(item => item.id === id),
      isEdit: true
    }))
    // this.setState({
    //   isEdit:true
    // })
  }

  handleDelete = (id) => {
    console.log("handleDelete " + id)
    this.setState((prevState)=>({
      detailData: prevState.detailData.filter(item => item.id !== id),
    }))
  }

  render() {
    const newData = this.createData()
    console.log("newData =" + newData)
    return (
      <Fragment>
        <CssBaseline/>
        <Header mainData={mainData} onDialogSubmit={this.handleDialogSubmit}></Header>
        <Content
          mainData={mainData}
          newData={newData}
          selectedData={this.state.selectFooterData}
          onDetail={this.handleDetail}
          isEdit={this.state.isEdit}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
          oneData={this.state.oneData}
          onFormUpdate={this.handleFormUpdate}
          ></Content>
        <Footer mainData={mainData} selectedData={this.state.selectFooterData} onSelect={this.handleSelect}></Footer>
      </Fragment>
    )
  }
}

export default App
