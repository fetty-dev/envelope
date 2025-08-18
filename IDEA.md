# BUDGETING APP 

### Concept
A mobile app that helps users automatically divide their paycheck into “goals” (bills, savings, fun/extra/leftover money), without needing to track due dates.

### How it Works

- Users create custom bills/goals (envelopes) with weekly, monthly or custom target timelines (e.g., Rent, Gas, Subscriptions, Savings, etc.).

- On payday the user manually inputs their paycheck amount into the app.

- The app calculates how much should be added to each bill/goal’s envelope to keep pace with the target amount set.

- If envelopes are already caught up(for the month), leftover money flows into either savings or fun/extra money or however the user wants.

- A cushion amount ensures ‘bills’ checking account never goes too low.

- Visual dashboards show progress per bill and overall balance flow.

### Why it works for anyone
- Bills, goals, priorities, cushion, and paycheck frequency are all user-configurable.

- Works with any setup (1 bill or 20 bills, weekly or monthly pay).

- Adapts easily if someone moves, adds new bills, or changes income.

- The most flexible and customizable budgeting app out there.

- No bank account linking required - keeps your financial data private.

## TECH STACK

#### Frontend: 
- TypeScript + React Native (Expo) -> builds the ios/android app, run on the iphone simulator.

- UI: Animated progress bars, something cool??

- Handles user input

#### Backend:
- Nodejs + Express -> API server to handle user authentication, data storage, and calculations.

- Stores user accounts, bills, paychecks, and contributions.

- Handles paycheck calculation logic.

#### Database:
- MongoDB -> Store users, accounts, bills (envelopes), paychecks, contributions, and preferences.

#### Input:
- Manual Entry -> User inputs paycheck amounts when they get paid.

- Quick Entry -> Save favorite paycheck amounts for faster input.

- Paycheck History -> Track previous paychecks for patterns recognition.

## USER FLOW

1. Onboarding: Create account, setup bills with weekly/monthly targets, set cushion amount, and configure leftover money split.

2. Payday: User taps "Got Paid" button and enters their paycheck amount

3. Calculations: Engine distributes paycheck -> Bills, Savings, Fun, while protecting cushion.

4. Dashboard: See progress bars for each bill, how much to move to accounts, and running totals.

5. Adjust Anytime: Add/remove bills, tweak amounts, or change splits without breaking the system.
