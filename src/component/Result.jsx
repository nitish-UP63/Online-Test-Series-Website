import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DB from "./firebase";
import { doc, getDoc } from "firebase/firestore";


export default function Result(props) {
  const userdetail = useSelector((state) => state.set_user_data);
  const [score, setscore] = useState(0);
  const User_ans = useSelector((state) => state.set_user_ans);

  const [AllQuesans, setAllQues] = useState([
    // {
    //   quesNo: "21",
    //   ques: "hello",
    //   correctAns: "hi",
    // },
  ]);

  var Ques = [];
  var Ques1 = [];
  var answers = [];
  const [condition, setCondition] = useState(false);

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
    // viewques();
    // resultCalculator();
    // alert("fwuaie")
  }, []);

  

  function viewques() {
    Ques1.map((item) => {
      var temp1_ans="";
      User_ans.map((ans_item) => {
          if (ans_item.id === item.id) {
            temp1_ans = ans_item.val; 
            {
              ans_item.val === item.ans
                ? setscore((score) => score + 1)
                : setscore((score) => score - 1);
            }   
          }
        })
        setAllQues((AllQuesans) => [
          ...AllQuesans,
          {
            quesNo: item.id,
            ques: item.Question,
            correctAns: item.ans,
            checkedAnswer: temp1_ans,
          },
        ]);
      });
    }
  

  function resultCalculator() {
    viewques();
    setCondition(!condition);
  }

  return (
    <div>
      <div
        // className="row container rounded bg-white mt-5 mb-5"
        style={{ margin: 30 }}
      >
        <div className="row">
          <div className="col-md-4">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src= {userdetail.url ? userdetail.url : "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}
              />
              <br />
              <span className="font-weight-bold">{userdetail.name}</span>
            </div>
         </div>
          <div className="col-md-6">
            Your Score : {score} <br /> Total Score : 10
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <button onClick={resultCalculator} style={{marginLeft:0}} className="btn btn-primary btn-block">
              {" "}
              {condition ? <p>Hide Answer</p> : <p>Show Score</p>}{" "}
            </button>
            <br />
            <br />
            <br />
            <hr />
            {console.log("999", AllQuesans)}
            {console.log(answers)}
            {condition &&
              AllQuesans.map((element) => {
                console.log("bqbdiwu", element);
                return (
                  <div
                    key={element.quesNo}
                    
                    
                  > 
                    <p><b>Ques No. {element.quesNo}</b>:{" "} {element.ques} </p>
                     
                    <p>
                    <b >Correct Ans :</b>{"  "+element.correctAns} </p>
                    <p>
                    <b >Your Ans :</b>{"  "+element.checkedAnswer}</p>
                    <hr />
                       
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
