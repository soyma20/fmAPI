import {environment} from "../../environments/environment";

const {API} = environment;

export const urls= {
  tags: `${API}/?method=chart.gettoptags&api_key=`,
  albums: `${API}/?method=tag.gettopalbums&tag=`,
}
