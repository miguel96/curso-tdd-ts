const validPassword = 'muchoscaracteresA1_@';

export const aValidPassword =  ()=>validPassword;
export const aShortPassword=()=>validPassword.slice(0,8);
export const aPasswordWithoutCapitalLetter=()=>validPassword.toLowerCase();

export const aPasswordWithoutLowercaseLetter=()=>validPassword.toUpperCase();

export const aPasswordWithoutNumber=()=>validPassword.replace(/[0-9]/g,'a');

export const aPasswordWithoutUnderscore=()=>validPassword.replace(/_/g,'a');
export const aPasswordWithoutAt=()=>validPassword.replace(/@/g,'a');