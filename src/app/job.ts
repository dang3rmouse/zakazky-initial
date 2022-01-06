// hiding the below on the assumption that this is replaced by the new code from the Forms tutorial

// export interface Job {
//     id: number;
//     client: string;
//     jobcode: string;

// }

// begin: new code from the forms tutorial

export class Job {

    constructor(
      public id: number,
      public jobcode: string,
      public client: string,
      public comment?: string
    ) {  }
  
  }