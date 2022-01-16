
export interface Planet {
  distanceToCenter: number;
  radius: number;
  speed: number;
  phi0: number;
  moons?: Planet[];
  description?: string;
}

export const isPlanet = (obj: any): obj is Planet => {
  return (obj as Planet).phi0 !== undefined;
};

export interface Planet2 {
  distanceToCenter: number;
  radius: number;
  speed: number;
  phi0: number;
}
export interface Band extends Planet2 {
  bandName?: string;
  embeddedSpotify?: string;
}
export interface Chapter extends Planet2 {
  chapterName?: string;
  title?: string;
  description?: string;
  bands?: Band[];
}

export const isGenre = (obj: any): obj is Chapter => {
  return (obj as Chapter).bands !== undefined;
};

export const isBand = (obj: any): obj is Band => {
  return (obj as Band).bandName !== undefined;
};
