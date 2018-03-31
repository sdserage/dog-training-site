INSERT INTO links (type, reference_key, url)
VALUES ($1, $2, $3)
RETURNING *;
