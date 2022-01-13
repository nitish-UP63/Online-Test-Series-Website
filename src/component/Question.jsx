import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Setclearans, Setuserans } from "../actions/index";

export default function Question(props) {
  const User_ans = useSelector((state) => state.set_user_ans);
  const dispatch = useDispatch();

  var stateChange = true;
  if (stateChange === !stateChange) {
    User_ans.map((item) => {
      console.log("hii1",item.id, parseInt(props.QuesNo));
      if (item.id === parseInt(props.QuesNo)) {
        console.log("hii2",item);
        {
          document.getElementById(item.ansID).checked = true;
        }
        console.log("hii3",document.getElementById(item.ansID));
      }
    });
  }

  stateChange = !stateChange


  function han_change(event) {
    const { id, value } = event.target;
    console.log(value);
    console.log(props.QuesNo);
    dispatch(Setuserans(parseInt(props.QuesNo), id, value, true));
  }

  let x = false;
  let y = false;
  if (props.QuesNo == props.QuesLength) {
    y = true;
  }
  if (props.QuesNo < 2) {
    x = true;
  }

  useEffect(() => {
    updateOption();
  }, []);

  function updateOption() {
    User_ans.map((item) => {
      console.log(item.id, parseInt(props.QuesNo));
      if (item.id === parseInt(props.QuesNo)) {
        console.log(item);
        {
          document.getElementById(item.ansID).checked = true;
        }
        console.log(document.getElementById(item.ansID));
      }
    });
  }

  function handleOnClickNext() {
    props.onClickNext(props.QuesNo); 
  }

   function handleOnClickPrevious() {
     props.onClickPrevious(props.QuesNo);
    // User_ans.map((item) => {
    //   console.log(item.id, parseInt(props.QuesNo - 1));
    //   if (item.id === parseInt(props.QuesNo - 1)) {
    //     console.log(item);
    //     {
    //       document.getElementById(item.ansID).checked = true;
    //     }
    //     console.log(document.getElementById(item.ansID));
    //   }
    // });
  }

  function handleOnClickSubmit() {
    props.onClickSubmit();
  }

  function handleOnClickClear() {
    const temp = User_ans.filter((item) => {
      return item.id != props.QuesNo;
    });
    console.log(temp);
    document.getElementById("oA").checked = false;
    document.getElementById("oB").checked = false;
    document.getElementById("oC").checked = false;
    document.getElementById("oD").checked = false;
    dispatch(Setclearans(temp));
  }

  return (
    <div>
      <div style={{ transform: "scale(0.65)", position: "relative" }}>
        <h3>
          {props.QuesNo}. {props.Ques}
        </h3>

        <hr />

        <div className="row">
          <div className="col-md-6">
            <div id="block-11" style={{ padding: 10 }}>
              <label for="oA" style={{ padding: 5, fontSize: 21 }}>
                <input
                  type="radio"
                  name="option"
                  id="oA"
                  value={props.Option1}
                  onChange={han_change}
                  style={{
                    transform: "scale(1.6)",
                    marginRight: 10,
                    verticalAlign: "middle",
                    marginTop: -2,
                  }}
                />{" "}
                a. {props.Option1}
              </label>
              <span id="result-11"></span>
            </div>
            <hr />

            <div id="block-12" style={{ padding: 10 }}>
              <label for="oB" style={{ padding: 5, fontSize: 21 }}>
                <input
                  type="radio"
                  name="option"
                  id="oB"
                  value={props.Option2}
                  onChange={han_change}
                  style={{
                    transform: "scale(1.6)",
                    marginRight: 10,
                    verticalAlign: "middle",
                    marginTop: -2,
                  }}
                />{" "}
                b. {props.Option2}
              </label>
              <span id="result-12"></span>
            </div>
            <hr />

            <div id="block-13" style={{ padding: 10 }}>
              <label for="oC" style={{ padding: 5, fontSize: 21 }}>
                <input
                  type="radio"
                  name="option"
                  id="oC"
                  value={props.Option3}
                  onChange={han_change}
                  style={{
                    transform: "scale(1.6)",
                    marginRight: 10,
                    verticalAlign: "middle",
                    marginTop: -2,
                  }}
                />{" "}
                c. {props.Option3}
              </label>
              <span id="result-13"></span>
            </div>
            <hr />

            <div id="block-14" style={{ padding: 10 }}>
              <label for="oD" style={{ padding: 5, fontSize: 21 }}>
                <input
                  type="radio"
                  name="option"
                  id="oD"
                  value={props.Option4}
                  onChange={han_change}
                  style={{
                    transform: "scale(1.6)",
                    marginRight: 10,
                    verticalAlign: "middle",
                    marginTop: -2,
                  }}
                />{" "}
                d. {props.Option4}
              </label>
              <span id="result-14"></span>
            </div>
            <hr />
          </div>

          <div className="col-md-6 d-flex justify">
            <div style={{ margin: 100 }}>
              <img width={"250px"} height={"250px"} src={props.img} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 d-flex flex-column align-items-left text-center p- py-5">
            <button
              onClick={handleOnClickPrevious}
              className="btn btn-primary btn-block"
              type="button"
              disabled={x && true}
            >
              Previous
            </button>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-right text-center p-3 py-5">
            <button
              onClick={handleOnClickNext}
              className="btn btn-primary  btn-block"
              type="button"
              disabled={y && true}
            >
              Next
            </button>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-left text-center p- py-5">
            <button
              onClick={handleOnClickClear}
              className="btn btn-primary btn-block"
              type="button"
            >
              Clear option
            </button>
          </div>
        </div>
        <button
          onClick={handleOnClickSubmit}
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
          Submit
        </button>
      </div>
    </div>
  );
}
