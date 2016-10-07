SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `reborn`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(16) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(128) NOT NULL,
  `email` varchar(255) NOT NULL,
  `auth_ticket` varchar(128) NOT NULL,
  `rank` int(8) NOT NULL DEFAULT '1',
  `credits` int(16) NOT NULL DEFAULT '0',
  `game_tickets` int(16) NOT NULL DEFAULT '0',
  `birth` date DEFAULT NULL,
  `figure` varchar(255) NOT NULL,
  `mission` varchar(50) DEFAULT NULL,
  `console_mission` varchar(50) DEFAULT NULL,
  `gender` enum('M','F') NOT NULL DEFAULT 'M',
  `last_online` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `online` enum('0','1') NOT NULL DEFAULT '0',
  `ip_last` varchar(15) DEFAULT NULL,
  `ip_reg` varchar(15) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `auth_ticket`, `rank`, `credits`, `game_tickets`, `birth`, `figure`, `mission`, `console_mission`, `gender`, `last_online`, `online`, `ip_last`, `ip_reg`) VALUES
(1, 'Burak', 'burak', 'burak@burak.fr', 'burak', 1, 1000, 10, NULL, 'ch=s02/53,51,44', 'BloonReborn Developer', 'BloonReborn Developer', 'M', '2016-10-07 16:27:32', '0', '127.0.0.1', '127.0.0.1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(16) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
