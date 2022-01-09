import React, { useState, useEffect } from "react";
import Question from "./Question.jsx";
import DB from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import "./questionPage.css";
import Timer from "./Timer.jsx";
import { useNavigate } from "react-router-dom"; 
import Instructions from "./Instructions.jsx"
import { useSelector, useDispatch } from "react-redux";
import {Setscore} from '../actions/index';

export default function QuestionPage() {
  const dispatch= useDispatch();
    const navigate=useNavigate();
  const [inst, setinst] = useState(false);
  const [ques, setques] = useState([]);
  const [tempques, settempques] = useState({
    Question: "",
    oA: "",
    oB: "",
    oC: "",
    oD: "",
    ans: "",
    id: 0,
  });

  const [response, setResponse] = useState([]);
  
  
  

  function previousQues(QuesNo) {
    if (QuesNo > 1) {
      QuesNo = QuesNo - 2;
      settempques({ ...ques[QuesNo] });
    }
  }

  function nextQues(QuesNo) {
    if (QuesNo < ques.length) {
      settempques({ ...ques[QuesNo] });
    }
  }

  function optionClicked(optionSelected, quesNo) {
    console.log(optionSelected);
    console.log(quesNo);
    response[quesNo] = optionSelected;
    // console.log(answers[quesNo]);
    console.log(response[quesNo]);
    //   if(optionSelected === tempques.ans){
    //       x = 1;
    //   }else{
    //       x = -1;

    //   }';
  }

  useEffect(() => {
    getDoc(doc(DB, "question_paper", "JeeMain2021")).then((docSnap) => {
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        const { ques } = docSnap.data();
        console.log(ques);
        setques(ques);
        settempques({ ...ques[0] });
        console.log(tempques);
        
        
      } else {
        console.log("No such document!");
      }
    });

  }, []);

 var score = 0;
  function finalSubmit(){
    ques.map( (item , index) => {
        if(item.ans === response[index+1]){
            score = score +1;
        }else if(response[index+1]===null)
        {
          score=score;
        }
        else{
            score = score -1;
        }
        console.log("result" ,score);
    } )
    dispatch(Setscore(score));
    navigate("/result");
    }
    

 
  return (
    
    <div style={{ overflow: "hidden" }}>
    
      <div className="row d-flex justify-content-between align-items-center">
        {inst ? (
          <>
            <div
            
              className="col-md-2"
              style={{
                marginLeft: -250,
                marginBottom: -160,
                width: "100%",
                height: 32,
                // border: "solid",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Timer minutes={60} />
            </div>
            <div className="col-md-8 border-right d-flex flex-column">
              {
                <Question
                  key={tempques.id}
                  QuesNo={tempques.id}
                  Ques={tempques.Question}
                  Option1={tempques.oA}
                  Option2={tempques.oB}
                  Option3={tempques.oC}
                  Option4={tempques.oD}
                  QuesLength={ques.length}
                
                  img={require('../Images/quesimg.jpg')}
                  onClickNext={() => nextQues(tempques.id)}
                  optionChecked={optionClicked}
                  onClickPrevious={() => {
                    previousQues(tempques.id);
                  }}
                  onClickSubmit={finalSubmit}
                />
              }
            </div>
            <div
              className="col-md-4 border-right flex-column"
              style={{ marginTop: -50 }}
            >
              <div
                className="overflow-auto d-flex flex-row justify-content-start flex-wrap p-3 "
                style={{
                  backgroundColor: "#FEECE9",
                  width: 350,
                  height: 350,
                  border: "2px solid black",
                  borderRadius: 8,
                }}
              >
                {ques.map((item) => {
                  return (
                    <button
                    style ={{backgroundColor:"#CCD1E4"}}
                      onClick={() => {
                        
                        settempques({ ...ques[item.id - 1] });
                        
                      }}
                      key={item.id}
                      className="block"
                    >
                      {item.id}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div>
          <div className="row d-flex justify-content-center align-text-center p-3" style={{marginLeft:350,marginTop:50,marginBottom:50}}>
          <div >
              <Instructions/>
          </div>
            <div>
              <button
                onClick={() => {
                  setinst(true);
                }}
                type="button"
                className="btn outline-primary"
                style={{
                  width: 100,
                  height: 40,
                  borderRadius: 3,
                  fontWeight: 700,
                  borderColor: "black",
                }}
              >
               Start
              </button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
