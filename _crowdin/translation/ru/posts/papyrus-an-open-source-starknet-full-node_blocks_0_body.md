# Papyrus: Полный узел StarkNet с открытым исходным кодом
## Папирус будет ключевым компонентом децентрализованной инфраструктуры StarkNet
**TL;DR**
* Papyrus - это реализация Rust полного узла StarkNet * Он послужит основой для нового StarkNet Sequencer, Это значительно повысит производительность труда и децентрализацию фирмы StarkNet. Теперь, когда StarkNet достигла отличной функциональности, это главные приоритеты в области развития
## Введение
Сегодня мы представляем Папирус, реализацию Rust полного узла StarkNet, который поможет проложить путь к массовому использованию StarkNet. [Полнофункциональный узел Papyrus](https://github.com/starkware-libs/papyrus)будет отслеживать состояние StarkNet по мере того, как он со временем будет развиваться и позволять пользователям и разработчикам запрашивать это состояние через[JSON-RPC StarkNet](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json). Papyrus послужит основой для нового StarkNet Sequencer, что в течение нескольких месяцев значительно повысит производительность StarkNet. Папирус присоединяется к другим полным узлам StarkNet — Pathfinder и Juno, которые отвечают за синхронизацию и поддержание состояния StarkNet. В соответствии с нашим постоянным переездом в открытый исходный код стек StarkNet, Папирус является открытым исходным кодом под лицензией Apache 2.0.
## Папирус — Основы оптимизированного последовательности
Раньше мы заявили, что[фазы разработки StarkNet](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)являются: (i) Функциональность и удобство использования; ii) масштабами и показателями деятельности и, наконец, iii) децентрализацией. StarkNet имеет отличную простоту использования, и в настоящее время эффективность системы является приоритетной задачей, при этом децентрализация повышает свою эффективность. Повышение эффективности системы обеспечивается за счет повышения эффективности системы Sequencer, которая отвечает за производство блоков StarkNet. Последовательность – это «машина», которая делает заказы и выполняет транзакции после их представления. Papyrus предоставит контроллеру StarkNet эффективный слой хранения, который поможет улучшить пропускную способность. Во-первых, это означает, что последовательность будет содержать локальную БД, а не облачную БД. Кроме того, Папирус хранит плоские ключи/значения, означая, что он будет взаимодействовать с состоянием, а не доходить до него через пути Merkle-Patricia.
## Укрепление и децентрализация стека StarkNet
В настоящее время две команды разрабатывают полный узел StarkNet.
Есть s [ Pathfinder](https://github.com/eqlabs/pathfinder)от Equilibrium, реализован на Руси и[Juno](https://github.com/NethermindEth/juno)от Нидерландов, которые работают над первой официальной версией их Голанг реализации. Папирус сегодня присоединяется к этой здоровой смеси и тем самым способствует децентрализации и избыточности. Добавление еще одного полного узла и его создание с открытым исходным кодом помогает обеспечить разнообразие клиентских реализаций, Это является важным показателем прочности децентрализованной сети и закрепления ее статуса как общественного блага.</p> 


## Текущие планы релиза и будущего

Текущая версия позволяет синхронизировать состояние StarkNet и получить доступ ко всей истории StarkNet. В настоящее время спецификация JSON-RPC поддерживается только частично, вы можете отслеживать прогресс[здесь](https://github.com/starkware-libs/papyrus#endpoints). Папирус сейчас открыт в ожидании полного релиза для публичного использования в течение нескольких месяцев. Помимо работы по полной совместимости с[JSON-RPC спецификацией](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json), командой Papyrus, Вместе с Pathfinder и Juno, будут работать над созданием[StarkNet P2P слоя](https://github.com/starknet-io/starknet-p2p-specs). Наличие различных узлов, способных общаться и синхронизировать через слой P2P, является большим скачком к децентрализованному StarkNet. Кроме того, возможность синхронизации с узлами (в отличие от ситуации, когда каждый узел взаимодействует с централизованным API) должна значительно улучшить время синхронизации. Подводя итоги, Папирус - это третий полный узел, присоединившийся к экосистеме StarkNet. Он выпущен под лицензией с открытым исходным кодом (Apache 2.0) и станет важной частью инфраструктуры децентрализованной StarkNet.