# React Todo List

The API for Todo-List Application.

## Routes
| Route | HTTP Verb | Post Body | Description |
|------|---------|----------|---------|
| /todo | `GET` | - | List all title. |
| /todo/create-todo | `POST` | {'title':'foo',<br> 'start':2021-01-20, 'end':2021-01-22} | Create a new title. |
| /todo/edit-todo/:id | `GET` | - | Get a title. |
| /todo/delete-todo/:id | `DELETE` | - | Delete a title. |
| /todo/update-todo/:id | `PUT` | {'title':'bar',<br> 'start':2021-01-25, 'end':2021-01-26} | Update a title with new info. |
