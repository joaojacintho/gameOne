create database gameOne;
use gameOne;

create table usuario(
	id_usuario int primary key auto_increment,
    nome_usuario varchar(50),
    email_usuario varchar(50),
    senha varchar(50)
);

drop table usuario;
select * from usuario;