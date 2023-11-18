export interface Repository<T> {
  getAll: () => Promise<T[]>
  getById: (id: number) => Promise<T | null>
  create: (data: T) => Promise<void>
  updateById: (id: number, data: T) => Promise<void>
  deleteById: (id: number) => Promise<void>
}
