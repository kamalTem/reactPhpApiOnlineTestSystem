-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 19 2019 г., 22:44
-- Версия сервера: 10.1.32-MariaDB
-- Версия PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `diplom`
--

-- --------------------------------------------------------

--
-- Структура таблицы `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `groups`
--

INSERT INTO `groups` (`id`, `name`) VALUES
(1, 'Администратор'),
(2, 'Препод'),
(3, 'Ученик');

-- --------------------------------------------------------

--
-- Структура таблицы `lessons`
--

CREATE TABLE `lessons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `id_subjects` int(11) NOT NULL,
  `theory` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `lessons`
--

INSERT INTO `lessons` (`id`, `name`, `id_subjects`, `theory`) VALUES
(5, 'введение', 61, 'яяяяяя'),
(8, 'ооп', 61, 'Инкапсуляция\r\nИнкапсуляция — принцип, согласно которому атрибуты объекта заключаются в этот объект. Это задает для атрибутов контекст. Это также позволяет программисту ограничить доступ к атрибутам, чтобы они изменялись и использовались только через методы, которые программист собирается применять:'),
(9, 'Введение в JavaScript', 60, ''),
(10, 'Переменные', 60, ''),
(11, 'наследование', 61, ''),
(12, 'переменые', 63, 'zzzzz');

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `message`) VALUES
(1, 'Лера', 'lera@lera.com', 'Добрый день,хотелось бы узнать на счет курсов по ангуляр'),
(2, 'rim', 'rim@rim.com', 'Здравствуйте,когда будет занятие по java т к последние перенесли'),
(3, 'fdsfds', 'fsdfsd@dasdas.com', 'fdsfdsfdfdfdsf'),
(4, 'Николая', 'nik@nik.com', 'Добрый день'),
(5, 'Ольга', 'ol@ol.com', 'Какие тесты будут в будущем?'),
(6, 'егор', 'egor@egor.com', 'rewfewfwe'),
(7, 'Дмитрий', 'dmit@dmit.com', 'какдела');

-- --------------------------------------------------------

--
-- Структура таблицы `phone_applications`
--

CREATE TABLE `phone_applications` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `phone_applications`
--

INSERT INTO `phone_applications` (`id`, `name`, `phone`) VALUES
(16, 'lena', 43243423),
(17, 'коля', 111111),
(18, 'Петя', 2147483647),
(19, 'Мила', 4323432),
(20, 'lena', 423423),
(21, 'лера', 432432),
(22, 'Дмитрий', 2147483647),
(23, 'Егор', 432432);

-- --------------------------------------------------------

