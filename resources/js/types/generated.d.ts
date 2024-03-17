declare namespace App.Data {
  export type ExperimentData = {
    id: number;
    name: string;
    date: string;
    machinery: App.Data.MachineryData;
  };
  export type ExperimentParamData = {
    paramDetail: App.Data.ExperimentParamDetailData;
    value: string | number;
  };
  export type ExperimentParamDetailData = {
    id: string;
    name: string;
    isOutput: boolean | null;
    isQuantitative: boolean | null;
    machinery: App.Data.MachineryData | null;
  };
  export type MachineryData = {
    id: number;
    name: string;
  };
}
