import React, { Component } from 'react';
import Contentful from '../API/Contentful'
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import { withRouter } from 'react-router';

import '../index.css'


class  BodyHome extends React.Component{
   constructor(props){
       super(props)

       this.state={
           arraryData:[],
           page:1
       }
   }
   componentDidMount(){
       Contentful().then((resolveData)=>{
           console.log(resolveData);
           this.setState({
               arraryData:resolveData.items,
               totalpage:Math.ceil(resolveData.total/resolveData.limit),
               page:1
           })
           console.log(this.state.arraryData);
           console.log(this.state.totalpage);
           console.log(this.state.page)

       })
   }
   PaginationChange(data){
       Contentful(data).then((resolveData)=>{
           console.log(resolveData);
           this.setState({
               arraryData:resolveData.items,
               totalpage:Math.ceil(resolveData.total/resolveData.limit),
               page:resolveData.skip
           })
           console.log(this.state.arraryData);
       })
   }
   moveToDetail(data,fieldData){
       this.props.history.push({
           pathname:`blogdetail/${data}`,
           state:fieldData
       })
   }

   render(){

   const MapList =()=>(
       <div>
       {this.state.arraryData.map((arrays)=><li key={arrays.fields.title} onClick={()=>this.moveToDetail(arrays.sys.id,arrays.fields)}>{arrays.fields.title}</li>)
   }
   </div>
   )
       return(
           <div>
               <MapList/>
               <div className="Pagination">
               <Pagination  total={this.state.totalpage*10} style={{ margin: '100px' }} current={this.state.skip}  onChange={(e)=>this.PaginationChange(e)} defaultCurrent={1} current={this.state.page} />,
               </div>

           </div>
       )
   }
}

export default withRouter(BodyHome)