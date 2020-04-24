declare interface ISO3166CitiesMunicipality {
  name: string;
  fullName: string;
  altName?: string;
  province: string;
  classification: 'Mun' | 'CC' | 'ICC' | 'HUC';
  isCapital: boolean;
}

declare interface ISO3166Province {
  code: string;
  name: string;
  altName?: string;
  nameTL: string;
  region: string;
}

declare interface ISO3166Region {
  code: string;
  name: string;
  altName?: string;
  nameTL: string;
}

declare interface PSGCCitiesMunicipality {
  code: string;
  name: string;
  fullName: string;
  altName?: string;
  province: string;
  classification: 'MUNICIPALITY' | 'CITY';
  isCapital: boolean;
}

declare interface PSGCProvince {
  code: string;
  name: string;
  altName?: string;
  region: string;
}

declare interface PSGCRegion {
  code: string;
  name: string;
  altName?: string;
}

declare module 'ph-locations' {
  export var citiesMunicipalities: ISO3166CitiesMunicipality[];
  export var provinces: ISO3166Province[];
  export var regions: ISO3166Region[];
  export var iso3166: {
    citiesMunicipalities: ISO3166CitiesMunicipality[];
    provinces: ISO3166Province[];
    regions: ISO3166Region[];
  };
  export var psgc: {
    citiesMunicipalities: PSGCCitiesMunicipality[];
    provinces: PSGCProvince[];
    regions: PSGCRegion[];
  };
}