--
-- Структура таблицы `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `subjects`
--

INSERT INTO `subjects` (`id`, `name`) VALUES
(60, 'javascript'),
(61, 'java'),
(63, 'ReactJS'),
(66, 'angularJS');

-- --------------------------------------------------------

--
-- Структура таблицы `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `date_start` int(11) NOT NULL,
  `date_end` int(11) DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `id_lesson` int(11) NOT NULL,
  `questions` text NOT NULL,
  `answers` text NOT NULL,
  `result` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tests`
--

INSERT INTO `tests` (`id`, `date_start`, `date_end`, `id_user`, `id_lesson`, `questions`, `answers`, `result`) VALUES
(33, 1560677234, 1560677251, 10, 60, '[{\"id\":\"1\",\"id_lesson\":\"3\",\"question\":\"1\",\"answers\":\"[\\\"2\\\",\\\"3\\\",\\\"4\\\",\\\"5\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"},{\"id\":\"2\",\"id_lesson\":\"3\",\"question\":\"\\u0441\\u043d\\u0435\\u0433\",\"answers\":\"[\\\"\\\\u0431\\\\u0435\\\\u043b\\\\u044b\\\\u0439\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0441\\\\u0438\\\\u043d\\\\u0438\\\",\\\"\\\\u0436\\\\u0435\\\\u0434\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '[\"4\",\"3\"]', 2),
(34, 1560677267, NULL, 10, 60, '[{\"id\":\"2\",\"id_lesson\":\"3\",\"question\":\"\\u0441\\u043d\\u0435\\u0433\",\"answers\":\"[\\\"\\\\u0431\\\\u0435\\\\u043b\\\\u044b\\\\u0439\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0441\\\\u0438\\\\u043d\\\\u0438\\\",\\\"\\\\u0436\\\\u0435\\\\u0434\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"},{\"id\":\"1\",\"id_lesson\":\"3\",\"question\":\"1\",\"answers\":\"[\\\"2\\\",\\\"3\\\",\\\"4\\\",\\\"5\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(35, 1560677283, 1560677288, 10, 60, '[{\"id\":\"1\",\"id_lesson\":\"3\",\"question\":\"1\",\"answers\":\"[\\\"2\\\",\\\"3\\\",\\\"4\\\",\\\"5\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"},{\"id\":\"2\",\"id_lesson\":\"3\",\"question\":\"\\u0441\\u043d\\u0435\\u0433\",\"answers\":\"[\\\"\\\\u0431\\\\u0435\\\\u043b\\\\u044b\\\\u0439\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0441\\\\u0438\\\\u043d\\\\u0438\\\",\\\"\\\\u0436\\\\u0435\\\\u0434\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '[\"1\",\"3\"]', 1),
(36, 1560677390, 1560677392, 10, 60, '[{\"id\":\"2\",\"id_lesson\":\"3\",\"question\":\"\\u0441\\u043d\\u0435\\u0433\",\"answers\":\"[\\\"\\\\u0431\\\\u0435\\\\u043b\\\\u044b\\\\u0439\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0441\\\\u0438\\\\u043d\\\\u0438\\\",\\\"\\\\u0436\\\\u0435\\\\u0434\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"},{\"id\":\"1\",\"id_lesson\":\"3\",\"question\":\"1\",\"answers\":\"[\\\"2\\\",\\\"3\\\",\\\"4\\\",\\\"5\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '[\"3\",\"1\"]', 1),
(37, 1560694890, NULL, 10, 61, '[]', '', 0),
(38, 1560714554, NULL, 10, 60, '[]', '', 0),
(39, 1560963618, NULL, 11, 60, '[]', '', 0),
(40, 1560963670, NULL, 11, 61, '[]', '', 0),
(41, 1560963710, NULL, 11, 61, '[]', '', 0),
(42, 1560963733, NULL, 11, 61, '[]', '', 0),
(43, 1560963820, NULL, 11, 61, '[]', '', 0),
(44, 1560964137, 1560964141, 11, 60, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '[\"2\"]', 0),
(45, 1560964173, NULL, 11, 60, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(46, 1560964191, NULL, 11, 60, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(47, 1560964277, NULL, 11, 60, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(48, 1560964311, NULL, 11, 60, '[]', '', 0),
(49, 1560964343, NULL, 11, 60, '[]', '', 0),
(50, 1560964347, NULL, 11, 60, '[]', '', 0),
(51, 1560964439, NULL, 11, 10, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(52, 1560964727, 1560964729, 11, 10, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '[\"2\"]', 0),
(53, 1560964743, NULL, 11, 10, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(54, 1560965746, NULL, 11, 10, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(55, 1560965889, NULL, 11, 10, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(56, 1560965919, NULL, 11, 10, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(57, 1560966144, NULL, 11, 10, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '', 0),
(58, 1560966162, 1560966165, 11, 10, '[{\"id\":\"4\",\"id_lesson\":\"10\",\"question\":\"\\u043d\\u0435\\u0431\\u043e\",\"answers\":\"[\\\"\\\\u0441\\\\u0438\\\\u043d\\\",\\\"\\\\u0436\\\\u0435\\\\u043b\\\\u0442\\\",\\\"\\\\u043a\\\\u0440\\\\u0430\\\\u0441\\\\u043d\\\",\\\"\\\\u0437\\\\u0435\\\\u043b\\\"]\",\"suject\":\"javascript\",\"lesson\":\"\\u041f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0435\"}]', '[\"1\"]', 1),
(59, 1560968513, 1560968515, 17, 12, '[{\"id\":\"3\",\"id_lesson\":\"12\",\"question\":\"12\",\"answers\":\"[\\\"1\\\",\\\"2\\\",\\\"3\\\",\\\"4\\\"]\",\"suject\":\"ReactJS\",\"lesson\":\"\\u043f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u044b\\u0435\"}]', '[\"1\"]', 0),
(60, 1560975618, 1560975619, 17, 12, '[{\"id\":\"3\",\"id_lesson\":\"12\",\"question\":\"12\",\"answers\":\"[\\\"1\\\",\\\"2\\\",\\\"3\\\",\\\"4\\\"]\",\"suject\":\"ReactJS\",\"lesson\":\"\\u043f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u044b\\u0435\"}]', '[\"1\"]', 0),
(61, 1560976892, 1560976893, 19, 12, '[{\"id\":\"3\",\"id_lesson\":\"12\",\"question\":\"12\",\"answers\":\"[\\\"1\\\",\\\"2\\\",\\\"3\\\",\\\"4\\\"]\",\"suject\":\"ReactJS\",\"lesson\":\"\\u043f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u044b\\u0435\"}]', '[\"3\"]', 0),
(62, 1560976921, 1560976923, 19, 12, '[{\"id\":\"3\",\"id_lesson\":\"12\",\"question\":\"12\",\"answers\":\"[\\\"1\\\",\\\"2\\\",\\\"3\\\",\\\"4\\\"]\",\"suject\":\"ReactJS\",\"lesson\":\"\\u043f\\u0435\\u0440\\u0435\\u043c\\u0435\\u043d\\u044b\\u0435\"}]', '[\"4\"]', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `test_question`
--

CREATE TABLE `test_question` (
  `id` int(11) NOT NULL,
  `id_lesson` int(11) NOT NULL,
  `question` text NOT NULL,
  `true_answer` smallint(6) NOT NULL,
  `answers` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `test_question`
--

INSERT INTO `test_question` (`id`, `id_lesson`, `question`, `true_answer`, `answers`) VALUES
(1, 3, '1', 4, '[\"2\",\"3\",\"4\",\"5\"]'),
(2, 3, 'снег', 3, '[\"\\u0431\\u0435\\u043b\\u044b\\u0439\",\"\\u043a\\u0440\\u0430\\u0441\\u043d\",\"\\u0441\\u0438\\u043d\\u0438\",\"\\u0436\\u0435\\u0434\"]'),
(3, 12, '12', 4, '[\"1\",\"2\",\"3\",\"4\"]'),
(4, 10, 'небо', 1, '[\"\\u0441\\u0438\\u043d\",\"\\u0436\\u0435\\u043b\\u0442\",\"\\u043a\\u0440\\u0430\\u0441\\u043d\",\"\\u0437\\u0435\\u043b\"]');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `registration_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `group_id` int(11) NOT NULL,
  `phone` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `registration_date`, `group_id`, `phone`) VALUES
