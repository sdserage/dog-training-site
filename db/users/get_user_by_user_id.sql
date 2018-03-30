-- Takes 1 argument, the user_id, and returns a user object
SELECT * FROM users
WHERE user_id = $1;
