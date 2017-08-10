CREATE TABLE cameras (
 id serial primary key,
 product TEXT,
 series TEXT,
 rating TEXT,
 price TEXT,
image TEXT
);

INSERT INTO cameras (product, series, rating, price, image)
VALUES
('α9 featuring full-frame stacked CMOS sensor', 'ILCE-9', '4.5', '4499.99', ''),
('α6500 Premium E-mount APS-C Camera', 'ILCE-6500', '4.5', '1399.99', ''),
('α99 II with Back-Illuminated Full-Frame Image Sensor', 'ILCA-99M2', '4.5', '3199.99', ''),
('α7R II with back-illuminated full-frame image sensor', 'ILCE-7RM2', '5', '2899.99', ''),
('7S II E-mount Camera with Full-Frame Sensor', 'ILCE-7SM2', '4.5', '2699.99', ''),
('α7 II E-mount Camera with Full Frame Sensor', 'ILCE-7M2 BODY / KIT', '4.5', '1599.99', '')

