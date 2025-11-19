import * as React from "react";
import s from "./Authenticated.module.css";
import { BadgeAlert, Trash2 } from "lucide-react";
import { filterTasks, sortTasks } from "./utils";
import { useAuth } from "../../contexts/authContext";
import Button from "../Button";
import {
  getTasks,
  createTask,
  editTask,
  deleteTask,
} from "../../services/tasks";
import type { Task, EditTaskData } from "../../services/tasks";

function Authenticated() {
  const { logout } = useAuth();

  const [status, setStatus] = React.useState("idle");
  const [formStatus, setFormStatus] = React.useState("idle");
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const [title, setTitle] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");

  const [onlyPending, setOnlyPending] = React.useState(false);
  const [onlyImportant, setOnlyImportant] = React.useState(false);

  const [sortBy, setSortBy] = React.useState("due_date-asc");

  React.useEffect(() => {
    setStatus("loading");
    getTasks()
      .then((tasks) => {
        if (!tasks) {
          setStatus("error");
          return;
        }
        setStatus("success");
        console.log("data: ", tasks);
        setTasks(tasks);
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const taskData = {
      title,
      due_date: dueDate,
    };

    setFormStatus("loading");
    createTask(taskData)
      .then((newTask) => {
        if (!newTask) {
          setFormStatus("error");
          return;
        }
        setTasks((previousTasks) => [...previousTasks, newTask]);
        setFormStatus("success");
        setTitle("");
        setDueDate("");
      })
      .catch(() => {
        setFormStatus("error");
      });
  }

  async function handleEdit(id: number, updates: EditTaskData) {
    editTask(id, updates).then((updatedTask) => {
      if (!updatedTask) {
        return;
      }
      setTasks((previousTasks) =>
        previousTasks.map((task) => {
          return task.id === id ? updatedTask : task;
        })
      );
    });
  }

  async function handleDelete(id: number) {
    deleteTask(id).then(() => {
      setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== id)
      );
    });
  }

  const isLoading = status === "loading";
  const isCreating = formStatus === "loading";

  const filteredTasks = filterTasks(tasks, { onlyPending, onlyImportant });
  const sortedTasks = sortTasks(filteredTasks, sortBy);

  return (
    <>
      <form className={s["task-form"]} onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="do the dishes"
          required
          aria-label="title"
          disabled={isCreating}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id="due_date"
          type="date"
          name="due_date"
          aria-label="due_date"
          disabled={isCreating}
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Button disabled={isCreating}>
          {isCreating ? "Adding..." : "Add task"}
        </Button>
      </form>

      <div className={s["tasks-wrapper"]}>
        <aside className={s.aside}>
          <div className={s["input-group"]}>
            <label htmlFor="sort_by">Sort by</label>
            <select
              id="sort_by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="due_date-asc">Due Date (old first)</option>
              <option value="due_date-desc">Due Date (new first)</option>
              <option value="alphabetical-asc">Alphabetical (a-z)</option>
              <option value="alphabetical-desc">Alphabetical (z-a)</option>
            </select>
          </div>
          <div className={s["input-group"]}>
            <label>Filter</label>
            <div className={s.checkbox}>
              <input
                type="checkbox"
                id="pending"
                checked={onlyPending}
                onChange={(e) => setOnlyPending(e.target.checked)}
              />
              <label htmlFor="pending">Only pending</label>
            </div>
            <div className={s.checkbox}>
              <input
                type="checkbox"
                id="important"
                checked={onlyImportant}
                onChange={(e) => setOnlyImportant(e.target.checked)}
              />
              <label htmlFor="important">Only important</label>
            </div>
          </div>
          <Button variant="secondary" onClick={logout}>
            Logout
          </Button>
        </aside>
        <div className={s["tasks-list"]}>
          {isLoading && <p>Loading...</p>}
          {tasks.length > 0 &&
            sortedTasks.map((task) => (
              <div key={task.id} className={s["task-wrapper"]}>
                <div className={s["task-data"]}>
                  <input
                    type="checkbox"
                    id={task.id.toString()}
                    checked={task.completed}
                    onChange={(e) => {
                      handleEdit(task.id, { completed: e.target.checked });
                    }}
                  />
                  <div className={s["title-wrapper"]}>
                    <label
                      htmlFor={task.id.toString()}
                      className={s["task-title"]}
                    >
                      {task.title}
                    </label>
                    <small className={s["task-due_date"]}>
                      {task["due_date"]}
                    </small>
                  </div>
                </div>
                <div className={s.actions}>
                  <Button
                    onClick={() => {
                      handleEdit(task.id, { important: !task.important });
                    }}
                    size="icon"
                    variant={task.important ? "secondary" : "outline"}
                  >
                    <BadgeAlert />
                  </Button>
                  <Button
                    onClick={() => {
                      handleDelete(task.id);
                    }}
                    size="icon"
                    variant="outline"
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Authenticated;
