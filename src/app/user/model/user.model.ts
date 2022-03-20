import 'reflect-metadata';

export namespace User {
  export namespace Response {
    export class FindAll {
      id!: number;
      name!: string;
      username!: string;
      email!: string;
      company: Company = new Company();
    }

    export class FindOne {
      id!: number;
      name!: string;
      username!: string;
      email!: string;
      address: Address = new Address();
      phone!: string;
      website!: string;
      company: Company = new Company();
    }

    export class Address {
      street!: string;
      suite!: string;
      city!: string;
      zipcode!: string;
      geo!: Geo;
    }

    export class Geo {
      lat!: string;
      lng!: string;
    }

    export class Company {
      name!: string;
      catchPhrase!: string;
      bs!: string;
    }
  }
}
