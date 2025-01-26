import React from "react";
import Card from "./Card.js"
const Cards = (props) =>{
    let courses=props.courses;
    
    //returns a list of all courses received from the api response
    function getCourses(){
        let allCourses=[];
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach( (courseData) => {
                allCourses.push(courseData);
            } )
        } )
        return allCourses;
    }

    return (
        <div>
        {
           getCourses().map( (course) => (
            <Card key={course.id} course={course}/>
           ) )
        }
        </div>
    )
}

export default Cards;