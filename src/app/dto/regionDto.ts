import { ProvinceDto } from "./provinceDto";

export class RegionDto {
  public label: string;
  public value: string;
  public provinces: Array<ProvinceDto>;

  constructor() {}
}
