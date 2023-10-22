export class DefaultKeys {
  constructor(data: DefaultKeys) {
    this.id = data.id
  }
  id?: number
  created_at?: Date
  updated_at?: Date
  static swaggerDefaultKeys() {
    return {
      name: 'DefaultKeys',
      exampleData: { id: 33, created_at: '2023-01-16 10:15:24.053+03', updated_at: '2023-01-16 10:15:24.053+03' }
    }
  }
}
