import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import DB from "./firebase";
import { doc, getDoc } from "firebase/firestore";


export default function Result(props) {
    const [score,setscore] = useState(0);
    const User_ans= useSelector((state)=> state.set_user_ans);

    var Ques =[];

    useEffect(() => {
        getDoc(doc(DB, "question_paper", "JeeMain2021")).then((docSnap) => {
          if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            const { ques } = docSnap.data();
            Ques = ques;
          } else {
            console.log("No such document!");
          }
        });
      }, []);

var temp_ans = {};
    function resultCalculator(){
        console.log(Ques);
        console.log(User_ans);
        User_ans.map( (ans_item)  => {
            
            temp_ans = Ques.filter( (item)=> 
            { if(ans_item.id === item.id){
                console.log(ans_item.val,item.ans);
               
                {ans_item.val === item.ans ?  setscore(score => score+1) : setscore(score => score-1)}
            }
            } )
            
        })
        
    }
   

    return (
        <div>
            <div>
                <div>
                    <div>
                    <button onClick={resultCalculator} > View Score </button>
                        Score: {score}
                    </div>
                </div>
            </div>
        </div>
    )
}
