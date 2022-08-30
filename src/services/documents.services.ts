import axios, { AxiosResponse } from "axios";
import { Paths } from "../enums";
import { ITranslateResponse } from "../interfaces/";

export class DocumentsService {
  constructor(private base = process.env.REACT_APP_BUCKET_URL) {}

  public getTranslate = ():Promise<ITranslateResponse> => {
   return axios.get<ITranslateResponse>((this.base + Paths.TRANSLATES) as string)
    .then(
        (response) => {
            const {data} = response
            return data
        }
    );
  };
}
