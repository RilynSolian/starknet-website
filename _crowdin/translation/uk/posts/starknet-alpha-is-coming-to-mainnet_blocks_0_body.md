### TL;DR

* *StarkNet Alpha запускається на Mainnet Ethereum до листопада*
* Час будувати на StarkNet зараз

### Коротка історія

Ми оголосили про наше бачення[StarkNet](https://starkware.co/product/starknet/)на початку року: збереження безпеки L1 з масивними можливостями Ethereum при збереженні безпеки L1, Недопустима взаємодія та децентралізація.\
Ми випустили**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**на публічній мережі в червні. Ця версія підтримувала повністю дозволені загальні обчислення розумних контрактів. Ми оновили його двічі: спочатку до**Альфа 1**- надайте[L1<>L2 повідомлення та дані в ланцюжку](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)а потім до**Альфа 2**- підтримка[композитрія](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 тепер підтримує комбіновані розумні контракти загальних обчислень в стихійній формі Ethereum з можливістю визначення контрактів на L1 і L2 один з одним. Читати більше[тут](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Що таке StarkNet Alpha в Mainnet?

StarkNet Alpha в Mainnet підтримає подібні можливості для тих, хто в даний час доступний в публічному тесті Goerlia.

#### **На що чекати**

Оскільки StarkNet досі перебуває у стадії розробки, ми хочемо впроваджувати можливості кроково, а також забезпечити, щоб очікування розробників виконувалися на кожному кроці. Два особливо важливі аспекти, на які ми хотіли б підкреслити:

* **Постійне розгортання розумного контракту**: ми будемо дотримуватися розумної ігрової книги, введеної нашими колегами з оптимістичного Rollup: почніть з*дозволено*розгортання контрактів. Протокол, що вказує на запити до включення вашого смарт-договору в цьому первинному білому списку, буде опубліковано в найближчі тижні.
* **Гарантія зворотної сумісності**: ми очікуємо, що майбутній перехід від StarkNet Alpha до StarkNet Beta, для включення регенезису стану. Мережа почнеться з блоку 0 та додаткам доведеться розгорнути свої контракти. Крім того, розробники та користувачі повинні відзначити, що очікувана збірка StarkNet Beta може не бути зворотною сумісною з StarkNet Alpha. . розробникам потрібно буде змінити свої контракти. Очевидно, ми спробуємо дозволити простий перехід для програм, з мінімальними необхідними змінами.

#### Додаткові найближчі можливості

Як частина переходу StarkNet Alpha від тесту до Mainnet, ми будемо:

1. Додати конструкторів до контрактів.
2. Поліпшити тестування фреймворку.
3. Для блоків і операцій, переміщайтеся з використання ID на хеш.

Ми плануємо продовжити розгортання нових функцій у регулярному темпі, як і в громадському тестуванні. У найближчій перспективі ми плануємо такі оновлення:

1. Обліковий запис контракти та маркер контракти - відкривши шлях для DeFi додатків для взаємодії з StarkNet з якими вони звикли.
2. Вдосконалена функція контракту - підтримка удосконалення контрактів та подій.
3. Варп: компілятор твердості до Каїру, розроблений Нідерландами, дозволить плавно переходити від розумних контрактів на StarkNet smart контрактів.
4. Signatures: власна підтримка ECDSA через secp256k1 дозволить спростити інтеграцію із існуючими гаманцями.
5. StarkNet Full Node: Full Node дозволить користувачам брати участь в мережі з апаратними вимогами на рівні з даними Ethereum Full Node.

#### Фей-Механізм

РТК буде увімкнено як тільки контракти на рахунок і контракти на токени додаються в StarkNet Alpha.

Всі транзакції, надіслані в StarkNet, будуть нехтувати комісією, покликаною покрити витрати L1 і off-ланцюгові. Спочатку комісію буде стягнуто в ETH. Вартість однієї трансакції зменшиться, оскільки StarkNet збільшує свої масштаби (як це відбувається у всіх існуючих системах на основі СТАР). При створенні початкових механізмів оплати ми віддаємо перевагу точній ціноутворення транзакцій відповідно до ресурсів, які вони споживають. Визначення цього механізму з часом складання та вдосконалення.

Озираючись на те, щоб StarkNet став стійкою мережею і стимулював її оператори і розробників, частину доходів, зібраних від зборів, буде розподілено розробникам заявок і розробникам StarkNet основних розробників.

#### Безпека

Модель безпеки StarkNet Alpha, в Mainnet буде слідувати поточній моделі в тестуванні:

* Кожен перехід забезпечений правою змінною STARK, таким чином гарантується правильним виконанням.
* Всі дані стану будуть опубліковані ланцюгом, тому держава буде повністю конструктивною з L1.
* Там буде один послідовник.
* Мережа буде оновлюватися без затримок часу.

### Екосистема StarkNet зростає

Відкриття StarkNet до світу привернуло масову хвилю розробників, зацікавлених у навчальному Каїрі та розвитку над StarkNet. Вони надали безцінні відгуки, і це була справжня насолода побачити яскраві дискусії на StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

Більше того, StarkNet розробляється не тільки командою StarkWare, а й одною з найсильніших команд в блочній екосистемі:

* Нідерланд працює над двома проектами:

1. **[викривлення](https://github.com/NethermindEth/warp)**: самотність до компілятора в Каїрі

2. **[Вояджер](https://voyager.online/)**: провідник блоку StarkNet

* Open Zeppelin працює над[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)реалізацією StarkNet і також почав працювати над середовищем розробника:[Nile](https://github.com/martriay/nile).
* Фрагменти працюють над плагіном[StarkNet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)та на кращому тестуванні фреймворку.
* Команда Erigon працює над розширенням свого Ethereum Full Node для підтримки StarkNet (codename: Fermion). Вони працюють з нами над проектуванням основних механізмів StarkNet.
* Рівновага працює над реалізацією StarkNet Full Node на Rust,
* Каїр служиться службі: У найближчі місяці ABDK, ConsenSys Ділігенція, Щит Пекшіт і стежка бітів проведе аудитом Каїра.
* StarkNet аудитів: ми почали з аудиту підстав мережі:

1. **Криптоексперти**проводяться за аудитом Каїра Верифікатора солідності.
2. A formal **LEAN proof** of the Cairo specs was recently completed and published as a [paper](https://arxiv.org/abs/2109.14534) and a GitHub [repo](https://github.com/starkware-libs/formal-proofs).

Очікується, що в найближчі місяці буде опубліковано набагато цікавіше!

### Контрагенти сьогодні масштабували

Ми наближаємося до запуску StarkNet Alpha з впевненістю, як StarkEx, наш автономний масштабний Саас, продемонстрував, як СТАР можуть масово масштабувати програми Ethereum. Ми запустили StarkEx для[dYdX](https://dydx.exchange/)(вічні контракти),[DeversiFi](https://www.deversifi.com/)(угода щодо торгівлі і платежів), так само як і для[Незмінних](https://www.immutable.com/)і[Сортування](https://sorare.com/)(NFT видобування та торгівлі). Ми спостерігали витрати на їх бензин/tx зменшились на 100X–200X, до приблизно 650 газового / tx у Validium (висхідні дані) та 1100 газ/tx для ZK-Rollup.

На сьогоднішній день StarkEx здійснив угоди за $80B і більше 27 Мб транзакцій, що значно полегшили інші рішення L2 - і всі вони разом узяті з них.

### Акт зараз

Ніколи не було кращого часу приєднатися до зростаючої екосистеми StarkNet через створення вашого наступного dApp, або корисних інструментів розробника.

Ми запрошуємо вас на:

1. Приєднуйтесь до[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), де ви можете долучити та залучати спільноту StarkNet.
2. [Почни вчитися](https://www.cairo-lang.org/docs/hello_starknet/index.html)як писати смарт-контракти StarkNet (smart контракти).
3. [СДМ](https://twitter.com/StarkWareLtd)— наша команда прагне допомогти вашій ідеї та ініціативам втілити життя.

**Оновлення (Новин. 2021):**StarkNet Alpha активована на Ethereum Mainnet