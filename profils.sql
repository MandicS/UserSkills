-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2019 at 12:39 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `profils`
--

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `skill_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`skill_id`, `name`, `description`, `user_id`) VALUES
(290, 'ascasc', 'ascasc', 6),
(291, 'asc', 'asc', 6);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` text,
  `password` text,
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `birthday`) VALUES
(2, 'test', 'test@gmail.com', '$2b$10$U344jZYsGqlb.I2zeN7N3OM3NW6d02Ukgz761nPBzeYNDlcGab0KK', '2017-06-15'),
(3, 'test', 'manda@gmail.com', '$2b$10$AeMptVD7y/aiKRG3RX0G3.PNQ7Uew5O0uTsqyAmNiLaYZoxYSnaOS', '2017-06-15'),
(6, 'mandara', 'mandara@gmail.com', '$2b$10$bvZiXDYRAXJfu4n9HDC8Oez71lUF32/oNLhS12JK53vV0LSWSUHRK', '1995-03-23'),
(7, 'stefan', 'stefan@gmail.com', '$2b$10$g5pl4YikKCP9Hkohn2HAhOhvvF3Eu3HLIFEcX.oxKSRT.BPB.uB5a', '2019-02-05'),
(8, 'marija', 'marija@gmail.com', '$2b$10$t/lJq6L9JPfPlRmsYyFMIeACqUKzRsyes/NElDSEfVe1KAAzuzW5.', '1996-08-03'),
(9, 'some name of the skill', 'email@gmail.com', '$2b$10$h3GKCdGkPqag0j10iEKczeF3tGpxJP4DZu7UPiKI8y7qG91s73B7S', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`skill_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=292;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `skills`
--
ALTER TABLE `skills`
  ADD CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
