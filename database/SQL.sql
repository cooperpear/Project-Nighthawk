use nodejs_login1;

create table users(
id integer,
first_name varchar(100),
last_name varchar(100),
email varchar(200),
password varchar(200),
created varchar(200)
);

create table jobs(
id integer,
user varchar(100),
width INTEGER,
height INTEGER,
shape varchar(200),
quantity INTEGER,
created varchar(200)
);

