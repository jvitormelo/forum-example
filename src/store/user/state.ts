export interface ExampleStateInterface {
  user: {
    id: number;
    username: string;
    email: string;
  };

}

function state(): ExampleStateInterface {
  return {
    user: {
      id: 0,
      email: '',
      username: ''
    }
  };
}

export default state;
