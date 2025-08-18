/**
 * @file Centralized constants 
 * Requires env variables: MONGODB_URI
 */

import { DatabaseConfig } from '../types';

// MongoDB connection config 
export const DATABASE_CONFIG: DatabaseConfig = {
    uri: process.env.MONGODB_URI || '',
    options: {},
};