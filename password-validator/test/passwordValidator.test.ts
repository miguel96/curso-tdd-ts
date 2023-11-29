import {isValid} from "../src/passwordValidator";
import {
  aPasswordWithoutAt,
  aPasswordWithoutCapitalLetter,
  aPasswordWithoutLowercaseLetter,
  aPasswordWithoutNumber,
  aPasswordWithoutUnderscore,
  aShortPassword,
  aValidPassword
} from './factories';

describe('Password Validator', () => {
  it('should validate when password is valid', () => {
    expect(isValid(aValidPassword())).toBe(true);
  });

  it('should not valid when password has less than 8 characters',()=>{
    expect(isValid(aShortPassword())).toBe(false)
  });

  it('should not validate when password has not at least one capital letter',()=>{
    expect(isValid(aPasswordWithoutCapitalLetter())).toBe(false)
  });

  it('should not validate when password has not at least one lowercase letter',()=>{
    expect(isValid(aPasswordWithoutLowercaseLetter())).toBe(false)
  });

  it('should contain at least one number',()=>{
    expect(isValid(aPasswordWithoutNumber())).toBe(false)
  });

  it('should contain at least one underscore',()=>{
    expect(isValid(aPasswordWithoutUnderscore())).toBe(false)
  });

  it('should contain at least one @',()=>{
    expect(isValid(aPasswordWithoutAt())).toBe(false)
  })
});