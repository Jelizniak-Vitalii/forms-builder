import { FormLogInComponent } from './formLogIn.component';
import { AuthService } from 'src/app/shared/services/authService';
import { EMPTY } from 'rxjs';

describe('FormLogInComponent', () => {
  let component: FormLogInComponent;
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService(null!);
    component = new FormLogInComponent( null! , null!, service);
  })
  it('should call authorization' , () => {
    const spy = spyOn(service, 'authorization').and.callFake(() => {
      return EMPTY;
    })
  })

  it('currentUser should be false', () => {
    const component = new FormLogInComponent(null!,null!,null!);
    expect(component.currentUser).toBe(false);
  })
})
