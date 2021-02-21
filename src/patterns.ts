export const usernameRegexp = (): RegExp => /^(?!^[._][\d._a-z]{1,24}$|^[\d._a-z]{1,24}[._]$)[\d._a-z]{2,24}$/;

export const passwordRegexp = (): RegExp =>
  /^(?=.*[ -/:-@[-`{-~]+)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z]).{8,255}$/;
