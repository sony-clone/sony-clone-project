
CREATE TABLE cameraDescription (
 id serial primary key,
 productId INTEGER,
 description TEXT
);

INSERT INTO cameraDescription (productId, description)
VALUES
(1, '35 mm full-frame stacked CMOS sensor with integral memory for high speed'),
(1, 'High-speed continuous shooting at up to 20fps'),
(1, 'Enhanced Fast Hybrid AF with wide AF coverage featuring 693-point focal-plane phase-detection AF'),
(2, 'Unrivalled AF and buffer memory for continuous shooting of over 300 shots'),
(2, '5-axis image stabilization equivalent to using 5-steps-faster4 shutter speed'),
(2, 'Touchscreen for intuitive, convenient focus control'),
(3, 'Effective 42.4MP (approx.) 35mm full-frame Exmor R® CMOS sensor'),
(3, 'Hybrid Phase Detection AF System and up to 12fps continuous shooting'),
(3, '5-axis SteadyShot INSIDE — body-integrated image stabilization for A-mount model'),
(4, 'Featuring the world''s first5 42.4 MP6 back-illuminated full-frame CMOS sensor'),
(4, 'BIONZ X™ extra-wide ISO 50-102400 range 7'),
(4, 'Enhanced Fast Hybrid AF with 399-point focal plane phase-detection AF coverage.'),
(5, '35 mm full-frame Exmor® CMOS sensor with approx. 12.2 effective megapixels'),
(5, '4K movie recording featuring full pixel readout 8 without pixel binning'),
(5, '5-axis optical image stabilization minimizes blur'),
(6, 'Full-frame camera with 5-axis image stabilization'),
(6, 'Fast and effective, enhanced Fast Hybrid AF'),
(6, '24.3 MP 35 mm full-frame Exmor® CMOS sensor')
