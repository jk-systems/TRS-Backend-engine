--resource_details

CREATE TABLE `trs`.`resource_details` (
  `resource_details_id` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NULL,
  `date` DATETIME NULL,
  `page_name` VARCHAR(45) NULL,
  `ek_number` VARCHAR(16) NOT NULL,
  `full_name` VARCHAR(45) NOT NULL,
  `role_id` INT NULL,
  `email` VARCHAR(45) NULL,
  `phone_no` INT NULL,
  `start_date` DATE NULL,
  `effective_end_date` DATE NULL,
  `emp_status` VARCHAR(45) NULL,
  `band_id` INT NULL,
  `department_id` INT NULL,
  `section_id` INT NULL,
  `division_id` INT NULL,
  `squad_id` INT NULL,
  `tribe_id` INT NULL,
  UNIQUE INDEX `resource_detailscol_UNIQUE` (`resource_details_id` ASC) VISIBLE,
  PRIMARY KEY (`ek_number`),
  UNIQUE INDEX `ek_number_UNIQUE` (`ek_number` ASC) VISIBLE);

--roles 

CREATE TABLE `trs`.`roles` (
  `role_id` INT NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(45) NULL,
  `group_role_id` INT NULL,
  PRIMARY KEY (`role_id`));

--group_roles 

CREATE TABLE `trs`.`group_roles` (
  `group_role_id` INT NOT NULL,
  `group_role_name` VARCHAR(45) NULL,
  PRIMARY KEY (`group_role_id`));

--band
CREATE TABLE `trs`.`band` (
  `band_id` INT NOT NULL,
  `band_name` VARCHAR(45) NULL,
  PRIMARY KEY (`band_id`));

--departments

CREATE TABLE `trs`.`departments` (
  `department_id` INT NOT NULL,
  `department_name` VARCHAR(45) NULL,
  PRIMARY KEY (`department_id`));

--sections

CREATE TABLE `trs`.`sections` (
  `section_id` INT NOT NULL,
  `section_name` VARCHAR(45) NULL,
  PRIMARY KEY (`section_id`));

--divisions

CREATE TABLE `trs`.`divisions` (
  `division_id` INT NOT NULL,
  `division_name` VARCHAR(45) NULL,
  PRIMARY KEY (`division_id`));

--tribes

CREATE TABLE `trs`.`tribes` (
  `tribe_id` INT NOT NULL,
  `tribe_name` VARCHAR(45) NULL,
  `tribe_type` VARCHAR(45) NULL,
  `tribe_lead` INT NULL,
  PRIMARY KEY (`tribe_id`));

--ALTER TABLE `trs`.`tribes` 
--CHANGE COLUMN `tribe_lead` `tribe_lead` INT NULL DEFAULT NULL ;

--squads

CREATE TABLE `trs`.`squads` (
  `squad_id` INT NOT NULL,
  `squad_name` VARCHAR(45) NULL,
  PRIMARY KEY (`squad_id`));