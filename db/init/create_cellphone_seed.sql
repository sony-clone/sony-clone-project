CREATE TABLE cellphones (
 id serial primary key,
 product TEXT,
 slogan TEXT,
 whereToBuy TEXT,
image TEXT
);

INSERT INTO cellphones (product, slogan, whereToBuy, image)
VALUES
('Xperia® XZ Premium', 'Make the ordinary extraordinary', '', ''),
('Xperia® XA Ultra', 'Make your nights shine', '', ''),
('Xperia® X Performance', 'Masterful performance', '', ''),
('Xperia® XA', 'A perfect fit', '', ''),
('Xperia® X', 'Always one step ahead', '', ''),
('Xperia® Z5', 'Never miss a moment.', '', '')