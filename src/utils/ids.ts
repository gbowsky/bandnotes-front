export function id(length: number = 5) {
  let res = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for ( var i = 0; i < length; i++ ) {
    res += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return res;
}
