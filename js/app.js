'use strict';

const jobs = [
  {
    id: 'go-backend', title: 'Стажёр Go-разработчик', company: 'ТехЛайн', initials: 'ТЛ', logo: 'ruby',
    city: 'Москва', salary: 75000, salaryText: 'от 75 000 ₽ на руки', direction: 'Backend', format: 'Гибрид',
    posted: 'Сегодня', employment: 'Полная занятость', experience: 'Без опыта',
    description: 'Команда платформенных сервисов ищет начинающего Go-разработчика. Будешь помогать развивать внутренние API и сервисы, работающие под высокой нагрузкой.',
    duties: ['Разрабатывать и поддерживать REST API на Go.', 'Работать с PostgreSQL и писать простые SQL-запросы.', 'Участвовать в код-ревью и обсуждениях технических решений.'],
    requirements: ['Базовые знания Go и HTTP.', 'Понимание SQL и принципов работы реляционных баз данных.', 'Умение пользоваться Git и желание разбираться в чужом коде.'],
    conditions: ['Наставник и регулярная обратная связь.', 'Гибридный формат: офис 2–3 дня в неделю.', 'Гибкое начало рабочего дня.'],
    skills: ['Go', 'PostgreSQL', 'Git']
  },
  {
    id: 'frontend', title: 'Frontend-разработчик (стажёр)', company: 'PixelWorks', initials: 'PW', logo: 'violet',
    city: 'Удалённо', salary: 55000, salaryText: 'от 55 000 ₽ на руки', direction: 'Frontend', format: 'Удалённо',
    posted: 'Сегодня', employment: 'Частичная занятость', experience: 'Без опыта',
    description: 'Развиваем интерфейсы для сервисов малого бизнеса. Ищем человека, который хочет перейти от личных проектов к работе в продуктовой команде.',
    duties: ['Верстать адаптивные страницы по макетам.', 'Дорабатывать компоненты интерфейса.', 'Проверять отображение страниц на разных устройствах.'],
    requirements: ['Хорошая база HTML, CSS и JavaScript.', 'Знакомство с Git.', 'Понимание Flexbox и Grid.'],
    conditions: ['Удалённая работа.', 'Занятость от 20 часов в неделю.', 'Помощь опытного frontend-разработчика.'],
    skills: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 'qa', title: 'Стажёр по тестированию ПО', company: 'КодЛаб', initials: 'КЛ', logo: 'mint',
    city: 'Казань', salary: 45000, salaryText: 'от 45 000 ₽ на руки', direction: 'QA', format: 'Офис',
    posted: 'Вчера', employment: 'Полная занятость', experience: 'Без опыта',
    description: 'Усиливаем команду качества. Предстоит проверять новые функции веб-приложений и помогать команде выпускать стабильные версии.',
    duties: ['Составлять чек-листы и тест-кейсы.', 'Проводить ручное тестирование.', 'Описывать найденные ошибки в баг-трекере.'],
    requirements: ['Представление о жизненном цикле разработки.', 'Внимание к деталям.', 'Готовность изучать DevTools и API-тестирование.'],
    conditions: ['Работа в офисе с гибким началом дня.', 'Обучение на реальных задачах.', 'Возможность перейти в автоматизацию тестирования.'],
    skills: ['Тест-кейсы', 'DevTools', 'API']
  },
  {
    id: 'data', title: 'Младший аналитик данных', company: 'DataNorth', initials: 'DN', logo: 'blue',
    city: 'Санкт-Петербург', salary: 65000, salaryText: 'от 65 000 ₽ на руки', direction: 'Data', format: 'Гибрид',
    posted: 'Вчера', employment: 'Полная занятость', experience: 'Без опыта',
    description: 'Ищем аналитика на стартовую позицию: много данных, понятные бизнес-задачи и опытная команда рядом.',
    duties: ['Подготавливать отчёты и визуализации.', 'Писать SQL-запросы для выгрузки данных.', 'Находить причины изменений продуктовых метрик.'],
    requirements: ['Основы SQL.', 'Уверенное владение электронными таблицами.', 'Интерес к аналитике и работе с числами.'],
    conditions: ['Гибридный график.', 'Обучение аналитическим инструментам.', 'Внутренние встречи и обмен знаниями.'],
    skills: ['SQL', 'Excel', 'Python']
  },
  {
    id: 'python', title: 'Python Backend Intern', company: 'CloudStep', initials: 'CS', logo: 'orange',
    city: 'Москва', salary: 70000, salaryText: 'от 70 000 ₽ на руки', direction: 'Backend', format: 'Гибрид',
    posted: '2 дня назад', employment: 'Полная занятость', experience: 'Без опыта',
    description: 'Присоединяйся к разработке веб-сервисов и интеграций. Погрузишься в API, базы данных и тестирование.',
    duties: ['Разрабатывать обработчики API.', 'Писать небольшие интеграционные тесты.', 'Участвовать в исправлении ошибок сервиса.'],
    requirements: ['Уверенные основы Python.', 'Знакомство с HTTP.', 'Общее понимание SQL.'],
    conditions: ['Гибридный формат.', 'Наставничество в первые месяцы.', 'Задачи с постепенным ростом сложности.'],
    skills: ['Python', 'REST API', 'SQL']
  },
  {
    id: 'design', title: 'Стажёр UX/UI-дизайнер', company: 'Forma Studio', initials: 'FS', logo: 'lilac',
    city: 'Удалённо', salary: 40000, salaryText: 'от 40 000 ₽ на руки', direction: 'Design', format: 'Удалённо',
    posted: '2 дня назад', employment: 'Частичная занятость', experience: 'Без опыта',
    description: 'Помогай продуктовой команде создавать понятные и аккуратные интерфейсы для веб-приложений.',
    duties: ['Собирать простые макеты в Figma.', 'Готовить варианты компонентов и состояний.', 'Помогать с дизайн-ревью.'],
    requirements: ['Базовое владение Figma.', 'Понимание композиции и типографики.', 'Портфолио с несколькими работами.'],
    conditions: ['Удалённый формат.', 'Гибкая занятость от 20 часов.', 'Обратная связь по каждому макету.'],
    skills: ['Figma', 'UI', 'UX']
  },
  {
    id: 'java', title: 'Junior Java Developer / стажёр', company: 'Сфера ИТ', initials: 'СИ', logo: 'slate',
    city: 'Екатеринбург', salary: 60000, salaryText: 'от 60 000 ₽ на руки', direction: 'Backend', format: 'Офис',
    posted: '3 дня назад', employment: 'Полная занятость', experience: 'Без опыта',
    description: 'Разрабатываем внутренние сервисы для автоматизации бизнес-процессов. Нужен разработчик с хорошей базой Java.',
    duties: ['Писать серверную логику на Java.', 'Разбираться с существующим кодом.', 'Создавать простые тесты и SQL-запросы.'],
    requirements: ['Знание основ Java и ООП.', 'Начальные знания SQL.', 'Интерес к серверной разработке.'],
    conditions: ['Офис рядом с метро.', 'Работа в паре с наставником.', 'Внутренние технические встречи.'],
    skills: ['Java', 'ООП', 'SQL']
  },
  {
    id: 'ml', title: 'Стажёр Machine Learning', company: 'NeuroPoint', initials: 'NP', logo: 'teal',
    city: 'Москва', salary: 85000, salaryText: 'от 85 000 ₽ на руки', direction: 'Data', format: 'Гибрид',
    posted: '3 дня назад', employment: 'Полная занятость', experience: 'Без опыта',
    description: 'Проводим эксперименты с ML-моделями для прикладных задач классификации и рекомендаций.',
    duties: ['Подготавливать выборки данных.', 'Обучать и оценивать базовые модели.', 'Фиксировать результаты экспериментов.'],
    requirements: ['Python и NumPy/Pandas.', 'Основы линейной алгебры и статистики.', 'Понимание обучения моделей.'],
    conditions: ['Гибридная работа.', 'Возможность использовать выделенные вычислительные ресурсы.', 'Поддержка ML-инженеров.'],
    skills: ['Python', 'Pandas', 'ML']
  },
  {
    id: 'devops', title: 'Стажёр DevOps-инженер', company: 'InfraLab', initials: 'IL', logo: 'indigo',
    city: 'Новосибирск', salary: 55000, salaryText: 'от 55 000 ₽ на руки', direction: 'DevOps', format: 'Удалённо',
    posted: '4 дня назад', employment: 'Частичная занятость', experience: 'Без опыта',
    description: 'Поможешь команде автоматизировать сборку и развёртывание сервисов, работать с контейнерами и системами мониторинга.',
    duties: ['Поддерживать CI-пайплайны.', 'Собирать Docker-образы.', 'Помогать с настройкой мониторинга.'],
    requirements: ['Уверенное пользование Linux.', 'Основы Docker и Git.', 'Знакомство с Bash.'],
    conditions: ['Удалённая работа.', 'Помощь наставника.', 'Внутреннее обучение инфраструктуре.'],
    skills: ['Linux', 'Docker', 'Git']
  }
];

