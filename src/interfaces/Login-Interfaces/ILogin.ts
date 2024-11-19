export interface Ilogin {
    email: string;
    password: string;
}

export const initialLoginState: Ilogin = {
    email: "",
    password: ""
};
