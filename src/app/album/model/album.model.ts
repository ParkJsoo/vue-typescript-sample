import 'reflect-metadata';

export namespace Album {
  export namespace Response {
    export class FindAll {
      userId!: number;
      id!: number;
      title!: string;
    }

    export class FindOne {
      userId!: number;
      id!: number;
      title!: string;
    }
  }
}
