import toast from "react-hot-toast";
import Navbar from "./Navbar";


function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <h1>Home Page</h1>
            <button onClick={() => toast.success("Success")}>Success</button><br />
            <button onClick={() => toast.error("Error")}>Error</button>
        </div>
    )
}

export default Home;