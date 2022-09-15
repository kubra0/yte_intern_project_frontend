import axios from "axios";

export class AssistantViewApi {
 
  getAssistants() {
    return axios.get("/assistants");
  }

  addAssistant(formState) {
    return axios.post("/assistants", formState);
  }

  updateAssistant(id, newData) {
    return axios.put("/assistants/" + id, newData)
  }

  deleteAssistant(id) {
    return axios.delete("/assistants/" + id)
  }

}