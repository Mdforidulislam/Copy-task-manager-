import { Button } from "@material-tailwind/react";

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto px-6 items-center py-6">
            <div className=" md:w-3/6 space-y-6">
                <h1 className=" text-2xl md:text-6xl font-bold">Make Your Routing</h1>
                <h1 className=" text-2xl">Task management is the process of managing a task through its lifecycle. It involves planning, testing, tracking, and reporting</h1>
                <Button>Do Task</Button>
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/1150304961/vector/kanban-board-agile-project-management-office-team-collaboration-and-projects-process.jpg?s=612x612&w=0&k=20&c=FO56viaRVJkJtqX_A66a6t0ZI4KJJnDCzXW6d5gaH50=" alt="" />
            </div>
        </div>
    );
};

export default Home;