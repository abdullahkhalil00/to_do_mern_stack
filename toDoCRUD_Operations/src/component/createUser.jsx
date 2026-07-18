import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();

        axios
            .post("http://localhost:8003/createUser", { name, email, age })
            .then((result) => {
                console.log(result);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response?.data?.message);
            });
    }

    return (
        <div className="min-h-screen bg-blue-500 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg sm:p-8">
                <form onSubmit={submit}>
                    <h2 className="mb-6 text-center text-2xl font-bold">
                        Add User
                    </h2>

                    <div className="mb-4">
                        <label className="mb-2 block font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="mb-2 block font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="mb-2 block font-medium">
                            Age
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Age"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;