(2, 'admin@admin.com', '517edde6eec48dc55e450ac0a676eef5', '1', '2', '2019-06-10 20:38:37', 1, 0),
(6, 'nik@nik.com', 'e9914c7fb5544156942aaf1fe90fd85e', 'Николай', 'Львов', '2019-06-10 21:44:06', 3, 312321),
(7, 'nikol@nikol.com', '812cf8c9e97992640c00b2820009c1d2', 'Николай', 'Фамин', '2019-06-11 17:20:27', 2, 312321),
(8, 'igro@igor.com', '48cbc70b1908a088caa4bf12f0edb865', 'Игорь', 'Петров', '2019-06-14 16:06:44', 2, 0),
(9, 'olga@olga.com', 'd95c63e1c575287b5dc9259f5d56b3a1', 'Ольга', 'Петрова', '2019-06-14 16:09:49', 2, 0),
(10, 'elen@elen.com', '809d22e2ad0bb1b9c7a0098156449c60', 'Елена', 'Дорн', '2019-06-14 16:15:45', 3, 0),
(11, 'maga@maga.com', '9ec1e095dfe7e9c3f4db9945da6d5f8c', 'Магомед', 'Исламов', '2019-06-14 16:18:30', 3, 454645),
(15, 'val@val.com', '791d4814310864c6f28502a29c33a4ad', '5205', '256', '2019-06-19 18:18:41', 3, 5),
(16, 'mix@mix.com', '47d20e1eecdb74c645c71cacb2e4e04c', '5225', '5252', '2019-06-19 18:20:10', 3, 53245),
(17, 'mila@mila.com', '0252d5e4a85c4984e197cafb7b697afc', 'dsad', 'dsad', '2019-06-19 18:20:58', 3, 543543),
(18, 'john@john.com', '6f3e73a65f1ec5947f106b37464c876d', 'Джон', 'Уик', '2019-06-19 20:32:12', 3, 54353),
(19, 'kira@kira.com', 'ba2e98e6be5af9e5c5a38e39f562cf4e', 'кира', 'найтли', '2019-06-19 20:36:02', 3, 4543543);

-- --------------------------------------------------------

--
-- Структура таблицы `user_chose`
--

CREATE TABLE `user_chose` (
  `id_lesson` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `user_chose`
--

INSERT INTO `user_chose` (`id_lesson`, `id_user`) VALUES
(10, 11),
(12, 17),
(12, 19),
(61, 11);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_subjects` (`id_subjects`);

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `phone_applications`
--
ALTER TABLE `phone_applications`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `test_question`
--
ALTER TABLE `test_question`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `group_id` (`group_id`);

--
-- Индексы таблицы `user_chose`
--
ALTER TABLE `user_chose`
  ADD UNIQUE KEY `id_lesson` (`id_lesson`,`id_user`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `lessons`
--
ALTER TABLE `lessons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `phone_applications`
--
ALTER TABLE `phone_applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT для таблицы `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT для таблицы `test_question`
--
ALTER TABLE `test_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `lessons`
--
ALTER TABLE `lessons`
  ADD CONSTRAINT `lessons_ibfk_1` FOREIGN KEY (`id_subjects`) REFERENCES `subjects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
