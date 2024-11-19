import { Industry } from "./industry";

// TODO: Remove mock, make real request
const MOCK_INDUSTRIES: Industry[] = [
  { name: "Industry 1" },
  { name: "Industry 2" },
  { name: "Industry 3" },
];

export class IndustriesClient {
  constructor(private apiUrl: string) {}

  async getIndustries(): Promise<Industry[]> {
    return MOCK_INDUSTRIES;
  }
}
