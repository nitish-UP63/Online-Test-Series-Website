import React from 'react';
import { useSelector } from "react-redux";


export default function Result(props) {
    const score = useSelector((state) => state.set_user_score);
    return (
        <div>
            <div>
                <div>
                    <div>
                        Score: {score}
                    </div>
                </div>
            </div>
        </div>
    )
}
