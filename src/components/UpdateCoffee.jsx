import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, photo, chef,supplier,details, category,taste } = coffee;
    const handleUpdate=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const chef =e.target.chef.value;
        const supplier =e.target.supplier.value;
        const taste =e.target.taste.value;
        const category =e.target.category.value;
        const details =e.target.details.value;
        const photo =e.target.photo.value;
        const updatedCoffee = {name,chef,supplier,taste,category,details,photo};
        console.log(updatedCoffee);


        fetch(`http://localhost:5000/coffee/${_id}` , {
            method:'PUt',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    
    return (
        <div>
            <div>

                <div className="text-center">
                    <h1 className="text-5xl w-full p-5 lg:w-3/4 mx-auto font-bold">Updated Coffee</h1>
                </div>
                <div className="hero min-h-screen bg-[#F4F3F0]">

                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" name="chef" defaultValue={chef} placeholder="Enter Chef Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Test" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" defaultValue={category} name="category" placeholder="Enter Coffee Category" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" defaultValue={details} name="details" placeholder="Enter Coffee Details" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" defaultValue={photo} name="photo" placeholder="Enter PhotoURL" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-[#D2B48C]" value="Update Coffee" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;