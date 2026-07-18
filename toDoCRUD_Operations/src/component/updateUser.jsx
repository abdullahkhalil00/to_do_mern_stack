import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



function UpdateUser() {
    const { id } = useParams()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get(`http://localhost:8003/update/${id}`)
            .then((result) => {
                console.log(result.data);
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
                // navigate("/");
            })
            .catch((err) => {
                console.log(err.response?.data?.message);
            });
    }, [])

    function update(e) {
        e.preventDefault();

        axios
            .put(`http://localhost:8003/update/${id}`, {
                name,
                email,
                age,
            })
            .then((result) => {
                console.log("PUT Success");
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <form onSubmit={update} >
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Update User
                    </h2>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-medium">
                            Age
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Age"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}

                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser