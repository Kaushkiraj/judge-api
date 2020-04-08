import { Testcase } from "./result";

export type SubmissionAttributes = {
  id: number,
  lang: string,
  start_time: Date,
  end_time?: Date,
  mode: string,
  callback?: string,
  results?: Array<Testcase>
  outputs?: Array<string>
}