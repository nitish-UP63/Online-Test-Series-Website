import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeCategory() {
    return (
        <div>
            <div style={{padding:80}}>
            <h1>IIT JEE</h1>
            <br />
                <div class="list-group col-md-8">
                <NavLink to="/QuestionPage">
                    <a href="#" class="list-group-item">JEE Main 2021</a>
                    </NavLink>
                    <a href="#" class="list-group-item">JEE Main 2020</a>
                    <a href="#" class="list-group-item">JEE Main 2019</a>
                    <a href="#" class="list-group-item">JEE Main 2018</a>
                    <a href="#" class="list-group-item">JEE Main 2017</a>
                    <a href="#" class="list-group-item">JEE Main 2016</a>
                    <a href="#" class="list-group-item">JEE Main 2015</a>
                    <a href="#" class="list-group-item">JEE Main 2014</a>
                    <a href="#" class="list-group-item">JEE Main 2013</a>
                </div>
            </div>

        </div>
    )
}
