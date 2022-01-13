import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DB from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Result(props) {
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
          <div className="col-md-6">Name - Hello</div>
          <div className="col-md-6">
            Your Score - {score} <br /> Total Score - 10
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <button onClick={resultCalculator}>
              {" "}
              {condition ? <p>Hide Answer</p> : <p>Show Answer</p>}{" "}
            </button>
            {console.log("999", AllQuesans)}
            {console.log(answers)}
            {condition &&
              AllQuesans.map((element) => {
                console.log("bqbdiwu", element);
                return (
                  <div
                    key={element.quesNo}
                    className="d-flex"
                    style={{
                      padding: 20,
                      border: "solid",
                      backgroundColor: "red",
                      borderColor: "black",
                    }}
                  >
                    <p>Ques No. {element.quesNo}</p>
                    <br />
                    <p>{element.ques}</p>
                    <br />
                    <p>Correct Ans - {element.correctAns}</p>
                    <p>Your Ans - {element.checkedAnswer}</p>
                  </div>
                );
              })}

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
