CREATE TABLE cellphoneDescription (
 id serial primary key,
 productId INTEGER,
 description TEXT
);

INSERT INTO cellphoneDescription (productId, description)
VALUES
(1, 'Motion Eye™ camera'),
(1, '4K HDR display'),
(1, 'Water resistant'),
(2, 'Motion Eye™ camera'),
(2, 'Water-resistant'),
(2, 'Smart battery management'),
(3, 'Advanced 23MP camera'),
(3, '5" HD display'),
(3, 'Fast performance'),
(4, '6" Full HD display'),
(4, '23 MP main camera'),
(4, '16 MP selfie camera'),
(5, '5.5" HD display'),
(5, 'Fast performance'),
(5, 'Adapts to you'),
(6, 'Triple image sensing technology'),
(6, 'Polished metal back'),
(6, 'Smart battery management')