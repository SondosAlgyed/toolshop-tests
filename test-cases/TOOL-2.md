# TOOL-2:  TOOL-2 Customer registration 

## Acceptance criteria
- AC1: All required fields filled with valid data → account created and the user can sign in with it. (Required fields: first name, last name, date of birth, email, password.)
- AC2: An already-registered email → a clear error, and no duplicate account.
- AC3: Invalid email format or a password below the minimum length → inline validation errors. (Password must be at least 8 characters.)
- AC4: A customer under 18 years old cannot register. (Age is calculated from date of birth; under 18 → "You must be at least 18 years old.")

## TC-1: Register successfully with all required fields valid and sign in with the new account
- Covers: AC1
- Type: positive
- Preconditions: Registration page is reachable. The email to be used (e.g. new.user@example.com) is not registered in the system.

Steps:
1. Open the registration page.
2. Enter first name: Anna.
3. Enter last name: Novak.
4. Enter date of birth: a date making the user clearly over 18 (e.g. 1990-05-10).
5. Enter email: new.user@example.com.
6. Enter password: Passw0rd123 (11 characters).
7. Submit the registration form.
8. Open the sign-in page and sign in with new.user@example.com / Passw0rd123.

Expected: The account is created and the user can sign in with the registered email and password. (Exact confirmation wording and post-registration redirect are not specified in the story.)

## TC-2: Registration is rejected when a required field is left empty
- Covers: AC1
- Type: negative
- Preconditions: Registration page is reachable. The email used is not registered.

Steps:
1. Open the registration page.
2. Enter last name: Novak, date of birth: 1990-05-10, email: empty.field@example.com, password: Passw0rd123.
3. Leave the first name field empty.
4. Submit the registration form.
5. Attempt to sign in with empty.field@example.com / Passw0rd123.

Expected: The account is not created (first name is a required field) and sign-in with those credentials does not succeed. The exact error message/handling for the empty required field is not specified in the story.

## TC-3: Registration with an already-registered email shows a clear error and creates no duplicate account
- Covers: AC2
- Type: negative
- Preconditions: An account already exists with email existing.user@example.com.

Steps:
1. Open the registration page.
2. Enter first name: Petr, last name: Dvorak, date of birth: 1985-03-20.
3. Enter email: existing.user@example.com.
4. Enter password: Passw0rd123.
5. Submit the registration form.
6. Check the account list / data store for accounts using existing.user@example.com.

Expected: A clear error is shown stating the email is already registered (exact wording not specified in the story) and no duplicate account is created — only the original account with that email exists.

## TC-4: Invalid email format produces an inline validation error
- Covers: AC3
- Type: negative
- Preconditions: Registration page is reachable.

Steps:
1. Open the registration page.
2. Enter first name: Anna, last name: Novak, date of birth: 1990-05-10.
3. Enter email: anna.example.com (no @ sign).
4. Enter password: Passw0rd123.
5. Attempt to submit the registration form.

Expected: An inline validation error is shown for the email field and the account is not created. (Exact error text not specified in the story.)

## TC-5: Password shorter than 8 characters produces an inline validation error
- Covers: AC3
- Type: negative
- Preconditions: Registration page is reachable. The email used is not registered.

Steps:
1. Open the registration page.
2. Enter first name: Anna, last name: Novak, date of birth: 1990-05-10.
3. Enter email: short.pass@example.com.
4. Enter password: Pass1 (5 characters).
5. Attempt to submit the registration form.

Expected: An inline validation error is shown for the password field (minimum length 8 characters) and the account is not created. (Exact error text not specified in the story.)

## TC-6: Password of exactly 8 characters is accepted
- Covers: AC3, AC1
- Type: edge
- Preconditions: Registration page is reachable. The email used is not registered.

Steps:
1. Open the registration page.
2. Enter first name: Anna, last name: Novak, date of birth: 1990-05-10.
3. Enter email: min.pass@example.com.
4. Enter password: Passw0rd (exactly 8 characters).
5. Submit the registration form.
6. Sign in with min.pass@example.com / Passw0rd.

Expected: No password length validation error is shown; the account is created and the user can sign in with it.

## TC-7: Customer under 18 cannot register and sees the age message
- Covers: AC4
- Type: negative
- Preconditions: Registration page is reachable. The email used is not registered. Today's date is known to the tester.

Steps:
1. Open the registration page.
2. Enter first name: Tomas, last name: Maly.
3. Enter date of birth: a date that makes the user 17 years old today (today's date minus 17 years).
4. Enter email: minor.user@example.com.
5. Enter password: Passw0rd123.
6. Submit the registration form.
7. Attempt to sign in with minor.user@example.com / Passw0rd123.

Expected: The message "You must be at least 18 years old." is shown, the account is not created, and sign-in with those credentials does not succeed.

## TC-8: Customer who turns 18 exactly today can register
- Covers: AC4
- Type: edge
- Preconditions: Registration page is reachable. The email used is not registered. Today's date is known to the tester.

Steps:
1. Open the registration page.
2. Enter first name: Eva, last name: Horak.
3. Enter date of birth: exactly today's date minus 18 years.
4. Enter email: just18@example.com.
5. Enter password: Passw0rd123.
6. Submit the registration form.

Expected: The age message "You must be at least 18 years old." is not shown (the customer is not under 18) and the account is created.

## TC-9: Customer one day short of 18 cannot register
- Covers: AC4
- Type: edge
- Preconditions: Registration page is reachable. The email used is not registered. Today's date is known to the tester.

Steps:
1. Open the registration page.
2. Enter first name: Jan, last name: Svoboda.
3. Enter date of birth: today's date minus 18 years, plus one day (18th birthday is tomorrow).
4. Enter email: almost18@example.com.
5. Enter password: Passw0rd123.
6. Submit the registration form.

Expected: The message "You must be at least 18 years old." is shown and the account is not created.
