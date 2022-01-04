import React, { useState, useEffect } from 'react'
import Question from "./Question.jsx"
import DB from "./firebase";
import {doc, getDoc } from "firebase/firestore";
import "./questionPage.css";
import { borderRadius } from '@mui/system';

export default function QuestionPage() {

    const [inst, setinst] = useState(false);
    const [ques, setques]= useState();
    const [tempques, settempques]= useState({
        Question: '',
        oA: '',
        oB: '',
        oC: '',
        oD: '',
        ans: '',
        id: 0
    })

    function previousQues(QuesNo) {
        if(QuesNo>1){
            QuesNo=QuesNo-2;
        settempques({ ...ques[QuesNo] })
        }
    }

    function nextQues(QuesNo) {
        if(QuesNo<ques.length)
        {
        settempques({ ...ques[QuesNo] })
        }
    }

    function finalSubmit(QuesNo) {

    }
    useEffect(() => {
        getDoc(doc(DB, "question_paper", "JeeMain2021")).then(docSnap => {
            if (docSnap.exists()) {
             // console.log("Document data:", docSnap.data());
              const {ques} = docSnap.data();
              console.log(ques);
              setques(ques);
              settempques({ ...ques[0] })
              console.log(tempques);
               
            } else {
              console.log("No such document!");
            }
          })
    }, [])


    return (
        <div>
            <div className='row d-flex justify-content-between align-items-center'>
             {inst ? <><div className='col-md-8 border-right d-flex flex-column' >
          { 
            <Question key={tempques.id} QuesNo={tempques.id} 
            Ques={tempques.Question}
             Option1={tempques.oA} Option2={tempques.oB} Option3={tempques.oC}
              Option4={tempques.oD} onClickNext={()=> nextQues(tempques.id)}
               onClickPrevious={()=> {previousQues(tempques.id)} }
                onClickSubmit={finalSubmit}/>
          }    
            </div>
            <div className='col-md-4 border-right flex-column' style={{marginTop: -50}}>
                <div  className="overflow-auto d-flex flex-row justify-content-start flex-wrap p-3 "  style={{backgroundColor:"#FEECE9" ,width:350,height:350,border:"2px solid black", borderRadius: 8 }}>
                { ques.map((item)=>{
                     return ( 
                    <button onClick={()=>{
                        settempques({...ques[item.id-1]})
                    }}  key={item.id} className="block">{item.id}</button> 
                     )
                })
                }
                
                </div>
            </div></> : <div>
                <div>
                <button onClick={ ()=> {setinst(true)}} type='button' className="btn outline-primary"
                     style={{ width: 100, height: 40, borderRadius: 3, fontWeight: 700, borderColor:"black" }} >Submit</button>
                </div>
            </div> }
            </div>
        </div>
    )
}
