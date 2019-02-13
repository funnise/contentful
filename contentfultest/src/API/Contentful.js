import React, { Component } from 'react';
import * as contentful from 'contentful'

const Contentful=(skip,data)=>{
   var client = contentful.createClient({
       space: 'ef3p7q8jfski',
       accessToken: '5c0f08799fa328e907f3db4b5dedcb20f0c0c01ad3527bd4ac269f1ff9fd0744' })

       //contentfulで表示する
   return new Promise(function(resolve,reject){
       client.getEntries({
           order: 'sys.createdAt',
           'content_type': data,
           //1ページあたりのコンテンツ数
           'limit':2,
           //pagenationのページ
           'skip':skip
       }).then((entries) => {
           console.log(entries);
           resolve(entries)
         })
   })
}
export default Contentful