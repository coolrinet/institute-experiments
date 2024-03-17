declare namespace App.Data {
  export type ExperimentData = {
    id: number;
    name: string;
    date: string;
    machinery: App.Data.MachineryData;
  };
  export type MachineryData = {
    id: number;
    name: string;
  };
}
