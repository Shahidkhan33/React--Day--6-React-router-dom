import { useParams } from "react-router-dom";
import { CourseCard } from "../components/courseCard";
import { useEffect,useState } from "react";


export default function Blog() {

    const [allCourses,setAllCourses] = useState([]);

useEffect(() => {
    fetch(`https://mocki.io/v1/ef9605b3-4c16-4f57-8ac5-ae889187637c`)
    .then(respone => respone.json())
    .then((result) => {
        console.log(result)
        if(result.courses){
            setAllCourses(result.courses)
        }
    })
    .catch(error => console.log(error))
},[]);

    const param = useParams();
    console.log(param);
    return (
        <div className="row g-5">
                {
                    allCourses.map((item,index) => 
                            <CourseCard key={index} details={item}/>
                    )
                }
            </div>
    );
}