CREATE TABLE camcorders (
 id serial primary key,
 product TEXT,
 series TEXT,
 rating TEXT,
 price TEXT,
image TEXT
);

INSERT INTO camcorders (product, series, rating, price, image)
VALUES
('AX53 4K Handycam® with Exmor R® CMOS sensor', 'FDR-AX53', '4.5', '849.99', ''),
('CX675 Handycam® with Exmor R™ CMOS sensor', 'HDR-CX675', '4', '599.99', ''),
('CX455 Handycam® with Exmor R™ CMOS sensor', 'HDR-CX455', '4.5', '399.99', ''),
('AX33 4K Handycam® with Exmor R® CMOS sensor', 'FDR-AX33', '4.5', '749.99', ''),
('CX440 Handycam® with Exmor R® CMOS sensor', 'HDR-CX440', '4', '269.99', ''),
('CX405 Handycam® with Exmor R® CMOS sensor', 'HDR-CX405', '4.5', '199.99', '')