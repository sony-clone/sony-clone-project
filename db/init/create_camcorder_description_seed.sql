CREATE TABLE camcordersDescription (
 id serial primary key,
 productId INTEGER,
 description TEXT
);

INSERT INTO camcordersDescription (productId, description)
VALUES
(1, '4K Ultra HD (3840 x 2160) recording of more subtle detail and color'),
(1, 'Balanced Optical SteadyShot™ with Intelligent Active mode'),
(1, '1.05 inch ZEISS Vario-Sonnar® T* lens with optical 20x zoom range'),
(2, 'Balanced Optical SteadyShot™ with Intelligent Active mode'),
(2, '30x optical zoom range out to 1.06 in wide angle'),
(2, 'Fast Intelligent AF for extra-smooth, quick, precise autofocus'),
(3, 'Optical SteadyShot™ with Intelligent Active Mode'),
(3, '26.8 mm wide-angle lens with 30x optical zoom'),
(3, 'Fast Intelligent AF for extra-smooth, quick, precise autofocus'),
(4, '4K Ultra HD (3840 x 2160) recording'),
(4, 'Balanced Optical SteadyShot™'),
(4, '29.8 mm ZEISS® Vario-Sonnar® T* lens'),
(5, 'Optical SteadyShot™ with Intelligent Active Mode'),
(5, '26.8 mm wide-angle lens with 30x optical zoom'),
(5, '50 Mbps high-bitrate recording'),
(6, 'Optical SteadyShot™ with Intelligent Active Mode'),
(6, '26.8 mm wide-angle lens with 30x optical zoom'),
(6, '50 Mbps high-bitrate recording')