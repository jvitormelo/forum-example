export default class TokenHandler {
  private static localStorageKey = 'Authorization';

  public static setToken(token: string): void {
    localStorage.setItem(this.localStorageKey, token);
  }

  public static getToken(): string {
    return localStorage.getItem(this.localStorageKey) || '';
  }

  public static clearToken(): void {
    localStorage.removeItem(this.localStorageKey);
  }

}
