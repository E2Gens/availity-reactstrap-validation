import { AvValidator } from '../../src';

const fn = AvValidator.url;

describe('URL Validation', () => {
  it('should not require a value', () => {
    expect(fn('')).toBe(true);
  });

  describe('protocols', () => {
    it('should allow http://', () => {
      expect(fn('http://foo.com')).toBe(true);
    });

    it('should allow https://', () => {
      expect(fn('https://foo.com')).toBe(true);
    });

    it('should allow ftp://', () => {
      expect(fn('ftp://foo.com')).toBe(true);
    });

    it('should allow sftp://', () => {
      expect(fn('sftp://foo.com')).toBe(true);
    });

    it('should allow ftps://', () => {
      expect(fn('ftps://foo.com')).toBe(true);
    });

    it('should not allow sftps://', () => {
      expect(fn('sftps://foo.com')).toBe(false);
    });

    it('should not allow //', () => {
      expect(fn('//foo.com')).toBe(false);
    });

    it('should not allow no protocol', () => {
      expect(fn('foo.com')).toBe(false);
    });
  });

  describe('domain', () => {
    it('should allow a domain', () => {
      expect(fn('http://foo.com')).toBe(true);
    });

    it('should allow a subdomain', () => {
      expect(fn('http://www.foo.com')).toBe(true);
      expect(fn('http://bar.foo.com')).toBe(true);
    });

    it('should allow a multiple subdomains', () => {
      expect(fn('http://app.bar.foo.com')).toBe(true);
      expect(fn('http://deep.app.bar.foo.com')).toBe(true);
    });

    it('should now allow domains starting with a "."', () => {
      expect(fn('http://.foo.com')).toBe(false);
      expect(fn('http://.bar.foo.com')).toBe(false);
    });

    it('should now allow domain names starting with a "-"', () => {
      expect(fn('http://-foo.com')).toBe(false);
      expect(fn('http://-bar.foo.com')).toBe(false);
    });

    it('should now allow domains ending with a "-"', () => {
      expect(fn('http://foo-.com')).toBe(false);
      expect(fn('http://bar-.foo.com')).toBe(false);
    });
  });

  it('should allow port', () => {
    expect(fn('http://foo.com:8080')).toBe(true);
    expect(fn('http://bar.foo.com:1337/')).toBe(true);
  });

  it('should allow userid', () => {
    expect(fn('http://userid@foo.com')).toBe(true);
    expect(fn('http://userid@bar.foo.com:1337/')).toBe(true);
  });

  it('should allow userid with password', () => {
    expect(fn('http://userid:password@foo.com')).toBe(true);
    expect(fn('http://userid:password@bar.foo.com:1337/')).toBe(true);
  });
});
