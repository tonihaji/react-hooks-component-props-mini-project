import react from "react"
function About(props){
    return(
         <aside>
            <img scr={props.img || "https://via.placeholder.com/215 Links to an external site."} />
            <p> (props.about) </p>
         </aside>
    )
}
export default About;