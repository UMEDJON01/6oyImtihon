import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";

function Home() {
  const { data } = useContext(GlobalContext);
  console.log(data);
  return (
    <div className="align-content">
      <h1 className="font-extrabold size-10">Recipec</h1>

      <div className="w-80 h-80 border p-3 ">
        <h1 className="font-extrabold">Palov</h1>
        <br />
        <p className="text-sm  w-72 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry ...
        </p>
        <div className="flex ml-40">
          <button className="btn btn-xs btn-secondary">New</button>
          <button className="btn btn-xs btn-accent">45-minutes</button>
        </div>
        <img
          src="https://media.express24.uz/r/848/1500/imhjcyC-3y-jRE5JmLriB.jpg"
          alt=""
          className="w-72 "
        />
      </div>
    </div>
  );
}

export default Home;
