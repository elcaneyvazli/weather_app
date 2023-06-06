import { useEffect,useState } from "react";
import "./App.css";
import axios from "axios";
import City from './city.jsx'
function App() {
  const key = "994e467b15aea56e1f23ee64fc4f463b";
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [search]);
  console.log(search);
  return (
    <div className="App bg-slate-900">
       <div className="flex flex-col items-center justify-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className=" my-[2rem] px-[2rem] w-[70%] py-[2rem] placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-[2rem] border-0 shadow outline-none focus:outline-none focus:ring text-center"
        />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;