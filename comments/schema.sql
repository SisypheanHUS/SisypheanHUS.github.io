-- Blog comments. One row per comment; `hidden` keeps deleted ones out of listings without losing them.
CREATE TABLE IF NOT EXISTS comments (
  id TEXT PRIMARY KEY,
  post TEXT NOT NULL,
  name TEXT NOT NULL,
  text TEXT NOT NULL,
  created_at TEXT NOT NULL,
  ip_hash TEXT NOT NULL,
  hidden INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS comments_post ON comments (post, created_at);
CREATE INDEX IF NOT EXISTS comments_ip ON comments (ip_hash, created_at);
