INSERT INTO faqs (question, answer)
VALUES ($1, $2)
RETURNING *;
