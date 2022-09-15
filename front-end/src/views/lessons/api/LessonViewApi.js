import axios from "axios";

export class LessonViewApi {

  getLesson() {
    return axios.get("/lessons");
  }

  addLesson(formState) {
    return axios.post("/lessons", formState);
  }

  updateLesson(id, newData) {
    return axios.put("/lessons/" + id, newData)
  }
    
  deleteLesson(id) {
    return axios.delete("/lessons/" + id)
  }

}