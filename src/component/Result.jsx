import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DB from "./firebase";
import { doc, getDoc } from "firebase/firestore";


export default function Result(props) {
  const [score, setscore] = useState(0);
  const User_ans = useSelector((state) => state.set_user_ans);

  const [ AllQuesans,setAllQues ] = useState([]);

  var Ques = [];
  var Ques1;
  

  useEffect(() => {
    getDoc(doc(DB, "question_paper", "JeeMain2021")).then((docSnap) => {
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        const { ques } = docSnap.data();
        Ques = ques;
        Ques1 = ques;
      } else {
        console.log("No such document!");
      }
    });
    // resultCalculator();
    // alert("fwuaie")
  }, []);

 async function viewques(){
  await  Ques1.map((item) => {
      setAllQues( (AllQuesans) => [...AllQuesans , {quesNo:item.id,ques:item.Question,correctAns:item.ans}])
    })
    // console.log("helo", AllQuesans);
  }

  var temp_ans = {};
  async function resultCalculator() {
  await  viewques();
  console.log("helo", AllQuesans);
    alert("resultcal")
    console.log(Ques);
    console.log(User_ans);
    User_ans.map((ans_item) => {
      temp_ans = Ques.filter((item) => {
        if (ans_item.id === item.id) {
          console.log("1");
          console.log(AllQuesans);
          AllQuesans.map( (item1) => {
            console.log("2");
            if(item1.quesNo === ans_item.id){
              console.log("3");
              setAllQues( (item1) => [...item1 , {checkedAns:ans_item.val}])
            }
          })
          console.log(ans_item.val, item.ans);

          {
            ans_item.val === item.ans
              ? setscore((score) => score + 1)
              : setscore((score) => score - 1);
          }
        }
      });
    });
  }

  return (
    <div>
      <div
        // className="row container rounded bg-white mt-5 mb-5"
        style={{ margin: 30 }}
      >
        <div className="row">
          <div className="col-md-6">Name - Hello</div>
          <div className="col-md-6">Your Score - {score}  <br />  Total Score - 10</div>
          
        </div>
        </div>
        <div>
        <div>
        <div>
        <button onClick={resultCalculator}> View Answer </button>
        {AllQuesans.map( (element) => {
            console.log( "bqbdiwu",element)
            return ( <div key={element.quesNo} className="d-flex" style={{padding:20,border:"solid",backgroundColor:"red", borderColor:"black"}}>
              
               <p>{element.quesNo}</p>
               <p>{element.ques}</p>
               <p>{element.correctAns}</p>
               <p>{element.checkedAns}</p>
               
            </div>   
        );
        } )}
        
             {/* {
                 Ques.map((item1) => {
            alert("hi")
            console.log( "bqbdiwu",item1)
            return(
            <div className="d-flex" style={{padding:20,height:25,width:40,border:"solid",backgroundColor:"red", borderColor:"black"}}>
                Ques No . - {item1.id}
                {item1.Question}
                Correct Answer - {item1.ans}
                Your Answer -  
                <hr />
                <br />
            </div>   
        );
        }) } */}
        {/* {alert("last")} */}
        </div>
        </div>
      </div>
    </div>
  );
}
