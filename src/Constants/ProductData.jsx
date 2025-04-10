import bonus from "../assets/img/bonus.jpg"

import product01 from "../assets/img/Product 1 (1).jpg"
import product02 from "../assets/img/Product 1 (2).jpg"
import product03 from "../assets/img/Product 1 (3).png" //

import product04 from "../assets/img/product 2 (1).jpg"
import product05 from "../assets/img/product 2 (2).jpg"
import product06 from "../assets/img/product 2 (3).jpg"
import product07 from "../assets/img/product 2 (4).png" //


import product08 from "../assets/img/Product 3 (1).jpg"
import product09 from "../assets/img/Product 3 (2).png" //

import product10 from "../assets/img/Product 4 (1).png" //
import product11 from "../assets/img/Product 4 (2).jpg"

import product12 from "../assets/img/Product 5 (1).jpg"
import product13 from "../assets/img/Product 5 (2).jpg"
import product14 from "../assets/img/Product 5 (3).png" //
import product15 from "../assets/img/Product 5 (4).jpg"

import product16 from "../assets/img/Product 6 (1).jpg"
import product17 from "../assets/img/Product 6 (2).jpg"
import product18 from "../assets/img/Product 6 (3).jpg"
import product19 from "../assets/img/Product 6 (4).png" //

import product20 from "../assets/img/Product 7 (1).jpg"
import product21 from "../assets/img/Product 7 (2).jpg"
import product22 from "../assets/img/Product 7 (3).jpg"
import product23 from "../assets/img/Product 7.png" //

