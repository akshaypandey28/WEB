import React, { useEffect, useState } from "react";
import { apiUrl , filterData } from "./data.js";
import Navbar from "./components/Navbar.js";
import Filter from "./components/Filter.js";
import Cards from "./components/Cards.js";
import Spinner from "./components/Spinner.js";
import {toast} from "react-toastify";


const App = () => {
  const [courses,setCourses] = useState([])
  const [loading,setLoading] = useState(true)


  async function fetchData() {
    setLoading(true);
    try {
      let response=await fetch(apiUrl);
      let output = await response.json();

      //save data into a variable
      //console.log(data);
      setCourses(output.data);
      
    } catch (error) {
      toast.error("something went wrong")
    }
    setLoading(false)
  }

  //for apiHandling
  useEffect(() =>{
    fetchData();
  },[]);


  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div>
        <Filter
          filterData={filterData}
        />
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
      
    </div>
  );
}

export default App;
