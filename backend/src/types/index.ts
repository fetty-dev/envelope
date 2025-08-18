/**
 * @file Backend type definitions
 */

// Database config
export interface DatabaseConfig {
    uri: string;
    options: {};
}

// User config
export interface UserAccount {
    username: string;
    email: string;
    password: string;
    profileImage: string;
}