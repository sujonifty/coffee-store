import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const CoffeeCard = ({ coffee, coffees, setCoffees}) => {
    // console.log(coffee);
    const { _id, name, photo, chef } = coffee;
    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remains = coffees.filter(cof=> cof._id !== _id);
                            setCoffees(remains);
                        }
                    })
            }

        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex justify-between items-center">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-center items-center">
                    <div className="card-body">
                        <h2 className="card-title">Coffee Name{name}</h2>
                        <p>Chef{chef}</p>

                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical">
                            <button className="btn join-item text-white font-bold bg-[#D2B48C]">View</button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn join-item text-white font-bold bg-black">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item text-white font-bold bg-red-500">Delete</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};
CoffeeCard.propTypes ={
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
}
export default CoffeeCard;