import JWT from 'jsonwebtoken';


interface UserId {
  id:number
}

class JWTService {
  // Isso ficaria no .env
  secret = 'teste';


  create(payload: UserId) {
    return JWT.sign(payload, this.secret);
  }


  verify(token: string): UserId {
    return JWT.verify(token, this.secret) as UserId;
  }
}

export default new JWTService();