import product24 from "../assets/img/Product 8 (1).jpg"
import product25 from "../assets/img/Product 8 (2).jpg"
import product26 from "../assets/img/Product 8 (3).jpg"
import product27 from "../assets/img/Product 8 (4).jpg"
import product28 from "../assets/img/Product 8.png" //
export const productData = [
      {
            id: 0,
            isNew: true,
            isTop: true,
            image: [product03, product02, product01],
            stars: 4,
            name: 'Corsair iCUE H100i RGB PRO XT Black',
            comment: 124,
            price: {
                  price: 2023000,
                  new: 1619000
            },
            features: [
                  {
                        key: "Тип кулера",
                        value: "СВО"
                  },
                  {
                        key: "Сокет",
                        value: "Intel 1700, 1200, 1150, 1151, 1155, 1156, 1366, 2011, 2066 AMD AM5, AM4,"
                  },
                  {
                        key: "Рассеиваемая мощность(TDP)",
                        value: "200W"
                  },
                  {
                        key: "Размеры",
                        value: "Радиатор: 277 х 120 х 27 мм"
                  },
                  {
                        key: "Размеры комплектных вентиляторов",
                        value: "120 х 120 х 25 мм"
                  },
                  {
                        key: "Тип подшипника",
                        value: "С магнитной левитацией"
                  },
                  {
                        key: "Скорость вращения	Вентиляторов",
                        value: "400 - 2400 RPM"
                  },
                  {
                        key: "Частота процессора",
                        value: "1.1 - 2.7 ГГц"
                  },
                  {
                        key: "Объем оперативной памяти",
                        value: "4 Gb"
                  },
            ],
            description: `Самая быстрая клавиатура в мире стала еще умнее Расширьте границы с помощью передовых, лидирующих в отрасли переключателей OmniPoint 3.0, которые теперь оснащены совершенно новыми функциями, меняющими ваш игровой процесс: Rapid Trigger, Protection Mode, Rapid Tap и GG QuickSet. OmniPoint 3.0 Быстрее, чем когда-либо Больше, чем просто быстро — наш недавно переработанный переключатель эффекта Холла является самым технически продвинутым, с функцией Rapid Trigger и полным диапазоном регулировки от 0,1 мм до 4,0 мм. Доминируйте как в таблице лидеров, так и в своих электронных письмах с помощью сверхлегкой чувствительности или выберите более глубокие, обдуманные нажатия клавиш. `,
            bonus: [bonus, "Мышка Frime FM-001BY USB, Black/Yellow (FM-001BY)"]
      },

      {
            id: 1,
            isNew: false,
            isTop: true,
            image: [product07, product04, product05, product06],
            stars: 5,
            name: 'MSI G274F 27" 180Hz Rapid IPS (Flat)',
            comment: 15,
            price: {
                  price: 2349000,
            },
            features: [
                  { key: "Диагональ", value: "27" },
                  { key: "Тип экрана", value: "Плоский" },
                  { key: "Тип матрицы", value: "Rapid IPS" },
                  { key: "Разрешение", value: "FHD (1920х1080)" },
                  { key: "Соотношение сторон", value: "16:9" },
                  { key: "Частота смены кадров", value: "180Hz" },
                  { key: "Время отклика", value: "1мс" },
                  { key: "Угол обзора", value: "178° по горизонтали, и по вертикали" },
                  { key: "Интерфейс", value: "HDMI 2.0, DisplayPort 1.2a" },
                  { key: "VESA Крепление", value: "75 х 75 мм" },
                  { key: "Технологии", value: "Adaptive Sync" },
                  { key: "Регулировка", value: "Регулировка угла наклона" },
                  { key: "HDR", value: " " },
                  { key: "Гарантийный срок", value: " " }
            ],
            description: `Оснащен 27-дюймовой IPS-панелью Full-HD (1920x1080) с частотой обновления 180 Гц и временем отклика 1 мс (GTG). G274F обеспечивает конкурентное преимущество перед большинством соперников. G274F, созданный с использованием технологии адаптивной синхронизации, может синхронизировать частоту обновления дисплея и графического процессора для обеспечения сверхплавного игрового процесса. Встроенные технологии MSI Esports Gaming можно активировать для получения дополнительных игровых преимуществ (например, интеллектуальный черный тюнер Night Vision).`
      },

      {
            id: 2,
            isNew: false,
            image: [product09, product08],
            stars: 5,
            name: 'SteelSeries Apex Pro TKL Gen 3 - US',
            comment: 70,
            price: {
                  price: 3006000,
                  new: 2806000
            },
            isTop: true,
            features: [
                  { key: "Тип клавиатуры", value: "Механическая" },
                  { key: "Тип переключателей", value: "OmniPoint 3.0" },
                  { key: "Интерфейс", value: "USB" },
                  { key: "Подсветка", value: "RGB" },
                  { key: "Внутренняя память", value: "Есть" },
                  { key: "Подставка для рук", value: "Есть" },
                  { key: "Укладка кабеля", value: "Нет" },
                  { key: "Количество клавиш", value: "Нет данных" },
                  { key: "Размеры", value: "355 х 129 х 42 мм" },
                  { key: "Вес", value: "974 г" }
            ]
            , description: `Самая быстрая клавиатура в мире стала еще умнее Расширьте границы с помощью передовых, лидирующих в отрасли переключателей OmniPoint 3.0, которые теперь оснащены совершенно новыми функциями, меняющими ваш игровой процесс: Rapid Trigger, Protection Mode, Rapid Tap и GG QuickSet. OmniPoint 3.0 Быстрее, чем когда-либо Больше, чем просто быстро — наш недавно переработанный переключатель эффекта Холла является самым технически продвинутым, с функцией Rapid Trigger и полным диапазоном регулировки от 0,1 мм до 4,0 мм. Доминируйте как в таблице лидеров, так и в своих электронных письмах с помощью сверхлегкой чувствительности или выберите более глубокие, обдуманные нажатия клавиш. `
      },

      {
            id: 3,
            isNew: true,
            image: [product10, product11],
            name: "Corsair Vengeance (2 x 32GB) 64GB 6000MHz DDR5 RGB",
            stars: 4,
            comment: 0,
            price: {
                  price: 3500000,
                  new: 3263000
            },
            features: [
                  { key: "Ёмкость", value: "64GB (2 x 32GB)" },
                  { key: "Технология RAM", value: "DDR5" },
                  { key: "Тайминги", value: "40-40-40-77" },
                  { key: "Частота памяти", value: "6000MHz" },
                  { key: "Подсветка", value: "Есть" }
            ],
            description: "Делайте все и делайте это быстрее В эпоху многоядерных систем беспрецедентная скорость обработки памяти DDR5 DRAM гарантирует, что ваш высокопроизводительный ЦП будет быстро и легко получать данные.Играете ли вы, создаете контент, открываете 100 вкладок или работаете в многозадачном режиме, ваш игровой ПК сможет выполнять сложные задачи быстрее, чем когда- либо прежде. Динамическая десятизонная RGB - подсветка Осветите свою систему с помощью десяти сверхъярких RGB - светодиодов с индивидуальной адресацией на модуль, заключенных в панорамную световую панель. Выберите один из десятков потрясающих предустановленных профилей освещения или создайте свой собственный с почти безграничной настройкой в ​​iCUE. "
      },

      {
            id: 4,
            isNew: true,
            isTop: false,
            comment: 5,
            stars: 2,
            image: [product14, product12, product13, product15],
            name: "TRUST GXT 711 Dominus Desk",
            price: {
                  price: 2284000
            },
            features: [
                  { key: "Панель ввода/вывода", value: "Нет" },
                  { key: "Регулировка стола", value: "Нет" },
                  { key: "Макс. нагрузка", value: "до 65 кг" },
                  { key: "Подсветка", value: "Нет" },
                  { key: "Размеры", value: "1150 х 760 х 750 мм" },
                  { key: "Вес", value: "19 кг" }
            ],
            description: "Сильный и крепкий игры стол письменный Пусть ваш ПК и периферийные устройства будут в центре внимания с игровым столом Trust GXT 711 Dominus. Сидя за этим столом, вы получите максимально производительную поверхность с функциями, которые оценят все геймеры. Создайте лучший игровой стол с Dominus. На в поверхность Dominus имеет высококачественное полиуретановое верхнее покрытие. Мелко текстурированная поверхность обеспечивает оптимальную работу мыши: каждое малейшее движение идеально отображается на экране. Кроме того, на столе шириной 116 см легко помещаются два монитора, поэтому вы можете играть в полноэкранном режиме и просматривать игровые стратегии или следить за своими чатами на другом экране. ",
            bonus: [product11, "Corsair Vengeance (2 x 32GB) 64GB 6000MHz DDR5 RGB"]
      },

      {
            id: 5,
            isNew: false,
            isTop: true,
            comment: 15,
            stars: 5,
            image: [product19, product16, product17, product18],
            name: "HyperX QuadCast S White",
            price: {
                  price: 2026000,
                  new: 1898000
            },
            description: "Микрофон HyperX QuadCast: HyperX QuadCastTM — полнофункциональный автономный микрофон, который идеально подходит для начинающих стримеров или подкастеров, которым необходим конденсаторный микрофон с высоким качеством звука. Микрофон QuadCast оснащен собственным амортизирующим подвесом, который помогает снизить шум окружающей среды, и встроенным поп-фильтром, с помощью которого можно приглушить надоедливые взрывные звуки. Проверьте состояние своего микрофона с помощью светодиодного индикатора или отключите звук во избежание возможных проблем во время трансляций. Благодаря четырем полярным диаграммам направленности этот микрофон подготовлен практически к любой ситуации записи, а также имеет удобно расположенный шкалу регулировки усиления для быстрой настройки чувствительности входа микрофона. Входящий в комплект монтажный адаптер подходит для 3/8- и 5/8-дюймовых резьбовых разъемов и совместим с большинством подставок. Модель QuadCast S обеспечивает RGB-подсветку и динамические эффекты, которые можно настроить с помощью ПО HyperX NGENUITY. "
      },

      {
            id: 6,
            isNew: true,
            isTop: false,
            comment: 7,
            stars: 4,
            image: [product23, product20, product21, product22,],
            name: "HyperX Cloud III Wireless Red",
            price: {
                  price: 2111000,
                  new: 1710000
            },
            features: [
                  { key: "Тип наушников", value: "Полноразмерные" },
                  { key: "Режим работы", value: "2.4 ГГц, Провод" },
                  { key: "Тип звучания", value: "Стерео" },
                  { key: "Размер динамиков (мм)", value: "53 мм" },
                  { key: "Частотный диапазон наушников", value: "10 - 21000 Гц" },
                  { key: "Сопротивление наушников", value: "64 Ом" },
                  { key: "Чувствительность наушников", value: "112 дБ" },
                  { key: "Частотный диапазон микрофона", value: "100 - 10000 Гц" },
                  { key: "Чувствительность микрофона", value: "-21,5 дБ" },
                  { key: "Подключение, разъемы", value: "USB Type-A, USB Type-C, Радио" },
                  { key: "Звуковая карта", value: "Нет" },
                  { key: "Длина провода", value: "0.5 м" },
                  { key: "Подсветка", value: "Нет" },
                  { key: "Вес", value: "367 г" }
            ],
            description: "Линейка геймерских гарнитур HyperX Cloud стала легендарной благодаря фирменному комфорту и вниманию к деталям, которые четко прослеживаются и в Cloud III Wireless. Гарнитура оснащена модернизированными 53-миллиметровыми драйверами, расположенными под анатомическим углом, и технологией DTS Headphone: X что обеспечивает полное погружение в процесс и точную пространственную передачу 3D звука. Команда инженеров-акустиков HyperX настроила драйверы гарнитуры для оптимального и четкого воспроизведения звука. Беспроводная гарнитура Cloud III Wireless также идеально подходит для длительных игровых сессий благодаря мягким амбушюрам HyperX из пеноматериала с эффектом памяти формы, дополнительной мягкой прокладке в оголовье, и литий-полимерной батареей, которая обеспечивает до 120 часов автономности. Гарнитура оснащена 10-миллиметровым микрофоном с ультрачетким звучанием и функцией шумоподавления, а также внутренним металлическим сетчатым поп-фильтром, который снижает уровень помех. В гарнитуру встроены простые элементы управления звуком и микрофоном, она совместима с ПК, PS5 и PS4. Гарнитура оснащена малогабаритным USB радиомодулем, который работает в диапазоне 2.4 ГГц и поддерживает аудиопоток до 96 кГц, 24 бит."
      },

      {
            id: 7,
            isNew: true,
            isTop: true,
            comment: 5,
            stars: 5,
            image: [product28, product24, product25, product26, product27],
            name: "ASUS ROG Strix SCAR 18 G835LW-SA090W (90NR0LI1-M00400)",
            price: {
                  price: 52000000,
                  new: 49590000
            },
            features: [
                  { key: "Процессор", value: "Intel Core Ultra 9-275HX" },
                  { key: "Оперативная память", value: "16GB 5600MHz DDR5" },
                  { key: "Хранилище", value: "1TB PCIe® 4.0 NVMe™ M.2 SSD" },
                  { key: "Видеокарта", value: "NVIDIA GeForce RTX 5080 16GB GDDR7" },
                  { key: "Экран", value: "18 (2560 x 1600), IPS 240Hz" }
            ],
            bonus: [product20, "HyperX Cloud III Wireless Red"],
            count: 5000,
      },
]