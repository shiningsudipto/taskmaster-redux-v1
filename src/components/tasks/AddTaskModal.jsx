import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addTask(data));
        onCancel();
    }
    const onCancel = () => {
        reset();
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={"Programming Hero"}>
            <form onSubmit={handleSubmit(onSubmit)}
                className="space-y-3"
            >
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        className="w-full rounded-md"
                        id="title"
                        {...register('title')}
                        type="text" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        className="w-full rounded-md"
                        id="description"
                        {...register('description')}
                        type="text" />
                </div>
                <div>
                    <label htmlFor="date">Deadline:</label>
                    <input
                        className="w-full rounded-md"
                        id="description"
                        {...register('date')}
                        type="date" />
                </div>
                <div>
                    <label htmlFor="assignedTo">Assign to:</label>
                    <select
                        id="assignedTo"
                        className="w-full rounded-md"
                        {...register('assignedTo')}
                    >
                        <option value="Mir Hussain">Mir Hussain</option>
                        <option value="Sudipto Das">Sudipto das</option>
                        <option value="Shuvo Khan">Shuvo Khan</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="priority">Priority:</label>
                    <select
                        className="w-full rounded-md"
                        id="priority"
                        {...register('priority')}
                    >
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex">
                    <button className="btn btn-primary">Submit</button>
                    <button onClick={() => onCancel()} className="btn btn-danger" type="button">Cancel</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;