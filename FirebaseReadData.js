import React,{useState,useEffect} from 'react';
import firebase from "../firestore";


function useData(){
  const[All,setData]= useState([])
  useEffect(()=>{
    firebase
      .firestore()
      .collection("data")
      .onSnapshot((snapshot)=>{
        const newDatas= snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data()
        }))
        setData(newDatas)
      })
  },[])
  if(All.length !=0){
    return All;
  }
}



  const TopCollection =()=>{
  
  const data =useData();
  
  if(data != undefined){
    console.log(data)
    ))
  }
  }
