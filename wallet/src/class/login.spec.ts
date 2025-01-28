import { Login } from "./login";

describe('Login', () => {
    it('should create an instance', () => {
  
      const login = new Login(
'karthi@gamil.com','12345'
      );
  
      expect(login).toBeTruthy();
      expect(login.email).toBe('karthi@gamil.com');
      expect(login.password).toBe('12345');
      
    });
  });
  