-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lmsdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lmsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lmsdb` DEFAULT CHARACTER SET utf8 ;
USE `lmsdb` ;

-- -----------------------------------------------------
-- Table `lmsdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`user` (
  `username` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `role` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`student` (
  `username` VARCHAR(45) NOT NULL,
  `major` VARCHAR(8) NULL,
  `year` INT NULL,
  `studentID` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`studentID`),
  INDEX `student_userFK_idx` (`username` ASC) VISIBLE,
  CONSTRAINT `student_userFK`
    FOREIGN KEY (`username`)
    REFERENCES `lmsdb`.`user` (`username`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`teacher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`teacher` (
  `teacherid` INT NOT NULL,
  `isTA` VARCHAR(4) NULL,
  `username` VARCHAR(45) NOT NULL,
  INDEX `teacher_userFK_idx` (`username` ASC) VISIBLE,
  PRIMARY KEY (`teacherid`),
  CONSTRAINT `teacher_userFK`
    FOREIGN KEY (`username`)
    REFERENCES `lmsdb`.`user` (`username`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`course`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`course` (
  `courseid` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `time` VARCHAR(45) NULL,
  `teacher_teacherid` INT NOT NULL,
  PRIMARY KEY (`courseid`, `teacher_teacherid`),
  INDEX `fk_course_teacher1_idx` (`teacher_teacherid` ASC) VISIBLE,
  CONSTRAINT `fk_course_teacher1`
    FOREIGN KEY (`teacher_teacherid`)
    REFERENCES `lmsdb`.`teacher` (`teacherid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`admin` (
  `adminid` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`adminid`),
  INDEX `admin_userFK_idx` (`username` ASC) VISIBLE,
  CONSTRAINT `admin_userFK`
    FOREIGN KEY (`username`)
    REFERENCES `lmsdb`.`user` (`username`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`timestamps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`timestamps` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL);


-- -----------------------------------------------------
-- Table `lmsdb`.`takes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`takes` (
  `course_courseid` INT NOT NULL,
  `student_studentid` INT NOT NULL,
  PRIMARY KEY (`course_courseid`, `student_studentid`),
  INDEX `fk_course_has_student_student1_idx` (`student_studentid` ASC) VISIBLE,
  INDEX `fk_course_has_student_course_idx` (`course_courseid` ASC) VISIBLE,
  CONSTRAINT `fk_course_has_student_course`
    FOREIGN KEY (`course_courseid`)
    REFERENCES `lmsdb`.`course` (`courseid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_has_student_student1`
    FOREIGN KEY (`student_studentid`)
    REFERENCES `lmsdb`.`student` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`user_1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`user_1` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
