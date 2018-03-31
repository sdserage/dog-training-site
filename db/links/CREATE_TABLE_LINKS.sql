CREATE TABLE links(
  link_id SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(50),
  reference_key INTEGER DEFAULT 0,
  url TEXT DEFAULT '',
  target VARCHAR(80)
)
