import { Industry } from "./industry";

// TODO: Remove mock, make real request
const MOCK_INDUSTRIES: Industry[] = [
  { id: "IND-0000-0001", name: "Industry 1" },
  { id: "IND-0000-0002", name: "Industry 2" },
  { id: "IND-0000-0003", name: "Industry 3" },
];

export class IndustriesClient {
  constructor(private apiUrl: string) {}

  async getIndustries(): Promise<Industry[]> {
    return MOCK_INDUSTRIES;
  }
}
