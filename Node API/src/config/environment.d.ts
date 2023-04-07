declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MTASAPORT: number;
      MTASAUSER: string;
      MTASAPASS: string;
      MTASAHOST: string;
      RESOURCENAME: string;
      EXPRESSPORT: number;
      FUNCTIONNAME: string;
    }
  }
}

export {};
