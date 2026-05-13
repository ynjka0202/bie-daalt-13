Personal Task Tracker (Biy-daalt-13)
Гүйцэтгэсэн: У.Янжинлхам B242270131 Хичээл: Программ хангамжийн бүтээлт

Энэхүү төсөл нь "Программ хангамжийн бүтээлт" хичээлийн хүрээнд хийгдсэн бөгөөд хиймэл оюун ухаан (AI)-тай хамтран ажиллаж, орчин үеийн хөгжүүлэлтийн арга барилаар систем төлөвлөх, хэрэгжүүлэх, тайлагнах үйл явцыг харуулсан болно.

Төслийн бүтэц (Project Structure)
Төсөл нь дараах үндсэн 3 хэсгээс бүрдэнэ:

Part A: Planning
PROJECT.md: Төслийн зорилго, хамрах хүрээ.
ARCHITECTURE.md: Системийн бүтэц (Client-Server), Mermaid диаграмм.
STACK-COMPARISON.md: Технологийн харьцуулалт (Node.js vs FastAPI).
adr/0001-stack.md: Технологийн сонголтын тэмдэглэл.
Part B: Implementation
src/: Backend код (Express.js, TaskService).
public/: Frontend код (Vanilla JS, HTML, CSS).
tests/: Unit болон Integration тестүүд (Jest).
openapi.yaml: API-ийн стандарт баримт бичиг.
ai-sessions/: Хөгжүүлэлтийн явц дахь AI-тай харилцсан лог.
Part C: Reflection
AI-USAGE-REPORT.md: AI ашиглалтын 1500 үгтэй дэлгэрэнгүй тайлан.
adr/0002-decision.md: Хэрэгжүүлэлтийн явцад гарсан чухал шийдвэр.
SELF-EVALUATION.md: Өөрийн үнэлгээ, сурсан зүйлсийн дүгнэлт.
Технологийн стек (Tech Stack)
Давхарга	Технологи
Runtime	Node.js (v18+)
Framework	Express.js
Database	SQLite (better-sqlite3)
Frontend	HTML5, CSS3, Vanilla JavaScript
Testing	Jest, Supertest
Програмыг ажиллуулах заавар (Setup & Run)
Сангуудыг суулгах:
cd partB
npm install
Серверийг асаах:
npm run dev
Хаяг: http://localhost:3000
Тест ажиллуулах: npm test