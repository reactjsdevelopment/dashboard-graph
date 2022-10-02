import axios from "axios";

export default axios.create({
  baseURL: "https://api.airtable.com/v0/appBTaX8XIvvr6zEC/",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer key4v56MUqVr9sNJv"
  },
});
