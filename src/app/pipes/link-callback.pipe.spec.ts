import { LinkCallbackPipe } from './link-callback.pipe';

describe('DisabledLinksPipe', () => {
  it('create an instance', () => {
    const pipe = new LinkCallbackPipe();
    expect(pipe).toBeTruthy();
  });
});
