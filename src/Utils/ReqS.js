import axios from "axios";

export async function RequeteData({ type, url, value }) {
  try {
    let response;
    if (type === "get") {
      response = await axios.get(process.env.URL_BACK + url, { value });
    }
    if (type === "post") {
      response = await axios.post(process.env.URL_BACK + url, { value });
    }
    if (type === "put") {
      response = await axios.put(process.env.URL_BACK + url, { value });
    }
    if (type === "delete") {
      response = await axios.delete(process.env.URL_BACK + url, {
        value,
      });
    }
    return response;
  } catch (error) {
    return error;
  }
}
