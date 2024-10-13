import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "10b20fe7900a428cb68a1486b742f5b8",
  },
});
