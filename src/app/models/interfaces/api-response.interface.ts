import { Info } from './info.interface';

// the reason to create this Api Response is to manipulate the res so the res data from BE is only included what we need, not everything from BE
export interface ApiResponse {
  info: Info;
  data: any[];
}
