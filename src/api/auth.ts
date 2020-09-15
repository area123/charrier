import axios from 'axios';

export const login = async function(email: string, password: string) {
  //TODO 로그인 기능 구현
  // try {
  //   const send_data = {
  //     email: email,
  //     password: password,
  //   };
  //   const { data } = await axios.post('http://localhost/api/user', send_data);
  //   return data;
  // } catch (e) {
  //   console.log(e);
  // }
};

export const logout = async function() {
  //TODO 로그아웃 기능 구현
};

export const signup = async function() {
  //TODO 회원가입 기능 구현
};
