CREATE TABLE projectorDescription (
 id serial primary key,
 productId INTEGER,
 description TEXT
);

INSERT INTO projectorDescription (productId, description)
VALUES
(1, '4 times the image quality of Full HD'),
(1, 'Simply place it next to a wall'),
(1, 'Upscales all your content to 4K quality'),
(2, 'Projects images from 22” (56 cm) to 80” (203 cm)'),
(2, 'Highly portable design'),
(2, 'HD 720p resolution'),
(3, '1920 x 720 HD resolution'),
(3, 'Minimize necessary space with short throw distance of 3.77 ft (1.15 m)'),
(3, 'Connect speaker or headphones wirelessly via Bluetooth®'),
(4, 'Native 4K resolution (4096 x 2160)'),
(4, '80" to 120" screen size'),
(4, 'Laser powered, 2500 lumens brightness'),
(5, 'Native 4K resolution (4096 x 2160)'),
(5, '66 in to 147 in screen size'),
(5, 'Laser powered, 5000 lumens brightness'),
(6, '350000:1 dynamic contrast range'),
(6, 'Native 4K picture quality and upscaling'),
(6, 'HDR Compatible for UHD BD, streaming and broadcast')