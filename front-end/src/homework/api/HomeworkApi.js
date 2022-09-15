import axios from "axios";

export class HomeworkApi {

  getHomeworks() {
    return axios.get("/homeworks");
  }
  
  addHomework(formState) {
    return axios.post("/homeworks", formState);
  }
  
  updateHomework(id, newData) {
    return axios.put("/homeworks/" + id, newData)
  }

  deleteHomework(id) {
    return axios.delete("/homeworks/" + id)
  }

}