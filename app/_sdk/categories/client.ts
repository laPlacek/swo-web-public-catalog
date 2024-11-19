import { Category, normalizeName } from "./category";

// TODO: Remove mock, make real request
const MOCK_CATEGORIES: Category[] = [
  {
    id: "CAT-0000-0001",
    industryId: "IND-0000-0001",
    name: "Category 1",
    shortDescription: "Short description",
    longDescription: "Long description",
    swoRanking: 129,
    flags: ["featured"],
  },
  {
    id: "CAT-0000-0002",
    industryId: "IND-0000-0002",
    name: "Category 2",
    shortDescription: "Short description",
    longDescription: "Long description",
    swoRanking: 33,
    flags: ["featured"],
  },
  {
    id: "CAT-0000-0003",
    industryId: "IND-0000-0001",
    name: "Category 3",
    shortDescription: "Short description",
    longDescription: "Long description",
    swoRanking: 513,
    flags: ["featured"],
  },
];

export class CategoriesClient {
  constructor(private apiUrl: string) {}

  // this will probably be more sophisticated :) (paging, filtering, etc). We can also rename it.
  async findAll(): Promise<Category[]> {
    return MOCK_CATEGORIES;
  }

  async getByName(normalizedName: string): Promise<Category | null> {
    return (
      MOCK_CATEGORIES.find(
        (c) => normalizeName(c.name) === normalizeName(normalizedName)
      ) || null
    );
  }
}
