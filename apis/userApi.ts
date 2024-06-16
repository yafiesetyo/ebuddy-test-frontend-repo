export interface IUserApi {
  fetch(uid: string): Promise<User>;
  update(u: User, token: string): Promise<string>;
}

interface User {
  id: string;
  name: string;
  username: string;
}

interface Resp {
  data: any;
  message: string;
  status: number;
}

class UserApi implements IUserApi {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetch(token: string): Promise<User> {
    const res: Response = await fetch(this.baseUrl,{
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const user: Resp = await res.json();
    return user.data;
  }

  async update(u: User, token: string): Promise<string> {
    const res: Response = await fetch(this.baseUrl, {
      method: "PUT",
      body: JSON.stringify(u),
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data: Resp = await res.json();

    return data.message;
  }
}

export default UserApi;
