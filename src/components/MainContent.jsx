import React from "react"
import moment from "moment-timezone";

export default function MainContent() {

    const bostonTime = moment().tz('America/New_York').format('HH:mm');
    const londonTime = moment().tz('Europe/London').format('HH:mm');
    const delhiTime = moment().tz('Asia/Kolkata').format('HH:mm');
    const tokyoTime = moment().tz('Asia/Tokyo').format('HH:mm');

    return (

        <div className="main">
            <section className="main--first-line">
                <span>The time in Boston is: {bostonTime}</span>
                <span>The time in London is: {londonTime}</span>
            </section>
            <section className="main--second-line">
                <span>The time in New Delhi is: {delhiTime}</span>
                <span>The time in Tokyo is: {tokyoTime}</span>
            </section>
        </div>
    )
}