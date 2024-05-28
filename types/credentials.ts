export interface CredentialsType {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

export interface CredentialsInvalidType {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  confirmPassword: boolean;
}
