import { baseUrl, tokenKey } from "../constants";

export type Task = {
  id: number;
  title: string;
  due_date: null | string;
  important: boolean;
  completed: boolean;
  user_id: number;
  created_at: string;
  updated_at: string;
};

type ErrorResponse = {
  errors: string | string[];
};

export type TaskData = {
  title: string;
  due_date?: string;
  important?: boolean;
  completed?: boolean;
};

export type EditTaskData = {
  important?: boolean;
  completed?: boolean;
};

export async function getTasks() {
  const token = window.localStorage.getItem(tokenKey);

  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await fetch(baseUrl + "/tasks", options);

  if (response.status === 401) {
    window.localStorage.removeItem(tokenKey);
    window.location.assign(window.location.toString());
    return;
  }

  if (response.ok) {
    return response.json() as Promise<Task[]>;
  } else {
    const body = (await response.json()) as ErrorResponse;
    const error =
      body.errors instanceof Array ? body.errors.join(", ") : body.errors;
    return Promise.reject(new Error(error));
  }
}

export async function createTask(taskData: TaskData) {
  const token = window.localStorage.getItem(tokenKey);

  const options = {
    method: "POST",
    body: JSON.stringify(taskData),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(baseUrl + "/tasks", options);

  if (response.status === 401) {
    window.localStorage.removeItem(tokenKey);
    window.location.assign(window.location.toString());
    return;
  }

  if (response.ok) {
    return response.json() as Promise<Task>;
  } else {
    const body = (await response.json()) as ErrorResponse;
    const error =
      body.errors instanceof Array ? body.errors.join(", ") : body.errors;
    return Promise.reject(new Error(error));
  }
}

export async function editTask(id: number, editData: EditTaskData) {
  const token = window.localStorage.getItem(tokenKey);

  const options = {
    method: "PATCH",
    body: JSON.stringify(editData),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(baseUrl + `/tasks/${id}`, options);

  if (response.status === 401) {
    window.localStorage.removeItem(tokenKey);
    window.location.assign(window.location.toString());
    return;
  }

  if (response.ok) {
    return response.json() as Promise<Task>;
  } else {
    const body = (await response.json()) as ErrorResponse;
    const error =
      body.errors instanceof Array ? body.errors.join(", ") : body.errors;
    return Promise.reject(new Error(error));
  }
}

export async function deleteTask(id: number) {
  const token = window.localStorage.getItem(tokenKey);

  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(baseUrl + `/tasks/${id}`, options);

  if (response.status === 401) {
    window.localStorage.removeItem(tokenKey);
    window.location.assign(window.location.toString());
    return;
  }

  if (response.ok) {
    return;
  } else {
    const body = (await response.json()) as ErrorResponse;
    const error =
      body.errors instanceof Array ? body.errors.join(", ") : body.errors;
    return Promise.reject(new Error(error));
  }
}
