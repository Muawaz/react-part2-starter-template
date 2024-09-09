import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/taskReducer";

interface TasksContextType {
    tasks: Task[]
    tasksDispatch: Dispatch<TaskAction>
}

const TasksContext = React.createContext<TasksContextType>({} as TasksContextType)

export default TasksContext