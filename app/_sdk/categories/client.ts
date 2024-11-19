import { Category } from "./category";

// TODO: Remove mock, make real request
const MOCK_CATEGORIES: Category[] = [
  {
    name: "Category 1",
    shortDescription: "Short description",
    longDescription: "Long description",
    swoRanking: 129,
    flags: ["featured"],
  },
  {
    name: "Category 2",
    shortDescription: "Short description",
    longDescription: "Long description",
    swoRanking: 33,
    flags: ["featured"],
  },
  {
    name: "Category 3",
    shortDescription: "Short description",
    longDescription: "Long description",
    swoRanking: 513,
    flags: ["featured"],
  },
];

export class CategoriesClient {
  constructor(private apiUrl: string) {}

  async getCategories(): Promise<Category[]> {
    return MOCK_CATEGORIES;
  }
}
