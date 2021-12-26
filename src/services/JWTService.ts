import JWT from 'jsonwebtoken';

class JWTService {
  // Isso ficaria no .env
  secret = 'teste';


  create(payload: object) {
    return JWT.sign(payload, this.secret);
  }


  verify(token: string): object {
    return JWT.verify(token, this.secret) as object;
  }
}

export default new JWTService();
