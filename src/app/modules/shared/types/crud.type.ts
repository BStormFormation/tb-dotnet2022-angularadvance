export type QueryParams = { [key: string]: any };
export type CrudParams = Partial<{ where: QueryParams, sort: QueryParams }>;