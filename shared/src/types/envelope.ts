/**
 * @file Envelope related type definitions
 * Core types for the envelope budgeting system
 */

// envelope frequency options
export type EnvelopeFrequency = 'weekly' | 'bi-weekly' | 'monthly';

// envelope priority levels
export type EnvelopePriority = 'essential' | 'important' | 'discretionary';

// status based on progress
export type EnvelopeStatus = 'on-track' | 'behind' | 'complete' | 'overdue';

// core envelope interface
export interface Envelope {
    id: string;
    userId: string;
    name: string;
    description: string;
    targetAmount: number;
    currentBalance: number;
    frequency: EnvelopeFrequency;
    priority: EnvelopePriority;
    dueDate?: Date;
    customFrequencyDays?: number;   // only used when frequency is 'custom'
    isActive: boolean;
    createdAt: Date;
    updateAt: Date;
}

// data for creating a new envelope 
export interface CreateEnvelopeInput {
    name: string;
    description?: string;
    targetAmount: number;
    frequency: EnvelopeFrequency;
    priority: EnvelopePriority;
    dueDate?: Date;
    customFrequencyDays?: number;
}

// data for updating an existing envelope
export interface UpdateEnvelopeInput {
    name?: string;
    description?: string;
    targetAmount?: number;
    frequency?: EnvelopeFrequency;
    priority?: EnvelopePriority;
    dueDate?: Date;
    customFrequencyDays?: number;
    isActive?: boolean;
}

// envelope with calculated progress information
export interface EnvelopeWithProgress extends Envelope {
    progressPercentage: number;
    status: EnvelopeStatus;
    amountNeeded: number;
    daysUntilDue?: number;
}