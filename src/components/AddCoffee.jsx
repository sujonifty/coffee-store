import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddCoffee =(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const chef =e.target.chef.value;
        const supplier =e.target.supplier.value;
        const taste =e.target.taste.value;
        const category =e.target.category.value;
        const details =e.target.details.value;
        const photo =e.target.photo.value;
        const newCoffee = {name,chef,supplier,taste,category,details,photo};
        console.log(newCoffee)

        // sent data to the server
        fetch('http://localhost:5000/coffee' , {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>

            <div className="text-center">
                <h1 className="text-5xl w-full lg:w-3/4 mx-auto font-bold">Add New Coffee</h1>
                <p className="py-6">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <div className="hero min-h-screen bg-[#F4F3F0]">

                <form onSubmit={handleAddCoffee} className="card-body">
                    <div className="flex gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter Chef Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Enter Coffee Test" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter PhotoURL" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn bg-[#D2B48C]" value="Add Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;