const one = (selector, root = document) => root.querySelector(selector);
const many = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const jobLink = (job, hash = '') => `vacancy.html?id=${encodeURIComponent(job.id)}${hash}`;

function avatar(job) {
  return `<span class="company-logo company-logo--${job.logo}" aria-hidden="true">${job.initials}</span>`;
}

function jobCard(job, compact = false) {
  return `<article class="card job-card${compact ? ' job-card--compact' : ''} mb-3">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-start gap-3">
        <div class="flex-grow-1 min-w-0">
          <a class="job-card__title" href="${jobLink(job)}">${job.title}</a>
          <div class="job-card__salary">${job.salaryText}</div>
        </div>${avatar(job)}
      </div>
      <p class="job-card__company mb-2">${job.company}</p>
      <div class="job-card__meta mb-3">${job.city} <span aria-hidden="true">·</span> ${job.experience} <span aria-hidden="true">·</span> ${job.format}</div>
      ${compact ? '' : `<p class="job-card__description mb-3">${job.description}</p>`}
      <div class="d-flex flex-wrap gap-2 mb-3">
        ${job.skills.slice(0, 3).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
      <div class="d-flex flex-wrap gap-2 align-items-center">
        <a class="btn btn-primary btn-sm px-3" href="${jobLink(job, '#apply')}">Откликнуться</a>
        <button type="button" class="btn btn-outline-secondary btn-sm px-3" data-bs-toggle="modal" data-bs-target="#jobPreviewModal" data-job-id="${job.id}">Быстрый просмотр</button>
        <span class="small text-secondary ms-auto">${job.posted}</span>
      </div>
    </div>
  </article>`;
}

