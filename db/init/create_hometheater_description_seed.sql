CREATE TABLE htDescription (
 id serial primary key,
 productId INTEGER,
 description TEXT
);

INSERT INTO htDescription (productId, description)
VALUES
(1, 'S-Force PRO Front Surround'),
(1, 'Wireless subwoofer with 2-way setup'),
(1, 'Optimal bass with Sofa Mode'),
(2, 'Immersive 3D surround by Dolby® Atmos'),
(2, 'S-Force Pro with Wave-front technology'),
(2, '800 W total power output'),
(3, '350 W total power output'),
(3, '4K compatibility'),
(3, 'S-Force PRO front surround sound'),
(4, '300 W total power output'),
(4, 'Wireless subwoofer with 2-way setup'),
(4, 'Bluetooth® wireless audio streaming'),
(5, 'High Resolution Audio'),
(5, '400 W total power output'),
(5, '4K compatible'),
(6, '330 W total power output'),
(6, '4K compatibility'),
(6, 'S-Force PRO front surround sound')
