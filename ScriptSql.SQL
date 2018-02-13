/*
Created: 12/02/2018
Modified: 13/02/2018
Model: Microsoft SQL Server 2016
Database: MS SQL Server 2016
*/


-- Create tables section -------------------------------------------------

-- Table Clientes

CREATE TABLE [Clientes]
(
 [ClienteID] Int IDENTITY(1,1) NOT NULL,
 [Nombres] Varchar(50) NOT NULL,
 [Apellidos] Varchar(50) NOT NULL,
 [FechaNacimiento] Date NOT NULL
)
go

-- Add keys for table Clientes

ALTER TABLE [Clientes] ADD CONSTRAINT [Key1] PRIMARY KEY ([ClienteID])
go



