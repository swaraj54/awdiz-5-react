import toast from "react-hot-toast";

function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <h1>Home Page</h1>
            <button onClick={() => toast.success("Success")}>Success</button><br />
            <button onClick={() => toast.error("Error")}>Error</button>

            <h1 className="text-left pt-10 text-3xl font-bold underline">Testing tailwind css</h1>

        </div>
    )
}

export default Home;