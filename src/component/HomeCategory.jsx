import React from "react";
import { Link, useParams } from "react-router-dom";

export default function HomeCategory() {
    const params = useParams();
    const papers = [
        {
            id: "JeeMain",
            years: [
                2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
            ],
        },
        {
            id: "NEET",
            years: [
                2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
            ],
        },
        {
            id: "IITJee",
            years: [
                2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
            ],
        },
        {
            id: "Bits",
            years: [
                2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
            ],
        },
    ];
    return (
        <div>
            <div style={{ padding: 80 }}>
                <h1>{params.papertitle}</h1> <br />
                <div className="list-group col-md-8">
                    {papers.map((item) => {
                        //console.log(item.id);
                        console.log(params.papertitle);
                        if (item.id === params.papertitle) {
                            return (

                                (item.years.map((item2, index) => {
                                    return (
                                        <Link key={index} to="/QuestionPage" className="list-group-item" >
                                            {item.id}  {item2}
                                        </Link>
                                    )
                                }))

                            )
                        }
                    })
                    }


                </div>

            </div>
        </div>
    );
}
