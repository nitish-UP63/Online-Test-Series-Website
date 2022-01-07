import React,{useState} from "react";

export default function Question(props) {

    let x = false;
    let y = false;
    if(props.QuesNo == props.QuesLength){
        y=true;
    }
    if(props.QuesNo < 2){
        x=true;
    }
    
    
  function handleOnClickNext() {

    
    if(document.getElementById("oA").checked){
        props.optionChecked(props.Option1,props.QuesNo);
    }
    if(document.getElementById("oB").checked){
        props.optionChecked(props.Option2,props.QuesNo);
    }
    if(document.getElementById("oC").checked){
        props.optionChecked(props.Option3,props.QuesNo);
    }
    if(document.getElementById("oD").checked){
        props.optionChecked(props.Option4,props.QuesNo);
    }
    props.onClickNext(props.QuesNo);
  }
   

  function handleOnClickPrevious() {

    if(document.getElementById("oA").checked){
        props.optionChecked(props.Option1,props.QuesNo);
    }
    if(document.getElementById("oB").checked){
        props.optionChecked(props.Option2,props.QuesNo);
    }
    if(document.getElementById("oC").checked){
        props.optionChecked(props.Option3,props.QuesNo);
    }
    if(document.getElementById("oD").checked){
        props.optionChecked(props.Option4,props.QuesNo);
    }
    props.onClickPrevious(props.QuesNo);
  }

  function handleOnClickSubmit() {
      
    if(document.getElementById("oA").checked){
        props.optionChecked(props.Option1,props.QuesNo);
    }
    if(document.getElementById("oB").checked){
        props.optionChecked(props.Option2,props.QuesNo);
    }
    if(document.getElementById("oC").checked){
        props.optionChecked(props.Option3,props.QuesNo);
    }
    if(document.getElementById("oD").checked){
        props.optionChecked(props.Option4,props.QuesNo);
    }
      props.onClickSubmit();
  }

  function handleOnClickClear(){
        document.getElementById("oA").checked = false;
        document.getElementById("oB").checked = false;
        document.getElementById("oC").checked = false;
        document.getElementById("oD").checked = false;
  }

  return (
    <div>
    <div>
      <div style={{ transform: "scale(0.65)", position: "relative" }}>
        <h3>
          {props.QuesNo}. {props.Ques}
        </h3>

        <hr />

        <div className="row">
          <div className="col-md-6">
            <div id="block-11" style={{ padding: 10 }}>
              <label for='oA' style={{ padding: 5, fontSize: 21 }}>
                <input
                  type="radio"
                  name="option"
                  id="oA"
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
              <label for='oB' style={{ padding: 5, fontSize: 21 }}>
                <input
                  type="radio"
                  name="option"
                  id="oB"
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
              <label for='oC' style={{ padding: 5, fontSize: 21 }}>
                <input
                  type="radio"
                  name="option"
                  id="oC"
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
              <label for='oD' style={{ padding: 5, fontSize: 21 }}>
                <input
                  type="radio"
                  name="option"
                  id="oD"
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
              <img
                width={"250px"}
                height={"250px"}
                src={props.img}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 d-flex flex-column align-items-left text-center p- py-5">
            <button
              onClick={handleOnClickPrevious}
              className="btn btn-primary btn-block"
              type="button"
              disabled = {x && true}
            >
              Previous
            </button>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-right text-center p-3 py-5">
            <button
              onClick={handleOnClickNext}
              className="btn btn-primary  btn-block"
              type="button"
              disabled = { y && true}
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
    </div>
  );
}