function initHome() {
  const target = one('#homeJobs');
  if (!target) return;
  target.innerHTML = jobs.slice(0, 3).map(job => `<div class="col-12 col-lg-4">${jobCard(job, true)}</div>`).join('');
}

function initCatalog() {
  const target = one('#jobResults');
  if (!target) return;
  const queryInput = one('#searchQuery');
  const direction = one('#directionFilter');
  const city = one('#cityFilter');
  const minSalary = one('#salaryFilter');
  const format = one('#formatFilter');
  const sort = one('#sortFilter');
  const empty = one('#emptyResults');
  const count = one('#resultCount');
  const reset = one('#resetFilters');
  const params = new URLSearchParams(window.location.search);
  queryInput.value = params.get('q') || '';
  direction.value = params.get('direction') || '';
  city.value = params.get('city') || '';
  format.value = params.get('format') || '';
  minSalary.value = params.get('salary') || '';

  function render() {
    const q = queryInput.value.trim().toLocaleLowerCase('ru');
    const d = direction.value;
    const f = format.value;
    const c = city.value;
    const s = Number(minSalary.value) || 0;
    let filtered = jobs.filter(job => {
      const haystack = `${job.title} ${job.company} ${job.description} ${job.skills.join(' ')}`.toLocaleLowerCase('ru');
      return (!q || haystack.includes(q)) && (!d || job.direction === d) && (!f || job.format === f) && (!c || job.city === c || job.format === 'Удалённо') && job.salary >= s;
    });
    if (sort.value === 'salary-desc') filtered.sort((a, b) => b.salary - a.salary);
    if (sort.value === 'salary-asc') filtered.sort((a, b) => a.salary - b.salary);
    target.innerHTML = filtered.map(job => jobCard(job)).join('');
    count.textContent = `${filtered.length} ${plural(filtered.length, ['вакансия', 'вакансии', 'вакансий'])}`;
    empty.hidden = filtered.length !== 0;
    const next = new URLSearchParams();
    if (q) next.set('q', queryInput.value.trim());
    if (d) next.set('direction', d);
    if (f) next.set('format', f);
    if (c) next.set('city', c);
    if (s) next.set('salary', String(s));
    history.replaceState(null, '', `catalog.html${next.size ? '?' + next.toString() : ''}`);
  }

  one('#catalogSearchForm').addEventListener('submit', event => { event.preventDefault(); render(); });
  [direction, city, minSalary, format, sort].forEach(el => el.addEventListener('change', render));
  reset.addEventListener('click', () => {
    queryInput.value = ''; direction.value = ''; city.value = ''; minSalary.value = ''; format.value = ''; sort.value = 'relevance';
    render();
  });
  render();
}

