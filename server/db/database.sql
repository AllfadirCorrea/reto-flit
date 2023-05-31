CREATE DATABASE IF NOT EXISTS alumnosdb;

USE alumnosdb;

CREATE TABLE especialidades (
    clave VARCHAR(10) NOT NULL,
    especialidad VARCHAR(20) NOT NULL,
    PRIMARY KEY(clave)
);

CREATE TABLE alumnos(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    apellido_p VARCHAR(20) NOT NULL,
    apellido_m VARCHAR(20) DEFAULT NULL,
    n_boleta INT(11) NOT NULL UNIQUE,
    especialidad VARCHAR(10) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (especialidad) REFERENCES especialidades(clave)
);

INSERT INTO especialidades VALUES
    ('ESP_MUS', 'MUSICA'),
    ('ESP_MED', 'MEDICINA'),
    ('ESP_BIO', 'BIOQUIMICA')

INSERT INTO alumnos VALUES
    (1, 'Diana', 'Alanis', 'Chavez', 051198, 'ESP_BIO');
    (2, 'Paulina', 'Bucio', 'Vega', 10698, 'ESP_MED');