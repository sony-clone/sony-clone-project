CREATE TABLE headphones (
 id serial primary key,
 product TEXT,
 series TEXT,
 rating TEXT,
 price TEXT,
image TEXT
);

INSERT INTO headphones (product, series, rating, price, image)
VALUES
('Z1R Premium Headphones', 'MDR-Z1R', '5', '2299.99', ''),
('1000X Wireless Noise-Canceling Headphones', 'MDR-1000X', '4.5', '329.99', ''),
('1A Headphones', 'MDR-1A', '4.5', '299.99', ''),
('h.ear on Wireless NC', 'MDR-100ABN', '4.5', '349.99', ''),
('XB950N1 EXTRA BASS™ Wireless Noise-Canceling Headphones', 'MDR-XB950N1', '4', '249.99', ''),
('XB950B1 EXTRA BASS™ Wireless Headphones', 'MDR-XB950B1', '5', '129.99', '')