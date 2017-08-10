CREATE TABLE hometheater (
 id serial primary key,
 product TEXT,
 series TEXT,
 rating TEXT,
 price TEXT,
led BOOLEAN,
smartTv BOOLEAN,
image TEXT
);

INSERT INTO hometheater (product, series, rating, price, image)
VALUES
('2.1ch Compact Soundbar with Bluetooth® technology', 'HT-MT300', '4.5', '299.99', ''),
('7.1.2 Dolby Atmos Soundbar with Wi-Fi/Bluetooth® technology', 'HT-ST5000', '4.5', '1499.99', ''),
('2.1ch Soundbar with Wi-Fi/Bluetooth® technology', 'HT-CT800', '5', '399.99', ''),
('2.1ch Soundbar with Bluetooth® technology', 'HT-CT290', '4.5', '199.99', ''),
('2.1ch Soundbar with High-Resolution Audio/Wi-Fi®', 'HT-NT5', '4.5', '699.99', ''),
('2.1ch Soundbar with Wi-Fi/Bluetooth® technology', 'HT-CT790', '4', '499.99', '')
