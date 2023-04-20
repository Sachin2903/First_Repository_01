import { Fragment } from "react"
export function Email(props) {
    return (
        <Fragment>
            <p>Subject : {props.subject} <br></br>to : {props.receiver}</p>
            <p>Hi, {props.from} </p>
            <p>I am having a {props.event} next Friday at my home  Would you like to come ? it will be fun  Lots of people from my school <br></br>are coming you know some of them - {props.flist}</p>
            <p>My house is behind our school . near {props.address}</p>
            <p>I hope you will come and see you soon</p>
            <p>from <br></br> {props.cpname}</p>
            
        
        </Fragment>
    )
}