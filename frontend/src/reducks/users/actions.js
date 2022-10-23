export const SIGN_IN = "SIGN_IN";  // 定数化し、別のファイルでimportするためにexportしている。

export const signInAction = (userState) => {
    return {
        type: "SIGN_IN",
        payload: {
            isSignedIn: true,
            uid: userState.uid,
            username: userState.username
        }
    }
};
