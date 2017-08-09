CREATE TABLE televisions (
 id serial primary key,
 product TEXT,
 series TEXT,
 rating TEXT,
 description TEXT,
 model TEXT,
 price TEXT,
led BOOLEAN,
smartTv BOOLEAN,
image TEXT
);

INSERT INTO televisions (product, series, rating, model, price, led, smartTv, image)
VALUES
('Z9D', 'XBR Z9D', '4.5', 'Z9D LED 4k Ultra HD', '4499.99', 'true', 'true', ''),
('A1E', 'A1E', '4', 'A1E OLED 4k Ultra HD', '3499.99', 'false', 'true', ''),
('X940E/X930E', 'XBR X940E/ X930E', '4', 'X940E X930E LED 4K Ultra HD', '1799.99', 'true', 'true', ''),
('X900E', 'XBR X900', '4.5', 'X900E LED 4K Ultra HD', '1199.99', 'true', 'true', ''),
('X850E', 'XBR X850E', '4.5', 'X850E LED 4K Ultra HD', '1599.99', 'true', 'true', ''),
('X800E', 'XBR X800E', '3.5', 'X800E LED 4K Ultra HD', '749.99', 'true', 'true', '')
