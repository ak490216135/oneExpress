/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : student

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-06-02 18:33:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `grade`
-- ----------------------------
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `gid` int(50) NOT NULL AUTO_INCREMENT,
  `grade_name` varchar(200) NOT NULL,
  `parent_gid` int(50) DEFAULT NULL,
  `description` text,
  `tid` int(50) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of grade
-- ----------------------------

-- ----------------------------
-- Table structure for `student`
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `birth` varchar(50) CHARACTER SET utf8 NOT NULL,
  `sex` int(1) NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL,
  `create_date` varchar(13) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', 'abnc', '12', '1', 'mdzzzzzz', '0');
INSERT INTO `student` VALUES ('2', 'xingmingaaaaaa', '1999999', '1', 'cvbcvbcvb', '0');
INSERT INTO `student` VALUES ('3', 'xingmingaaaaaa', '1999999', '1', '????', '0');
INSERT INTO `student` VALUES ('4', 'ghjghj', '0', '1', 'jghjghjgh', '0');
INSERT INTO `student` VALUES ('20', 'AAAA', '19990909', '0', 'ffdgdfgdfg', '0');
INSERT INTO `student` VALUES ('6', 'hfghfghfg', 'fghfg', '1', 'fghfghfghgfggfhhfghfghfghfgfg', '0');
INSERT INTO `student` VALUES ('7', 'dxfgxcv', 'bngrhfghf', '1', 'ghfghfghfgh', '0');
INSERT INTO `student` VALUES ('8', 'asdasd', 'asdasd', '1', 'asdasdasdas', '0');
INSERT INTO `student` VALUES ('9', 'asdasd', 'asdasd', '1', 'asdasdasdas', '0');
INSERT INTO `student` VALUES ('10', 'fsdfsdfsd', 'sdfsdf', '1', 'sdfsdfsdf', '0');
INSERT INTO `student` VALUES ('11', 'sdfsdf', 'sdfsdfsdf', '1', 'sdfsdf', '0');
INSERT INTO `student` VALUES ('12', 'hjkhjkhjk', 'hjkhj', '1', 'khjkhjkhjk', '0');
INSERT INTO `student` VALUES ('14', 'fdgdfgdfg', 'fgdf', '1', 'gdfgdfgfdg', '0');
INSERT INTO `student` VALUES ('15', 'asdasd', 'zv', '1', 'xcvxcvbcvbcvb', '0');
INSERT INTO `student` VALUES ('21', 'gdfgdfg', 'dfgdf', '1', 'gdfg', '0');
INSERT INTO `student` VALUES ('22', 'vmvmvb', 'mbvmvb', '1', 'mvbmbvmvbmvbm', '2147483647');
INSERT INTO `student` VALUES ('23', 'vxcvxcvxcv', 'vxc', '1', 'xcvxcvxc', '1496302180953');
INSERT INTO `student` VALUES ('24', '123', '234', '1', '345', '1496302225881');
