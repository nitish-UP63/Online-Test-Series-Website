import React, { useState, useEffect } from "react";
import Question from "./Question.jsx";
import DB from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import "./questionPage.css";
import Timer from "./Timer.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import Instructions from "./Instructions.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Setscore } from "../actions/index";

export default function QuestionPage() {
  const location= useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const User_ans = useSelector((state) => state.set_user_ans);
  const [BGcolor ,setBGcolor] =useState(false);

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
  function finalSubmit() {
    navigate("/result");
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="row d-flex justify-content-between align-items-center">
        {inst ? (
          <>
            <div
              className="col-md-2 timer">
              <Timer minutes={180} onClickSubmit={finalSubmit}  />
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
                  // img={require("../Images/quesimg.jpg")}
                  onClickNext={() => nextQues(tempques.id)}
                //   optionChecked={optionClicked}
                  onClickPrevious={() => {
                    previousQues(tempques.id);
                  }}
                  onClickSubmit={finalSubmit}
                />
              }
            </div>
            <div
              className="col-md-4 border-right d-flex flex-row justify-content-center"
              style={{ marginTop: -70, marginBottom: 10 }}
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
                   <>
                    {/* {User_ans.map((item1) => {
                          if(item1.id === item.id){
                            setBGcolor(!BGcolor);
                          }
                        })} */}
                        
                    <button 
                      onClick={() => {
                        settempques({ ...ques[item.id - 1] });
                        
                      }}
                      style={{ backgroundColor: BGcolor ? "green" :"#CCD1E4" }}
                      key={item.id}
                      className="block"
                    >
                      {item.id}
                    </button>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div>
            <div
              className="row d-flex justify-content-center align-text-center p-3"
              style={{ marginLeft: 30, marginTop: 50, marginBottom: 50 }}
            >
              <div>
                <Instructions />
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
