/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : student

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-05-30 23:44:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `birth` varchar(50) DEFAULT NULL,
  `sex` int(1) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', 'abnc', '12', '1', 'mdzzzzzz');
INSERT INTO `student` VALUES ('2', 'xingmingaaaaaa', '1999999', '1', '????');
INSERT INTO `student` VALUES ('3', 'xingmingaaaaaa', '1999999', '1', '????');
INSERT INTO `student` VALUES ('4', 'ghjghj', '0', '1', 'jghjghjgh');
INSERT INTO `student` VALUES ('5', 'fghfghfgh', 'asdf4235df', '1', 'gdfgdfgdfg');
INSERT INTO `student` VALUES ('6', 'hfghfghfg', 'fghfg', '1', 'fghfghfghgfggfhhfghfghfghfgfg');
INSERT INTO `student` VALUES ('7', 'dxfgxcv', 'bngrhfghf', '1', 'ghfghfghfgh');
INSERT INTO `student` VALUES ('8', 'asdasd', 'asdasd', '1', 'asdasdasdas');
INSERT INTO `student` VALUES ('9', 'asdasd', 'asdasd', '1', 'asdasdasdas');
INSERT INTO `student` VALUES ('10', 'fsdfsdfsd', 'sdfsdf', '1', 'sdfsdfsdf');
INSERT INTO `student` VALUES ('11', 'sdfsdf', 'sdfsdfsdf', '1', 'sdfsdf');
INSERT INTO `student` VALUES ('12', 'hjkhjkhjk', 'hjkhj', '1', 'khjkhjkhjk');
INSERT INTO `student` VALUES ('13', 'dfgdfgdfg', 'gdfgdfgdfgdfgdfg', '1', 'dfgdfgdf');
