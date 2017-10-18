export function logIn() {
  return {
    type: "LOG_IN",
    promise: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({name: "Todd"});
        }, 2000);
      });
    }
  };
}

