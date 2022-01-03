import React from 'react'

export default function Question(props) {

    function handleOnClickPrevious(){

    }
    function handleOnClickNext(){
        props.onClickNext(props.QuesNo);

    }
    function handleOnClickSubmit(){

    }



    return (
        <div>
            <div style={{ transform: "scale(0.65)", position: "relative" }} >
                <h3>{props.QuesNo}.  {props.Ques}</h3>

                <hr />

                <div id='block-11' style={{ padding: 10}}>
                    <label style={{ padding: 5, fontSize: 21 }}>
                        <input type='radio' name='option' value='6/24' id='option-11' style={{ transform: "scale(1.6)", marginRight: 10, verticalAlign: "middle", marginTop: -2 }} />
                        {props.Option1}</label>
                    <span id='result-11'></span>
                </div>
                <hr />

                <div id='block-12' style={{ padding: 10 }}>
                    <label style={{ padding: 5, fontSize: 21 }}>
                        <input type='radio' name='option' value='6' id='option-12' style={{ transform: "scale(1.6)", marginRight: 10, verticalAlign: "middle", marginTop: -2 }} />
                        {props.Option2}</label>
                    <span id='result-12'></span>
                </div>
                <hr />

                <div id='block-13' style={{ padding: 10 }}>
                    <label style={{ padding: 5, fontSize: 21 }}>
                        <input type='radio' name='option' value='1/3' id='option-13' style={{ transform: "scale(1.6)", marginRight: 10, verticalAlign: "middle", marginTop: -2 }} />
                        {props.Option3}</label>
                    <span id='result-13'></span>
                </div>
                <hr />

                <div id='block-14' style={{ padding: 10 }}>
                    <label style={{ padding: 5, fontSize: 21 }}>
                        <input type='radio' name='option' value='1/6' id='option-14' style={{ transform: "scale(1.6)", marginRight: 10, verticalAlign: "middle", marginTop: -2 }} />
                        {props.Option4}</label>
                    <span id='result-14'></span>
                </div>
                <hr />
                <div className='row'>
                <div className='col-md-3 d-flex flex-column align-items-left text-center p-3 py-5' >
                <button onClick={handleOnClickPrevious} className="btn btn-primary profile-button" type="button">Previous</button></div>
                <div className='col-md-3 d-flex flex-column align-items-right text-center p-3 py-5' >
                <button onClick={handleOnClickNext} className="btn btn-primary profile-button" type="button">Next</button></div>
                
                </div>
                <button onClick={handleOnClickSubmit} type='button' className="btn outline-primary"
                     style={{ width: 100, height: 40, borderRadius: 3, fontWeight: 700, borderColor:"black" }} >Submit</button>
            </div>
        </div>

    )
}


// 
// 
// 
{/* for='option-11'
            for='option-12'
            for='option-13'
            for='option-14' */}
{/* onclick='displayAnswer1()' */ }
{/* <a id='showanswer1'></a> */ }
{/* <script>
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
            </script> */}

