# TOOL-1: TOOL-1 Login with valid and invalid credentials

## Acceptance criteria
- AC1: Valid email and password → redirected to the account page, and the user's name shows in the navigation.
- AC2: Wrong password → an error message appears and the user stays on the login page.
- AC3: Empty fields → each shows a required-field validation message.
- AC4: Password field masks the input.

## TC-1: Sign in with valid email and password
- Covers: AC1
- Type: positive
- Preconditions: A registered customer account exists with a known email and password. The tester is signed out and on the login page.

Steps:
1. Enter the registered email in the email field.
2. Enter the matching correct password in the password field.
3. Submit the login form.

Expected: The user is redirected to the account page and the user's name is shown in the navigation.

## TC-2: Sign in with a wrong password
- Covers: AC2
- Type: negative
- Preconditions: A registered customer account exists with a known email. The tester is signed out and on the login page.

Steps:
1. Enter the registered email in the email field.
2. Enter a password that does not match the account.
3. Submit the login form.

Expected: An error message appears (exact text not specified in the story) and the user remains on the login page.

## TC-3: Submit the login form with both fields empty
- Covers: AC3
- Type: negative
- Preconditions: The tester is signed out and on the login page with both fields empty.

Steps:
1. Leave the email field empty.
2. Leave the password field empty.
3. Submit the login form.

Expected: A required-field validation message is shown for the email field and a required-field validation message is shown for the password field (exact text not specified in the story).

## TC-4: Submit the login form with only the password filled in
- Covers: AC3
- Type: edge
- Preconditions: A registered customer account exists with a known password. The tester is signed out and on the login page.

Steps:
1. Leave the email field empty.
2. Enter a password in the password field.
3. Submit the login form.

Expected: A required-field validation message is shown for the empty email field (exact text not specified in the story).

## TC-5: Submit the login form with only the email filled in
- Covers: AC3
- Type: edge
- Preconditions: A registered customer account exists with a known email. The tester is signed out and on the login page.

Steps:
1. Enter the registered email in the email field.
2. Leave the password field empty.
3. Submit the login form.

Expected: A required-field validation message is shown for the empty password field (exact text not specified in the story).

## TC-6: Password input is masked while typing
- Covers: AC4
- Type: positive
- Preconditions: The tester is signed out and on the login page.

Steps:
1. Click into the password field.
2. Type a password of several characters.
3. Look at the characters displayed in the password field.

Expected: The typed characters are masked and the password is not displayed as readable text.
