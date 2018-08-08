-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2018 at 09:17 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `manufacturers`
--

CREATE TABLE `manufacturers` (
  `manufacturer` varchar(200) DEFAULT NULL,
  `manId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manufacturers`
--

INSERT INTO `manufacturers` (`manufacturer`, `manId`) VALUES
('Samsung', 1),
('Apple', 2),
('Sony', 3);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `manufacturerId` int(11) NOT NULL,
  `discount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `description`, `manufacturerId`, `discount`) VALUES
(1, 'S7 Edge', 659, 'https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg', '5.5\" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resista', 1, 40),
(2, 'iPhone 7', 769, 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-7/matte-black/Apple-iPhone7-MatBlack-1-3x.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 2, 20),
(3, 'Xperia XZ', 649, 'https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 3, 30),
(4, 'Note 3', 333, 'https://www.91-img.com/pictures/57915-v1-samsung-galaxy-note-3-mobile-phone-large-1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 1, 10),
(5, 'S5', 456, 'https://www.91-img.com/pictures/samsung-galaxy-s5-neo-mobile-phone-large-1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 1, 15),
(6, 'S8', 780, 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/samsung-galaxy-s8-active/meteor-gray/Samsung-Galaxy-S8-Active-MeteorGray-1-3x.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 1, 25),
(7, 'Iphone 8', 699, 'https://images-na.ssl-images-amazon.com/images/I/71pAnqVYzQL._SY550_.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 2, 10),
(8, 'Iphone X', 655, 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/silver/Apple-iPhoneX-Silver-1-3x.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 2, 35),
(9, 'Iphone 6', 599, 'https://image.darty.com/telephonie/telephone_mobile_seul/iphone/apple_iph_x_64g_sg_d1710124368355A_163407290.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 2, 40),
(10, 'Xperia Z5', 799, 'http://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/06/thumb_5856_phone_front_big.jpeg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 3, 65),
(11, 'Xperia Z1', 545, 'https://assets.sopili.net/s3pxy/actual-size/xperia-z1/default-front.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 3, 50),
(12, 'Xperia XZ1', 899, 'https://cf1.s3.souqcdn.com/item/2017/11/07/24/06/08/55/item_XL_24060855_67701426.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 3, 45),
(13, 'S7 Edge', 659, 'https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg', '5.5\" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resista', 1, 0),
(14, 'iPhone 7', 769, 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-7/matte-black/Apple-iPhone7-MatBlack-1-3x.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 2, 0),
(15, 'Xperia XZ', 649, 'https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 3, 0),
(16, 'Note 3', 333, 'https://www.91-img.com/pictures/57915-v1-samsung-galaxy-note-3-mobile-phone-large-1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 1, 0),
(17, 'S5', 456, 'https://www.91-img.com/pictures/samsung-galaxy-s5-neo-mobile-phone-large-1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 1, 0),
(18, 'S8', 780, 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/samsung-galaxy-s8-active/meteor-gray/Samsung-Galaxy-S8-Active-MeteorGray-1-3x.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis pe', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `city` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `state` varchar(200) DEFAULT NULL,
  `zip` int(11) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `pw` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `city`, `address`, `state`, `zip`, `birthdate`, `gender`, `name`, `email`, `pw`) VALUES
(5, NULL, NULL, NULL, NULL, NULL, NULL, 'petya', 'petya@vagyok.com', '$2b$10$uh61JbPXJaIKQYQJVDzz4.TIIb1xZ6A6zMkMf9Nwofj1aitaYQ7xS'),
(6, NULL, NULL, NULL, NULL, NULL, NULL, 'ez', 'csak@egyteszt.com', '$2b$10$fvM7dcL0oGoPAY5JXtRg4uUg7QEZdlyeke6XHRI/v9qRfEXJ8vlcG'),
(7, NULL, NULL, NULL, NULL, NULL, NULL, 'en', 'vagyok@nem.com', '$2b$10$uXLR4asTRot34CNAAZQsh.sjI7kh6PcwW6g76wS4upK2mWU9Ie2MC'),
(8, NULL, NULL, NULL, NULL, NULL, NULL, 'ezmar', 'remelem@jo.lesz', '$2b$10$7hgWRI4yHocViumQfJ6I6.mvAYmF60pLDqitbGTFEh1a2z2HkVd86'),
(9, NULL, NULL, NULL, NULL, NULL, NULL, 'ezvagyok', 'en@peti.com', '$2b$10$PvMSycvtSRrIyFUIjUCXmOUw2KTA6h910MW4Og9waYZpIMVLErwxG'),
(10, NULL, NULL, NULL, NULL, NULL, NULL, 'asfafas', 'pikk@pakk.com', '$2b$10$BOju5fnRYnZ98xZDuHP2b.y2b3rbX4zv2nBO1x7LKh5XJgH538wd6'),
(11, NULL, NULL, NULL, NULL, NULL, NULL, 'ababb', 'ababb@ababb.com', '$2b$10$cuxa.EYxjbt5fLJBzbUgk.tPyLt/Fb/2uWGKFGdsQa2Oa5OOEPYZW'),
(12, NULL, NULL, NULL, NULL, NULL, NULL, 'kaba', 'bak@mak.com', '$2b$10$/ejiBq7BR2wrhGnTfJ8Hy./62uOAPWtPLUSqDICSiFrXwN6jDNIeu'),
(13, NULL, NULL, NULL, NULL, NULL, NULL, 'he', 'llo@llo.com', '$2b$10$vlERFYxEBwmJJT7XOWPAsu26h0/HAEHRmZU9up0UtPnSEahQPEyQW'),
(14, NULL, NULL, NULL, NULL, NULL, NULL, 'gkgk', 'gkgk@gkgk.gkgk', '$2b$10$0QcWfuBW2bHQOIwvubsg7uBhMBHpe22LTrTlcAlmMQ7HbUUeasyYO'),
(28, NULL, NULL, NULL, NULL, NULL, NULL, 'Peti Gyulavári', 'peti@gmail.com', '$2b$10$OTxsuehe1nfxc13h5.ytW.bxLn1MwV1C52h8F53cppH6r6pwtrgBC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD PRIMARY KEY (`manId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `manufacturers`
--
ALTER TABLE `manufacturers`
  MODIFY `manId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
