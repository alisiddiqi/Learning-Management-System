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
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`student` (
  `username` VARCHAR(45) NOT NULL,
  `major` VARCHAR(8) NOT NULL,
  `year` INT NOT NULL,
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
-- Table `lmsdb`.`course`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`course` (
  `courseid` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `isEval` INT NOT NULL,
  `finalEval` INT NOT NULL,
  `evalComplete` INT NOT NULL,
  PRIMARY KEY (`courseid`))
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
-- Table `lmsdb`.`user_1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`user_1` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);


-- -----------------------------------------------------
-- Table `lmsdb`.`teacher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`teacher` (
  `teacherid` INT NOT NULL,
  `isTA` VARCHAR(10) NOT NULL,
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
-- Table `lmsdb`.`notification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`notification` (
  `notificationId` INT NOT NULL,
  `date` DATE NOT NULL,
  `time` TIME NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`notificationId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`receives`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`receives` (
  `notificationId` INT NOT NULL,
  PRIMARY KEY (`notificationId`),
  INDEX `fk_notification_has_student_notification1_idx` (`notificationId` ASC) VISIBLE,
  CONSTRAINT `fk_notification_has_student_notification1`
    FOREIGN KEY (`notificationId`)
    REFERENCES `lmsdb`.`notification` (`notificationId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`communication`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`communication` (
  `communication_id` INT NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`communication_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`email_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`email_list` (
  `email` VARCHAR(45) NOT NULL,
  `studentID` INT NOT NULL,
  `communication_id` INT NOT NULL,
  INDEX `fk_email_list_communication1_idx` (`communication_id` ASC) VISIBLE,
  CONSTRAINT `fk_email_list_communication1`
    FOREIGN KEY (`communication_id`)
    REFERENCES `lmsdb`.`communication` (`communication_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`discussion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`discussion` (
  `username` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `content` VARCHAR(90) NOT NULL,
  `communication_id` INT NOT NULL,
  INDEX `fk_discussion_communication1_idx` (`communication_id` ASC) VISIBLE,
  CONSTRAINT `fk_discussion_communication1`
    FOREIGN KEY (`communication_id`)
    REFERENCES `lmsdb`.`communication` (`communication_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`writes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`writes` (
  `communication_id` INT NOT NULL,
  PRIMARY KEY (`communication_id`),
  INDEX `fk_communication_has_student_communication1_idx` (`communication_id` ASC) VISIBLE,
  CONSTRAINT `writes_communicationFK`
    FOREIGN KEY (`communication_id`)
    REFERENCES `lmsdb`.`communication` (`communication_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`takes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`takes` (
  `courseid` INT NOT NULL,
  `studentID` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`courseid`, `studentID`),
  INDEX `fk_course_has_student_student1_idx` (`studentID` ASC) VISIBLE,
  INDEX `fk_course_has_student_course1_idx` (`courseid` ASC) VISIBLE,
  CONSTRAINT `fk_course_has_student_course1`
    FOREIGN KEY (`courseid`)
    REFERENCES `lmsdb`.`course` (`courseid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_course_has_student_student1`
    FOREIGN KEY (`studentID`)
    REFERENCES `lmsdb`.`student` (`studentID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`courseteacher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`courseteacher` (
  `courseid` INT NOT NULL,
  `teacherid` INT NOT NULL,
  PRIMARY KEY (`courseid`, `teacherid`),
  INDEX `fk_course_has_teacher_teacher1_idx` (`teacherid` ASC) VISIBLE,
  INDEX `fk_course_has_teacher_course1_idx` (`courseid` ASC) VISIBLE,
  CONSTRAINT `fk_course_has_teacher_course1`
    FOREIGN KEY (`courseid`)
    REFERENCES `lmsdb`.`course` (`courseid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_course_has_teacher_teacher1`
    FOREIGN KEY (`teacherid`)
    REFERENCES `lmsdb`.`teacher` (`teacherid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`evaluation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`evaluation` (
  `teacherid` INT NOT NULL,
  `Q1` VARCHAR(4) NOT NULL,
  `Q2` VARCHAR(4) NOT NULL,
  `Q3` VARCHAR(4) NOT NULL,
  `Q4` VARCHAR(4) NOT NULL,
  `Q5` VARCHAR(4) NOT NULL,
  `Q6` VARCHAR(4) NOT NULL,
  `Q7` VARCHAR(4) NOT NULL,
  `Q8` VARCHAR(4) NOT NULL,
  `Q9` VARCHAR(4) NOT NULL,
  `Q10` VARCHAR(4) NOT NULL,
  `courseid` INT NOT NULL,
  `studentID` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`teacherid`),
  INDEX `fk_teacher_evaluation_teacher1_idx` (`teacherid` ASC) VISIBLE,
  INDEX `fk_teacher_evaluation_course1_idx` (`courseid` ASC) VISIBLE,
  INDEX `fk_teacher_evaluation_student1_idx` (`studentID` ASC) VISIBLE,
  CONSTRAINT `teacher_evalFK`
    FOREIGN KEY (`teacherid`)
    REFERENCES `lmsdb`.`teacher` (`teacherid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_teacher_evaluation_course1`
    FOREIGN KEY (`courseid`)
    REFERENCES `lmsdb`.`course` (`courseid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_teacher_evaluation_student1`
    FOREIGN KEY (`studentID`)
    REFERENCES `lmsdb`.`student` (`studentID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`Assignment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`Assignment` (
  `assignment_id` INT NOT NULL,
  `assignment_name` VARCHAR(45) NOT NULL,
  `due_date` DATE NOT NULL,
  `content` VARCHAR(45) NOT NULL,
  `courseid` INT NOT NULL,
  PRIMARY KEY (`assignment_id`),
  INDEX `fk_Assignment_course1_idx` (`courseid` ASC) VISIBLE,
  CONSTRAINT `fk_Assignment_course1`
    FOREIGN KEY (`courseid`)
    REFERENCES `lmsdb`.`course` (`courseid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`submit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`submit` (
  `assignment_id` INT NOT NULL,
  `studentID` VARCHAR(45) NOT NULL,
  `grade` INT NOT NULL,
  PRIMARY KEY (`assignment_id`, `studentID`),
  INDEX `fk_Assignment_has_student_student1_idx` (`studentID` ASC) VISIBLE,
  INDEX `fk_Assignment_has_student_Assignment1_idx` (`assignment_id` ASC) VISIBLE,
  CONSTRAINT `fk_Assignment_has_student_Assignment1`
    FOREIGN KEY (`assignment_id`)
    REFERENCES `lmsdb`.`Assignment` (`assignment_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Assignment_has_student_student1`
    FOREIGN KEY (`studentID`)
    REFERENCES `lmsdb`.`student` (`studentID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lmsdb`.`document`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lmsdb`.`document` (
  `id` INT(11) NOT NULL,
  `file` LONGBLOB NOT NULL,
  `courseid` INT NOT NULL,
  `teacherid` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_document_course1_idx` (`courseid` ASC) VISIBLE,
  INDEX `fk_document_teacher1_idx` (`teacherid` ASC) VISIBLE,
  CONSTRAINT `fk_document_course1`
    FOREIGN KEY (`courseid`)
    REFERENCES `lmsdb`.`course` (`courseid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_document_teacher1`
    FOREIGN KEY (`teacherid`)
    REFERENCES `lmsdb`.`teacher` (`teacherid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
