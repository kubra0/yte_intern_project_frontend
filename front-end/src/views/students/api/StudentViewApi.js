import axios from "axios";

export class StudentViewApi {

  getStudents() {
    return axios.get("/student");
  }

  addStudent(formState) {
    return axios.post("/student", formState);
  }

  updateStudent(id, newData) {
    return axios.put("/student/" + id, newData)
  }

  deleteStudent(id) {
    return axios.delete("/student/" + id)
  }

}