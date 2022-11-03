-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS dwarves;

CREATE TABLE dwarves (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  purpose VARCHAR NOT NULL,
  source VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
);

INSERT INTO dwarves (name, purpose, source, url)
VALUES
('Gimli', 'Lord of the Glittering Caves', 'Middle Earth', 'https://hero.fandom.com/wiki/Gimli'),
('Balin', 'Lord of Moria', 'Middle Earth', 'https://hero.fandom.com/wiki/Balin'),
('Scout', 'Place flares and reach high places', 'Deep Rock Galactic', 'https://deeprockgalactic.fandom.com/wiki/Dwarves'),
('Driller', 'Use titanium drills and explosives to clear the way', 'Deep Rock Galactic', 'https://deeprockgalactic.fandom.com/wiki/Dwarves'),
('Yagrum Bagran', 'Master Crafter', 'Corprusarium Bowels', 'https://elderscrolls.fandom.com/wiki/Yagrum_Bagarn_(Morrowind)'),

DROP TABLE IF EXISTS elves;

-- CREATE TABLE elves (
--   id BIGINT GENERATED ALWAYS AS IDENTITY,
--   name VARCHAR NOT NULL,
--   purpose VARCHAR NOT NULL,
--   source VARCHAR NOT NULL,
--   url VARCHAR NOT NULL
-- );

-- INSERT INTO elves (name, purpose, source, url)
-- VALUES
-- ('Gimli', 'Lord of the Glittering Caves', 'Middle Earth', 'https://hero.fandom.com/wiki/Gimli'),
-- ('Balin', 'Lord of Moria', 'Middle Earth', 'https://hero.fandom.com/wiki/Balin'),
-- ('Scout', 'Place flares and reach high places', 'Deep Rock Galactic', 'https://deeprockgalactic.fandom.com/wiki/Dwarves'),
-- ('Driller', 'Use titanium drills and explosives to clear the way', 'Deep Rock Galactic', 'https://deeprockgalactic.fandom.com/wiki/Dwarves'),
-- ('Yagrum Bagran', 'Master Crafter', 'Corprusarium Bowels', 'https://elderscrolls.fandom.com/wiki/Yagrum_Bagarn_(Morrowind)'),

