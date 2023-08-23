### BACKEND SERVICE FOR TODO

RESTful API for managing a Todo list. The API  allows users to create, read, update, and delete To do items. 

Each Todo item have a title, description, and status (completed or not completed).

### HOW TO SETUP THE SERVICE?
- add an env file inside server folder named as `.env`.
- the file should contain - 
    ```
    USER="ENTER USER NAME"
    HOST="ENTER THE HOST"
    PORT=5432
    DB="tododatabase"
    PASSWORD="ENTER THE PASSWORD"

    Example - 
    USER="postgres"
    HOST="localhost"
    PORT=5432
    DB="tododatabase"
    PASSWORD="passwordsomething"

    ```

- Now do `npm install` to install all the dependencies.
- Now you can run the project by doing `node index.js`.

