// To parse this data:
//
//   import { Convert } from "./file";
//
//   const post = Convert.toPost(json);

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Converts JSON strings to/from your types
export class PostConvert {
  public static toPost(json: string): Post[] {
    return JSON.parse(json);
  }

  public static postToJson(value: Post[]): string {
    return JSON.stringify(value);
  }
}
