import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
    const [users, setUser] = useState([]);
    useEffect(() => {
        axios.get("https://to-do-mern-stack-c7mi.onrender.com/getuser")
            .then(result => {
                console.log(result.data);
                setUser(result.data);
            })
            .catch(err => console.log(err));
    }, []);

    function deleteUser(id) {
        axios.delete(`https://to-do-mern-stack-c7mi.onrender.com/delete/${id}`)
            .then(() => {
                setUser(users.filter(user => user._id !== id));
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="mx-auto w-full max-w-6xl">
                <div className="mb-4 flex justify-end">
                    <Link
                        to="/create"
                        className="rounded-lg bg-green-600 px-5 py-2 text-white shadow-md transition hover:bg-green-700"
                    >
                        Add +
                    </Link>
                </div>

                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="min-w-[700px] w-full bg-white">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left">Name</th>
                                <th className="px-6 py-3 text-left">Email</th>
                                <th className="px-6 py-3 text-left">Age</th>
                                <th className="px-6 py-3 text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-100"
                                >
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.email}</td>
                                    <td className="px-6 py-4">{item.age}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <Link
                                                to={`/update/${item._id}`}
                                                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                                            >
                                                Update
                                            </Link>

                                            <button
                                                onClick={() => deleteUser(item._id)}
                                                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default User;