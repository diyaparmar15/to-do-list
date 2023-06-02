import { BiAddToQueue } from "react-icons/bi"

const AddTask = () => {
    return <div>
        <button className='btn btn-primary w-full'>ADD NEW TASK<BiAddToQueue className='ml-2' size={18} /></button>
    </div>;
}
export default AddTask;