function plural(value, options) {
  const mod10 = value % 10;
  const mod100 = value % 100;
  if (mod10 === 1 && mod100 !== 11) return options[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return options[1];
  return options[2];
}

function renderList(items) {
  return `<ul class="vacancy-list">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function initVacancy() {
  if (!one('#vacancyTitle')) return;
  const id = new URLSearchParams(window.location.search).get('id');
  const job = jobs.find(item => item.id === id) || jobs[0];
  document.title = `${job.title} — FastJob`;
  one('#vacancyTitle').textContent = job.title;
  one('#crumbTitle').textContent = job.title;
  one('#vacancySalary').textContent = job.salaryText;
  one('#vacancyCompany').textContent = job.company;
  one('#companyName').textContent = job.company;
  one('#companyLogo').className = `company-logo company-logo--${job.logo} company-logo--large`;
  one('#companyLogo').textContent = job.initials;
  one('#vacancyMeta').textContent = `${job.city} · ${job.experience} · ${job.format}`;
  one('#vacancyEmployment').textContent = job.employment;
  one('#vacancyDescription').textContent = job.description;
  one('#vacancyDuties').innerHTML = renderList(job.duties);
  one('#vacancyRequirements').innerHTML = renderList(job.requirements);
  one('#vacancyConditions').innerHTML = renderList(job.conditions);
  one('#vacancySkills').innerHTML = job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
  one('#applicationJob').value = job.title;
  const form = one('#applicationForm');
  const intro = one('#applicationIntro');
  const success = one('#applicationSuccess');
  const successTitle = one('#applicationSuccessTitle');
  const successSummary = one('#applicationSuccessSummary');
  const editButton = one('#editApplication');

  form.addEventListener('submit', event => {
    event.preventDefault();
    form.classList.add('was-validated');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const firstName = one('#appName').value.trim().split(/\s+/)[0];
    successTitle.textContent = `Спасибо, ${firstName}!`;
    successSummary.textContent = `Вы оформили анкету на вакансию «${job.title}». Все необходимые данные заполнены — можете продолжить поиск подходящих предложений.`;
    intro.hidden = true;
    form.hidden = true;
    success.hidden = false;
    success.scrollIntoView({block: 'center', behavior: 'smooth'});
  });

  editButton.addEventListener('click', () => {
    success.hidden = true;
    intro.hidden = false;
    form.hidden = false;
    one('#appName').focus();
  });
}

function initModal() {
  const modal = one('#jobPreviewModal');
  if (!modal) return;
  modal.addEventListener('show.bs.modal', event => {
    const job = jobs.find(item => item.id === event.relatedTarget?.dataset.jobId);
    if (!job) return;
    one('#modalJobTitle').textContent = job.title;
    one('#modalCompany').textContent = `${job.company} · ${job.city}`;
    one('#modalSalary').textContent = job.salaryText;
    one('#modalDescription').textContent = job.description;
    one('#modalApply').href = jobLink(job, '#apply');
    one('#modalDetails').href = jobLink(job);
  });
}

function initFeedback() {
  const form = one('#feedbackForm');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.classList.add('was-validated');
    const result = one('#feedbackResult');
    if (!form.checkValidity()) { result.hidden = true; form.reportValidity(); return; }
    result.textContent = 'Спасибо! Ваше обращение оформлено. Все необходимые поля заполнены.';
    result.hidden = false;
  });
}

function initBackToTop() {
  const button = one('#backToTop');
  if (!button) return;
  const update = () => button.classList.toggle('is-visible', window.scrollY > 550);
  window.addEventListener('scroll', update, {passive: true});
  button.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
  update();
}

document.addEventListener('DOMContentLoaded', () => {
  initHome(); initCatalog(); initVacancy(); initModal(); initFeedback(); initBackToTop();
});
