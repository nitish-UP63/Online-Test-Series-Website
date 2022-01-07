import React from "react";

export default function Instructions() {
  return (
    <div className="col-md-8">
      <div>
        <h1>Instructions</h1><br />
      </div>
      <div>
        <ul>
          <li>Total number of questions : 20</li>
          <li>Each question carries 1 mark</li>
          <li>Negative marks of Each Questions: 0.25</li>
          <li>Time allotted : 30 minutes</li>
          <hr />
          <li>
            Keep an eye on the TIMER CLOCK on top Right of the online exam page
            of <br />
            the browser to keep a track of the time left.
          </li>
          <li>
            Make sure your device (mobile/tab/laptop/desktop) is ready and at
            your disposal
            <br /> for appearing for the online exam.
          </li>
          <li>Make sure you have a good and stable internet connection. </li>
          <li>
            Do not close the browser during the test before you submit your
            exam.
          </li>
        </ul>
      </div>
    </div>
  );
}
