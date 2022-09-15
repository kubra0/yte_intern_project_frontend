import axios from "axios";

export class ExamApi {

  getExams() {
    return axios.get("/exam");
  }
  
  updateExam(id, newData) {
    return axios.put("/exam/" + id, newData);
  }
  
  addExam(formState) {
    return axios.post("/exam", formState);
  }
  
  deleteExam(id) {
    return axios.delete("/exam/" + id);
  }
  
}