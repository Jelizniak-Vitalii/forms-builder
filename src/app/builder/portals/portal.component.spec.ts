import {PortalComponent} from "./portal.component";

describe('PortalComponent', () => {
  it('showNewForm it should be false(close modal window new Form)', () => {
    const component = new PortalComponent(null!, null!);
    expect(component.showNewForm).toBe(false);
  })
})
