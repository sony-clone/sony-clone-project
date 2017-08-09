CREATE TABLE projector (
 id serial primary key,
 product TEXT,
 series TEXT,
 rating TEXT,
 price TEXT,
led BOOLEAN,
smartTv BOOLEAN,
image TEXT
);

INSERT INTO projector  (product, series, rating, price, image)
VALUES
('4K Ultra Short Throw Projector', 'LSPX-W1S', '5', '50000.00', ''),
('Portable Ultra Short Throw Projector', 'LSPX-P1', '3.5', '999.99', ''),
('MP-CL1A mobile projector from Sony', 'MP-CL1A', '5', '399.99', ''),
('Ultra-Short Throw 4K HDR Home Theater Projector', 'VPL-VZ1000ES', '3', '24999.99', ''),
('4K SXRD Home Cinema Projector', 'VPL-VW5000ES', '5', '60000.00', ''),
('4K SXRD Home Cinema Projector', 'VPL-VW675ES', '5', '14999.99', '')
