class LocalStorageRepository {
  constructor(key, seedData = []) {
    this.key = key;
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify(seedData));
    }
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  getById(id) {
    return this.getAll().find(item => item.id === id) || null;
  }

  create(item) {
    const items = this.getAll();
    const newItem = { ...item, id: crypto.randomUUID() };
    items.push(newItem);
    localStorage.setItem(this.key, JSON.stringify(items));
    return newItem;
  }

  update(id, changes) {
    const items = this.getAll().map(item =>
      item.id === id ? { ...item, ...changes } : item
    );
    localStorage.setItem(this.key, JSON.stringify(items));
  }

  delete(id) {
    const items = this.getAll().filter(item => item.id !== id);
    localStorage.setItem(this.key, JSON.stringify(items));
  }
}
