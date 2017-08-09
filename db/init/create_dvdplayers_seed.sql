CREATE TABLE dvdplayers (
 id serial primary key,
 product TEXT,
 series TEXT,
 rating TEXT,
 price TEXT,
image TEXT
);

INSERT INTO dvdplayers (product, series, rating, price, image)
VALUES
('4K Ultra HD Blu-ray Player', 'UBP-X800', '4.5', '269.99', ''),
('Premium Audio & Video Player', 'UHP-H1', '4.5', '349.99', ''),
('Blu-ray Disc Player with 4K upscaling', 'BDP-S6700', '4.5', '99.99', ''),
('Blu-ray™ Disc Player with built-in Wi-Fi®', 'BDP-S3700', '4', '74.99', ''),
('Blu-ray Disc™ Player', 'BDP-S1700', '4', '64.99', ''),
('4K Upscale Blu-ray Disc™ Player with built-in Wi-Fi', 'BDP-S6500', '4.5', '99.99', '')

