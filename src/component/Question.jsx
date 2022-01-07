import React,{useState} from "react";

export default function Question(props) {
    
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

  function handleOnClickSubmit() {}

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
                src="data:image/jpeg;base64,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"
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
            >
              Previous
            </button>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-right text-center p-3 py-5">
            <button
              onClick={handleOnClickNext}
              className="btn btn-primary  btn-block"
              type="button"
            >
              Next
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


{
  /* onclick='displayAnswer1()' */
}
{
  /* <a id='showanswer1'></a> */
}
{
  /* <script>
  //    The function evaluates the answer and displays result
                function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
                    document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
                document.getElementById('result-11').innerHTML = 'Correct!'
    }
                if (document.getElementById('option-12').checked) {
                    document.getElementById('block-12').style.border = '3px solid red'
      document.getElementById('result-12').style.color = 'red'
                document.getElementById('result-12').innerHTML = 'Incorrect!'
                showCorrectAnswer1()
    }
                if (document.getElementById('option-13').checked) {
                    document.getElementById('block-13').style.border = '3px solid red'
      document.getElementById('result-13').style.color = 'red'
                document.getElementById('result-13').innerHTML = 'Incorrect!'
                showCorrectAnswer1()
    }
                if (document.getElementById('option-14').checked) {
                    document.getElementById('block-14').style.border = '3px solid red'
      document.getElementById('result-14').style.color = 'red'
                document.getElementById('result-14').innerHTML = 'Incorrect!'
                showCorrectAnswer1()
    }
  }
                // the functon displays the link to the correct answer
                function showCorrectAnswer1() {
                    let showAnswer1 = document.createElement('p')
                showAnswer1.innerHTML = 'Show Corrent Answer'
                showAnswer1.style.position = 'relative'
                showAnswer1.style.top = '-180px'
                showAnswer1.style.fontSize = '1.75rem'
                document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
                    document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
                document.getElementById('result-11').innerHTML = 'Correct!'
                document.getElementById('showanswer1').removeChild(showAnswer1)
    })
  }
            </script> */
}
