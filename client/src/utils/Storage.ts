export default class Storage {
  public static get(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  public static set(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  public static remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
