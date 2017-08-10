CREATE TABLE users (
 id serial primary key,
 userName TEXT,
 firstName TEXT,
 lastName TEXT,
 userPassword TEXT,
 userEmail TEXT,
 userType TEXT,
 cardNumber NUMERIC,
 cardSecurityCode INTEGER,
 cardExperationMonth INTEGER,
 cardExperationYear INTEGER,
 image TEXT
);

INSERT INTO users (userName, firstName, lastName, userPassword, userEmail, userType, cardNumber, cardSecurityCode, cardExperationMonth, cardExperationYear, image)
VALUES
('JimmyJames', 'Jeremey', 'Robertson', 'iCantSeeYou', 'jrobertson@gmail.com', 'user', '223453255643', '488', '08', '18', ''),
('Douglez', 'Doug', 'Maxfield', 'iTooAmLooking', 'dmaxfield@gmail.com', 'Creator', '223144456642', '145', '08', '18', ''),
('Tertian', 'Braden', 'Winsor', 'StopLookingAtMyPassword', 'braden.winsor.dev@gmail.com', 'Creator', '22334123322313', '333', '08', '18', ''),
('Burt', 'Jesse', 'Boone', 'ohImLookingAtYourPassWord', 'jesse.boone@gmail.com', 'Creator', '223123456642', '231', '08', '18', '')