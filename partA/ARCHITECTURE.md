## Architecture Diagram (Mermaid)

```mermaid
graph TD
    User([User]) --> Frontend[Minimal Web UI]
    Frontend --> API[Express.js API]
    API --> Controller[Task Controller]
    Controller --> Service[Task Service]
    Service --> DB[(MongoDB)]
    Модулийн тайлбар

Task Controller: API хүсэлтүүдийг хүлээн авч хариу өгөх.   
Task Service: Бизнес логик, шүүлтүүр хийх хэсэг.   
Database: Өгөгдлийг хадгалах (Tasks, Labels)