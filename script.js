const STORAGE_KEY = "team-schedule-maker-v1";
const CLIENT_ID_KEY = "team-schedule-maker-client-id";
const APP_TIME_ZONE = "Asia/Kolkata";
const DEFAULT_REMINDER_DAYS = [7, 3, 1];
const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "in_progress", label: "In progress" },
  { value: "submitted", label: "Submitted" },
  { value: "completed", label: "Completed" },
  { value: "blocked", label: "Blocked" },
  { value: "scheduled", label: "Scheduled" },
];

const seedState = {
  settings: {
    referenceDate: "2026-04-16T09:00:00+05:30",
  },
  reminderLog: {},
  feed: [
    {
      id: "seed-note",
      title: "Schedule seeded for April 16, 2026",
      detail:
        "Existing team assignments, deadlines, and visible milestone dates are loaded and ready to edit.",
      tone: "mint",
      createdAt: "2026-04-16T09:00:00+05:30",
    },
  ],
  teams: [
    {
      id: "team-ggsoc-core",
      name: "GGSOC Contributors",
      members: [
        "HarishRaghavendra",
        "Aruneshwaran",
        "Harini",
        "HemaVarthini",
        "Varun",
        "Saran",
      ],
    },
    {
      id: "team-ctf-coimbatore",
      name: "CTF Coimbatore Squad",
      members: ["Aruneshwaran", "Varun", "Harini"],
    },
    {
      id: "team-solutions-1",
      name: "Solutions Team 1",
      members: ["Aruneshwaran", "Saran", "Harini"],
    },
    {
      id: "team-solutions-2",
      name: "Solutions Team 2",
      members: ["HemaVarthini", "GokulKannan", "VethaYogesh", "Nikhil"],
    },
    {
      id: "team-industry-pitch",
      name: "Industry Pitch Deck Crew",
      members: [
        "Aruneshwaran",
        "HarishRaghavendra",
        "Harini",
        "HemaVarthini",
        "Varun",
        "Saran",
      ],
    },
    {
      id: "team-brinhack-duo",
      name: "Brinhack Duo",
      members: ["HarishRaghavendra", "Aruneshwaran"],
    },
  ],
  events: [
    {
      id: "event-ggsoc",
      name: "GGSOC 2026",
      overview:
        "Contributor timeline inspired by the shared GGSOC board. The main work window runs through the contribution period.",
      accent: "aqua",
      reminderDays: [7, 3, 1],
      milestones: [
        {
          id: "gg-launch",
          label: "Launch and applications open",
          type: "registration",
          start: "2026-03-24T09:00:00+05:30",
          end: "2026-03-24T18:00:00+05:30",
          note: "Program launch event",
        },
        {
          id: "gg-selection",
          label: "Selections",
          type: "announcement",
          start: "2026-03-31T09:00:00+05:30",
          end: "2026-04-04T18:00:00+05:30",
          note: "Selection results and confirmations",
        },
        {
          id: "gg-kickoff",
          label: "Onboarding and kick-off",
          type: "event",
          start: "2026-04-10T10:00:00+05:30",
          end: "2026-04-10T16:00:00+05:30",
          note: "Contributors onboard and projects go live",
        },
        {
          id: "gg-contribution",
          label: "Contribution period",
          type: "submission",
          start: "2026-04-16T00:00:00+05:30",
          end: "2026-06-30T23:59:00+05:30",
          note: "Project work, PRs, agents, and leaderboard climb",
        },
        {
          id: "gg-results",
          label: "Final evaluations and results",
          type: "announcement",
          start: "2026-06-20T09:00:00+05:30",
          end: "2026-07-10T18:00:00+05:30",
          note: "Evaluation wrap-up and result announcement",
        },
      ],
      assignments: [
        {
          teamId: "team-ggsoc-core",
          statuses: {
            registration: "submitted",
            submission: "in_progress",
            overall: "in_progress",
          },
          note: "Active contribution period.",
          lastCheckIn: "2026-04-16T09:00:00+05:30",
        },
      ],
    },
    {
      id: "event-ctf-coimbatore",
      name: "CTF Coimbatore",
      overview:
        "Short event sprint with one squad assigned for the April 17 competition.",
      accent: "amber",
      reminderDays: [7, 3, 1],
      milestones: [
        {
          id: "ctf-event",
          label: "Competition day",
          type: "event",
          start: "2026-04-17T09:00:00+05:30",
          end: "2026-04-17T18:00:00+05:30",
          note: "Capture the Flag at Coimbatore",
        },
      ],
      assignments: [
        {
          teamId: "team-ctf-coimbatore",
          statuses: {
            registration: "submitted",
            submission: "scheduled",
            overall: "scheduled",
          },
          note: "Prepare laptops and challenge notes.",
          lastCheckIn: "2026-04-16T09:00:00+05:30",
        },
      ],
    },
    {
      id: "event-solutions",
      name: "Solutions",
      overview:
        "Two teams are participating. The roadmap image provided the registration, submission, evaluation, and finale milestones.",
      accent: "coral",
      reminderDays: [7, 3, 1],
      milestones: [
        {
          id: "solutions-registration",
          label: "Registrations",
          type: "registration",
          start: "2026-03-06T09:00:00+05:30",
          end: "2026-04-15T23:59:00+05:30",
          note: "Registration closed one day before the current board date",
        },
        {
          id: "solutions-submission",
          label: "Prototype submission",
          type: "submission",
          start: "2026-03-13T09:00:00+05:30",
          end: "2026-04-24T23:59:00+05:30",
          note: "Prototype upload closes on April 24",
        },
        {
          id: "solutions-event",
          label: "Event day",
          type: "event",
          start: "2026-04-23T09:00:00+05:30",
          end: "2026-04-23T18:00:00+05:30",
          note: "User-provided event date",
        },
        {
          id: "solutions-evaluation",
          label: "Prototype evaluation",
          type: "evaluation",
          start: "2026-04-29T09:00:00+05:30",
          end: "2026-05-28T18:00:00+05:30",
          note: "Evaluation period",
        },
        {
          id: "solutions-top100",
          label: "Top 100 announcement",
          type: "announcement",
          start: "2026-05-29T09:00:00+05:30",
          end: "2026-05-29T18:00:00+05:30",
          note: "Results reveal",
        },
        {
          id: "solutions-live-hosting",
          label: "Live product hosting",
          type: "event",
          start: "2026-05-30T09:00:00+05:30",
          end: "2026-06-09T18:00:00+05:30",
          note: "Hosting and demos",
        },
        {
          id: "solutions-induction",
          label: "Induction session",
          type: "event",
          start: "2026-06-01T10:00:00+05:30",
          end: "2026-06-01T16:00:00+05:30",
          note: "Induction day",
        },
        {
          id: "solutions-top10",
          label: "Top 10 finalists announcement",
          type: "announcement",
          start: "2026-06-20T09:00:00+05:30",
          end: "2026-06-20T18:00:00+05:30",
          note: "Finalist shortlist",
        },
        {
          id: "solutions-grand-finale",
          label: "Grand finale",
          type: "event",
          start: "2026-06-27T09:00:00+05:30",
          end: "2026-06-27T18:00:00+05:30",
          note: "Final week of June",
        },
      ],
      assignments: [
        {
          teamId: "team-solutions-1",
          statuses: {
            registration: "submitted",
            submission: "in_progress",
            overall: "in_progress",
          },
          note: "Prototype still in progress.",
          lastCheckIn: "2026-04-16T09:00:00+05:30",
        },
        {
          teamId: "team-solutions-2",
          statuses: {
            registration: "submitted",
            submission: "pending",
            overall: "pending",
          },
          note: "Need a submission progress update.",
          lastCheckIn: "2026-04-16T09:00:00+05:30",
        },
      ],
    },
    {
      id: "event-industry-pitch",
      name: "Industry Pitch Deck",
      overview:
        "Pitch crew is assigned, but the registration, submission, and event dates still need to be filled in.",
      accent: "violet",
      reminderDays: [7, 3, 1],
      milestones: [
        {
          id: "pitch-registration",
          label: "Registration deadline",
          type: "registration",
          start: "",
          end: "",
          note: "Add the actual registration deadline",
        },
        {
          id: "pitch-submission",
          label: "Submission deadline",
          type: "submission",
          start: "",
          end: "",
          note: "Add the actual submission deadline",
        },
        {
          id: "pitch-event",
          label: "Event day",
          type: "event",
          start: "",
          end: "",
          note: "Add the event date",
        },
      ],
      assignments: [
        {
          teamId: "team-industry-pitch",
          statuses: {
            registration: "pending",
            submission: "pending",
            overall: "pending",
          },
          note: "Dates are pending.",
          lastCheckIn: "2026-04-16T09:00:00+05:30",
        },
      ],
    },
    {
      id: "event-brinhack",
      name: "Brinhack 1.0",
      overview:
        "Milestones were seeded from the shared BRINHACK screenshots, including registration, team formation, submissions, results, and finale dates.",
      accent: "mint",
      reminderDays: [7, 3, 1],
      milestones: [
        {
          id: "brin-registration",
          label: "Registration",
          type: "registration",
          start: "2026-03-25T12:00:00+05:30",
          end: "2026-04-25T12:00:00+05:30",
          note: "Registration close",
        },
        {
          id: "brin-team-formation",
          label: "Team formation",
          type: "registration",
          start: "2026-03-25T13:30:00+05:30",
          end: "2026-04-22T13:30:00+05:30",
          note: "Form team before PPT submission starts",
        },
        {
          id: "brin-phase-1",
          label: "PPT submission phase 1",
          type: "submission",
          start: "2026-04-01T00:00:00+05:30",
          end: "2026-04-27T00:00:00+05:30",
          note: "Problem statement, solution, stack, approach, impact",
        },
        {
          id: "brin-phase-2",
          label: "Prototype submission phase 2",
          type: "submission",
          start: "2026-04-27T00:00:00+05:30",
          end: "2026-05-03T00:00:00+05:30",
          note: "Working MVP and demo",
        },
        {
          id: "brin-screening",
          label: "Screening result announcement",
          type: "announcement",
          start: "2026-05-07T00:00:00+05:30",
          end: "2026-05-08T23:59:00+05:30",
          note: "Shortlist result",
        },
        {
          id: "brin-final-registration",
          label: "Final registration",
          type: "registration",
          start: "2026-05-08T00:00:00+05:30",
          end: "2026-05-13T23:59:00+05:30",
          note: "Fee payment and team confirmation",
        },
        {
          id: "brin-finale",
          label: "Finale",
          type: "event",
          start: "2026-05-15T14:36:00+05:30",
          end: "2026-05-16T16:36:00+05:30",
          note: "Offline hackathon round",
        },
      ],
      assignments: [
        {
          teamId: "team-brinhack-duo",
          statuses: {
            registration: "in_progress",
            submission: "pending",
            overall: "in_progress",
          },
          note: "Registration still open until April 25.",
          lastCheckIn: "2026-04-16T09:00:00+05:30",
        },
      ],
    },
  ],
};

let state = loadState();
let currentTimelineFilter = "all";
let currentMemberDraft = [];
let pendingPointerFrame = 0;
let pendingPointerX = 0;
let pendingPointerY = 0;
const tiltFrames = new WeakMap();
const supportsInteractiveMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sharedConfig = window.TEAM_SCHEDULE_SHARED_CONFIG || null;
const collaboration = {
  status: "local",
  detail: "Shared sync is disabled. The board is saving only in this browser.",
  configured: Boolean(sharedConfig?.enabled),
  user: null,
  initialized: false,
  isApplyingRemote: false,
  lastSharedFingerprint: "",
  writeTimer: 0,
  sdk: null,
  client: null,
  channel: null,
};

const todayText = document.querySelector("#todayText");
const heroMetrics = document.querySelector("#heroMetrics");
const nextDeadlineCard = document.querySelector("#nextDeadlineCard");
const syncStatusCard = document.querySelector("#syncStatusCard");
const timelineList = document.querySelector("#timelineList");
const eventGrid = document.querySelector("#eventGrid");
const statusList = document.querySelector("#statusList");
const teamGrid = document.querySelector("#teamGrid");
const notificationFeed = document.querySelector("#notificationFeed");
const toastHost = document.querySelector("#toastHost");
const quickAddMenu = document.querySelector("#quickAddMenu");
const eventDialog = document.querySelector("#eventDialog");
const teamDialog = document.querySelector("#teamDialog");
const eventForm = document.querySelector("#eventForm");
const teamForm = document.querySelector("#teamForm");
const eventTeamOptions = document.querySelector("#eventTeamOptions");
const teamEventOptions = document.querySelector("#teamEventOptions");
const milestoneBuilder = document.querySelector("#milestoneBuilder");
const milestoneRowTemplate = document.querySelector("#milestoneRowTemplate");
const memberChipList = document.querySelector("#memberChipList");

document.querySelector("#enableNotificationsBtn").addEventListener("click", requestNotifications);
document.querySelector("#openEventModalBtn").addEventListener("click", () => openEventDialog());
document.querySelector("#openTeamModalBtn").addEventListener("click", () => openTeamDialog());
document.querySelector("#toggleQuickAdd").addEventListener("click", toggleQuickAdd);
document.querySelector("#addMilestoneBtn").addEventListener("click", () => addMilestoneRow());
document.querySelector("#addMemberBtn").addEventListener("click", addMemberDraft);
document.querySelector("#memberInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addMemberDraft();
  }
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.querySelector(`#${button.dataset.closeDialog}`);
    if (dialog?.open) {
      dialog.close();
    }
  });
});

document.querySelectorAll("[data-open-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    quickAddMenu.hidden = true;
    if (button.dataset.openDialog === "event") {
      openEventDialog();
      return;
    }
    openTeamDialog();
  });
});

document.querySelector("#timelineFilters").addEventListener("click", (event) => {
  const target = event.target.closest("[data-filter]");
  if (!target) {
    return;
  }

  currentTimelineFilter = target.dataset.filter;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip === target);
  });
  renderTimeline();
});

eventForm.addEventListener("submit", handleEventSubmit);
teamForm.addEventListener("submit", handleTeamSubmit);

milestoneBuilder.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-milestone]");
  if (removeButton) {
    removeButton.closest("[data-milestone-row]").remove();
  }
});

eventGrid.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-event]");
  if (editButton) {
    openEventDialog(editButton.dataset.editEvent);
    return;
  }

  const manageTeamButton = event.target.closest("[data-manage-team]");
  if (manageTeamButton) {
    openTeamDialog(manageTeamButton.dataset.manageTeam);
  }
});

teamGrid.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-team]");
  if (!editButton) {
    return;
  }
  openTeamDialog(editButton.dataset.editTeam);
});

statusList.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save-status]");
  if (!saveButton) {
    return;
  }

  const eventId = saveButton.dataset.eventId;
  const teamId = saveButton.dataset.teamId;
  const card = saveButton.closest(".status-card");
  saveStatusUpdate(eventId, teamId, card);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".fab") && !event.target.closest(".fab-menu")) {
    quickAddMenu.hidden = true;
  }
});

document.addEventListener("mousemove", handlePointerGlow);
initializeTiltCards();
renderApp();
checkReminders();
window.setInterval(checkReminders, 60 * 1000);
initCollaboration();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return structuredClone(seedState);
    }
    const parsed = JSON.parse(raw);
    return mergeState(parsed);
  } catch (error) {
    console.error("Failed to load schedule state:", error);
    return structuredClone(seedState);
  }
}

function mergeState(parsed) {
  const fallback = structuredClone(seedState);
  return {
    settings: parsed.settings ?? fallback.settings,
    reminderLog: parsed.reminderLog ?? fallback.reminderLog,
    feed: Array.isArray(parsed.feed) ? parsed.feed : fallback.feed,
    teams: Array.isArray(parsed.teams) ? parsed.teams : fallback.teams,
    events: Array.isArray(parsed.events) ? parsed.events : fallback.events,
  };
}

function persistState(options = {}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (!options.skipRemote) {
    scheduleRemoteWrite();
  }
}

function renderApp() {
  todayText.textContent = formatDisplayDate(getNow(), { includeTime: false });
  renderHeroMetrics();
  renderNextDeadlineCard();
  renderSyncStatus();
  renderTimeline();
  renderEvents();
  renderTeams();
  renderStatusRequests();
  renderFeed();
  renderEventTeamOptions();
  renderTeamEventOptions();
  initializeTiltCards();
}

function renderHeroMetrics() {
  const upcoming = getUpcomingMilestones().filter((item) => item.anchorDate && item.daysUntil >= 0);
  const dueSoon = upcoming.filter((item) => item.daysUntil <= 7);
  const statusRequests = getStatusRequests();
  const activeAssignments = state.events.reduce(
    (count, event) => count + (event.assignments?.length ?? 0),
    0
  );

  const metrics = [
    {
      title: "Upcoming",
      value: upcoming.length,
      accent: "aqua",
      detail: "milestones ahead",
    },
    {
      title: "Due soon",
      value: dueSoon.length,
      accent: "amber",
      detail: "inside 7 days",
    },
    {
      title: "Assignments",
      value: activeAssignments,
      accent: "coral",
      detail: "team-to-event links",
    },
    {
      title: "Status asks",
      value: statusRequests.length,
      accent: "violet",
      detail: "need check-ins",
    },
  ];

  heroMetrics.innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric-card" data-accent="${metric.accent}" data-tilt>
          <span>${metric.title}</span>
          <strong>${metric.value}</strong>
          <span>${metric.detail}</span>
        </article>
      `
    )
    .join("");
}

function renderNextDeadlineCard() {
  const nextItem = getUpcomingMilestones()
    .filter((item) => item.anchorDate)
    .sort((left, right) => left.anchorDate - right.anchorDate)[0];

  if (!nextItem) {
    nextDeadlineCard.innerHTML = `<div class="empty-state">No future milestones are stored yet.</div>`;
    return;
  }

  nextDeadlineCard.innerHTML = `
    <div class="timeline-card" data-accent="${nextItem.event.accent}" data-tilt>
      <p class="timeline-card__event">${escapeHtml(nextItem.event.name)}</p>
      <h3>${escapeHtml(nextItem.milestone.label)}</h3>
      <div class="meta-row">
        <span class="deadline-chip" data-tone="${toneForType(nextItem.milestone.type)}">${prettyType(
          nextItem.milestone.type
        )}</span>
        <span class="deadline-chip">${formatRange(nextItem.milestone)}</span>
      </div>
      <p class="timeline-card__note">${nextItem.daysUntil === 0 ? "Due today" : `${nextItem.daysUntil} day${
        nextItem.daysUntil === 1 ? "" : "s"
      } left`}</p>
    </div>
  `;
}

function renderSyncStatus() {
  const toneMap = {
    local: "coral",
    connecting: "amber",
    live: "mint",
    error: "coral",
  };
  const labelMap = {
    local: "Local only",
    connecting: "Connecting",
    live: "Live shared board",
    error: "Connection issue",
  };

  syncStatusCard.innerHTML = `
    <div class="sync-status">
      <h3 class="sync-status__title">${labelMap[collaboration.status] || "Local only"}</h3>
      <div class="meta-row">
        <span class="pill" data-tone="${toneMap[collaboration.status] || "coral"}">${labelMap[
          collaboration.status
        ] || "Local only"}</span>
        ${
          collaboration.user?.uid
            ? `<span class="pill">User ${escapeHtml(collaboration.user.uid.slice(0, 8))}</span>`
            : ""
        }
      </div>
      <p class="sync-status__detail">${escapeHtml(collaboration.detail)}</p>
    </div>
  `;
}

function renderTimeline() {
  const items = getFilteredTimelineItems();
  if (!items.length) {
    timelineList.innerHTML = `<div class="empty-state">No milestones match the current filter.</div>`;
    return;
  }

  timelineList.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-card" data-accent="${item.event.accent}" data-tilt>
          <span class="timeline-card__date">${statusLabelForTimeline(item)}</span>
          <p class="timeline-card__event">${escapeHtml(item.event.name)}</p>
          <h3>${escapeHtml(item.milestone.label)}</h3>
          <div class="meta-row">
            <span class="pill" data-tone="${toneForType(item.milestone.type)}">${prettyType(
              item.milestone.type
            )}</span>
            <span class="pill">${formatRange(item.milestone)}</span>
          </div>
          <div class="meta-row">${renderTeamPills(item.event.assignments)}</div>
          <p class="timeline-card__note">${escapeHtml(item.milestone.note || "No extra note yet.")}</p>
        </article>
      `
    )
    .join("");
}

function renderEvents() {
  if (!state.events.length) {
    eventGrid.innerHTML = `<div class="empty-state">No events yet. Use Add Event to create one.</div>`;
    return;
  }

  eventGrid.innerHTML = state.events
    .map((event) => {
      const summary = buildEventSummary(event);
      return `
        <article class="event-card" data-accent="${event.accent}" data-tilt>
          <div class="panel__header">
            <div>
              <p class="panel__eyebrow">Event</p>
              <h3>${escapeHtml(event.name)}</h3>
            </div>
            <button class="btn btn--ghost btn--small" data-edit-event="${event.id}" type="button">
              Edit
            </button>
          </div>

          <p class="event-card__copy">${escapeHtml(event.overview || "No overview yet.")}</p>

          <div class="event-card__summary">
            ${renderSummaryItem("Registration", summary.registration, "amber")}
            ${renderSummaryItem("Submission", summary.submission, "coral")}
            ${renderSummaryItem("Event day", summary.eventDay, "mint")}
          </div>

          <div class="event-card__teams">
            ${(event.assignments || [])
              .map((assignment) => renderEventAssignmentCard(assignment))
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTeams() {
  if (!state.teams.length) {
    teamGrid.innerHTML = `<div class="empty-state">No teams yet. Use Add Team to create one.</div>`;
    return;
  }

  teamGrid.innerHTML = state.teams
    .map((team) => {
      const linkedEvents = state.events.filter((event) =>
        (event.assignments || []).some((assignment) => assignment.teamId === team.id)
      );

      return `
        <article class="team-card" data-accent="aqua" data-tilt>
          <div class="panel__header">
            <div>
              <p class="panel__eyebrow">Team</p>
              <h3>${escapeHtml(team.name)}</h3>
            </div>
            <button class="btn btn--ghost btn--small" data-edit-team="${team.id}" type="button">
              Edit
            </button>
          </div>

          <p class="team-card__copy">${team.members.length} member${team.members.length === 1 ? "" : "s"}</p>

          <div class="chip-list">
            ${team.members
              .map((member) => `<span class="team-member">${escapeHtml(readableName(member))}</span>`)
              .join("")}
          </div>

          <div class="team-card__events">
            ${linkedEvents.length
              ? linkedEvents
                  .map(
                    (event) =>
                      `<span class="event-tag">${escapeHtml(event.name)}</span>`
                  )
                  .join("")
              : `<span class="event-tag">No event linked</span>`}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderStatusRequests() {
  const requests = getStatusRequests();
  if (!requests.length) {
    statusList.innerHTML = `<div class="empty-state">No open status prompts right now. Everything is current.</div>`;
    return;
  }

  statusList.innerHTML = requests
    .map((request) => {
      const statuses = request.assignment.statuses || {};
      return `
        <article class="status-card" data-accent="${request.event.accent}" data-tilt>
          <p class="panel__eyebrow">Status check</p>
          <h3>${escapeHtml(request.team.name)} - ${escapeHtml(request.event.name)}</h3>
          <p class="status-card__meta">
            ${escapeHtml(request.reason)}
          </p>

          <div class="status-card__grid">
            <label class="field">
              <span>Registration</span>
              ${buildStatusSelect("registration", statuses.registration)}
            </label>
            <label class="field">
              <span>Submission</span>
              ${buildStatusSelect("submission", statuses.submission)}
            </label>
            <label class="field">
              <span>Overall</span>
              ${buildStatusSelect("overall", statuses.overall)}
            </label>
            <label class="field">
              <span>Latest note</span>
              <textarea class="status-note" data-note>${escapeHtml(request.assignment.note || "")}</textarea>
            </label>
          </div>

          <div class="status-card__actions">
            <button
              class="btn btn--primary btn--small"
              data-save-status
              data-event-id="${request.event.id}"
              data-team-id="${request.team.id}"
              type="button"
            >
              Save status
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderFeed() {
  if (!state.feed.length) {
    notificationFeed.innerHTML = `<div class="empty-state">No reminders or notes yet.</div>`;
    return;
  }

  const feedItems = [...state.feed]
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt))
    .slice(0, 10);

  notificationFeed.innerHTML = feedItems
    .map(
      (item) => `
        <article class="notification-item">
          <div>
            <p class="panel__eyebrow">Feed</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="notification-item__meta">${escapeHtml(item.detail)}</p>
          </div>
          <div class="meta-row">
            <span class="pill" data-tone="${item.tone || "aqua"}">${formatDisplayDate(new Date(item.createdAt), {
              includeTime: true,
            })}</span>
          </div>
        </article>
      `
    )
    .join("");
}

async function initCollaboration() {
  if (!hasValidSharedConfig(sharedConfig)) {
    collaboration.status = "local";
    collaboration.detail = "Shared sync is disabled. Update shared-config.js with your Supabase project values to make this board live for the team.";
    renderSyncStatus();
    return;
  }

  updateCollaborationStatus("connecting", "Connecting to Supabase and preparing the shared board...");

  try {
    collaboration.sdk = loadSupabaseSdk();
    collaboration.user = { uid: getOrCreateClientId() };
    collaboration.client = collaboration.sdk.createClient(
      sharedConfig.supabase.url,
      sharedConfig.supabase.anonKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      }
    );

    await loadInitialSharedBoard();
    startSharedListener();
  } catch (error) {
    console.error("Shared sync init failed:", error);
    updateCollaborationStatus(
      "error",
      "Supabase could not connect. The app is still working locally in this browser."
    );
  }
}

function hasValidSharedConfig(config) {
  if (!config?.enabled || config.provider !== "supabase" || !config.supabase) {
    return false;
  }

  const requiredKeys = ["url", "anonKey"];
  return requiredKeys.every((key) => {
    const value = config.supabase[key];
    return value && !String(value).startsWith("REPLACE_WITH_");
  });
}

function loadSupabaseSdk() {
  if (!window.supabase?.createClient) {
    throw new Error("Supabase browser client failed to load.");
  }
  return window.supabase;
}

async function loadInitialSharedBoard() {
  const table = getSharedBoardTable();
  const boardId = getSharedBoardId();
  const { data, error } = await collaboration.client
    .from(table)
    .select("board_id, shared_state, updated_at, updated_by")
    .eq("board_id", boardId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data?.shared_state) {
    await pushRemoteWrite();
    updateCollaborationStatus("live", "Shared board created in Supabase. Teammates can now see live updates.");
    return;
  }

  const remoteFingerprint = fingerprintSharedState(data.shared_state);
  collaboration.lastSharedFingerprint = remoteFingerprint;
  applyRemoteSharedState(data.shared_state, false);
  updateCollaborationStatus("live", "Connected to Supabase. Live changes are syncing.");
}

function startSharedListener() {
  if (collaboration.initialized || !collaboration.client || !collaboration.sdk) {
    return;
  }

  collaboration.initialized = true;
  const table = getSharedBoardTable();
  const boardId = getSharedBoardId();
  const channelName = `shared-board-${boardId}`;

  collaboration.channel = collaboration.client
    .channel(channelName)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table,
        filter: `board_id=eq.${boardId}`,
      },
      (payload) => {
        const row = payload.new || payload.record || null;
        const remoteSharedState = row?.shared_state || null;
        if (!remoteSharedState) {
          return;
        }

        const remoteFingerprint = fingerprintSharedState(remoteSharedState);
        if (remoteFingerprint === collaboration.lastSharedFingerprint) {
          updateCollaborationStatus("live", "Connected to Supabase. Live changes are syncing.");
          return;
        }

        const fromAnotherUser = row.updated_by && row.updated_by !== collaboration.user?.uid;
        applyRemoteSharedState(remoteSharedState, fromAnotherUser);
        collaboration.lastSharedFingerprint = remoteFingerprint;
        updateCollaborationStatus("live", "Connected to Supabase. Live changes are syncing.");
      }
    )
    .subscribe((status) => {
      if (status === "SUBSCRIBED") {
        updateCollaborationStatus("live", "Connected to Supabase. Live changes are syncing.");
        return;
      }

      if (status === "CHANNEL_ERROR" || status === "TIMED_OUT" || status === "CLOSED") {
        updateCollaborationStatus(
          "error",
          "Lost the live Supabase connection. Local edits still work and stay in this browser."
        );
      }
    });
}

function scheduleRemoteWrite() {
  if (!collaboration.client || collaboration.isApplyingRemote || collaboration.status === "error") {
    return;
  }

  window.clearTimeout(collaboration.writeTimer);
  collaboration.writeTimer = window.setTimeout(() => {
    pushRemoteWrite();
  }, 350);
}

async function pushRemoteWrite() {
  if (!collaboration.client || !collaboration.sdk || collaboration.isApplyingRemote) {
    return;
  }

  try {
    const sharedState = extractSharedState(state);
    collaboration.lastSharedFingerprint = fingerprintSharedState(sharedState);
    const { error } = await collaboration.client.from(getSharedBoardTable()).upsert(
      {
        board_id: getSharedBoardId(),
        shared_state: sharedState,
        updated_at: new Date().toISOString(),
        updated_by: collaboration.user?.uid || getOrCreateClientId(),
      },
      { onConflict: "board_id" }
    );

    if (error) {
      throw error;
    }

    updateCollaborationStatus("live", "Connected to Supabase. Live changes are syncing.");
  } catch (error) {
    console.error("Shared board write failed:", error);
    updateCollaborationStatus(
      "error",
      "Could not push changes to Supabase. Your latest edits are still saved locally."
    );
  }
}

function extractSharedState(appState) {
  return {
    settings: appState.settings,
    teams: appState.teams,
    events: appState.events,
  };
}

function applyRemoteSharedState(remoteSharedState, fromAnotherUser) {
  collaboration.isApplyingRemote = true;
  const currentFeed = state.feed;
  const currentReminderLog = state.reminderLog;

  state = {
    settings: remoteSharedState.settings ?? state.settings,
    teams: Array.isArray(remoteSharedState.teams) ? remoteSharedState.teams : state.teams,
    events: Array.isArray(remoteSharedState.events) ? remoteSharedState.events : state.events,
    feed: currentFeed,
    reminderLog: currentReminderLog,
  };

  if (fromAnotherUser) {
    addFeedItem(
      "Live update synced",
      "A teammate changed the shared board. Your view was refreshed automatically.",
      "aqua"
    );
    showToast("Board updated", "A teammate changed the shared schedule.");
  }

  persistState({ skipRemote: true });
  collaboration.isApplyingRemote = false;
  renderApp();
}

function updateCollaborationStatus(status, detail) {
  collaboration.status = status;
  collaboration.detail = detail;
  renderSyncStatus();
}

function fingerprintSharedState(value) {
  return JSON.stringify(value);
}

function getSharedBoardTable() {
  return sharedConfig?.supabase?.table || "shared_boards";
}

function getSharedBoardId() {
  return sharedConfig?.boardId || "main";
}

function getOrCreateClientId() {
  let value = localStorage.getItem(CLIENT_ID_KEY);
  if (!value) {
    value = crypto.randomUUID();
    localStorage.setItem(CLIENT_ID_KEY, value);
  }
  return value;
}

function renderEventTeamOptions(selectedIds = []) {
  eventTeamOptions.innerHTML = renderCheckboxCards(
    state.teams.map((team) => ({
      id: team.id,
      title: team.name,
      caption: `${team.members.length} member${team.members.length === 1 ? "" : "s"}`,
      checked: selectedIds.includes(team.id),
    })),
    "eventTeams"
  );
}

function renderTeamEventOptions(selectedIds = []) {
  teamEventOptions.innerHTML = renderCheckboxCards(
    state.events.map((event) => ({
      id: event.id,
      title: event.name,
      caption: event.overview || "Event assignment",
      checked: selectedIds.includes(event.id),
    })),
    "teamEvents"
  );
}

function renderCheckboxCards(items, name) {
  if (!items.length) {
    return `<div class="empty-state">Nothing available yet.</div>`;
  }

  return items
    .map(
      (item) => `
        <label class="checkbox-card">
          <input name="${name}" value="${item.id}" type="checkbox" ${item.checked ? "checked" : ""} />
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <div class="notification-item__meta">${escapeHtml(item.caption)}</div>
          </div>
        </label>
      `
    )
    .join("");
}

function openEventDialog(eventId) {
  eventForm.reset();
  milestoneBuilder.innerHTML = "";
  document.querySelector("#eventDialogTitle").textContent = eventId ? "Edit Event" : "Add Event";

  if (!eventId) {
    document.querySelector("#eventId").value = "";
    document.querySelector("#eventReminders").value = DEFAULT_REMINDER_DAYS.join(",");
    addMilestoneRow({ type: "registration", label: "Registration deadline" });
    addMilestoneRow({ type: "submission", label: "Submission deadline" });
    addMilestoneRow({ type: "event", label: "Event day" });
    renderEventTeamOptions();
    eventDialog.showModal();
    return;
  }

  const event = state.events.find((item) => item.id === eventId);
  if (!event) {
    return;
  }

  document.querySelector("#eventId").value = event.id;
  document.querySelector("#eventName").value = event.name;
  document.querySelector("#eventOverview").value = event.overview || "";
  document.querySelector("#eventAccent").value = event.accent || "aqua";
  document.querySelector("#eventReminders").value = (event.reminderDays || DEFAULT_REMINDER_DAYS).join(",");

  (event.milestones || []).forEach((milestone) => addMilestoneRow(milestone));
  renderEventTeamOptions((event.assignments || []).map((assignment) => assignment.teamId));
  eventDialog.showModal();
}

function openTeamDialog(teamId) {
  teamForm.reset();
  currentMemberDraft = [];
  document.querySelector("#teamDialogTitle").textContent = teamId ? "Edit Team" : "Add Team";

  if (!teamId) {
    document.querySelector("#teamId").value = "";
    renderMemberDraft();
    renderTeamEventOptions();
    teamDialog.showModal();
    return;
  }

  const team = state.teams.find((item) => item.id === teamId);
  if (!team) {
    return;
  }

  currentMemberDraft = [...team.members];
  document.querySelector("#teamId").value = team.id;
  document.querySelector("#teamName").value = team.name;
  renderMemberDraft();
  renderTeamEventOptions(
    state.events
      .filter((event) => (event.assignments || []).some((assignment) => assignment.teamId === team.id))
      .map((event) => event.id)
  );
  teamDialog.showModal();
}

function addMilestoneRow(milestone = {}) {
  const fragment = milestoneRowTemplate.content.cloneNode(true);
  const row = fragment.querySelector("[data-milestone-row]");
  row.querySelector('[data-milestone="label"]').value = milestone.label || "";
  row.querySelector('[data-milestone="type"]').value = milestone.type || "event";
  row.querySelector('[data-milestone="start"]').value = toDateTimeLocalValue(milestone.start);
  row.querySelector('[data-milestone="end"]').value = toDateTimeLocalValue(milestone.end);
  row.querySelector('[data-milestone="note"]').value = milestone.note || "";
  milestoneBuilder.appendChild(fragment);
}

function addMemberDraft() {
  const input = document.querySelector("#memberInput");
  const value = input.value.trim();
  if (!value) {
    return;
  }
  currentMemberDraft.push(value.replace(/\s+/g, " ").trim());
  input.value = "";
  renderMemberDraft();
}

function renderMemberDraft() {
  if (!currentMemberDraft.length) {
    memberChipList.innerHTML = `<div class="empty-state">No members added yet.</div>`;
    return;
  }

  memberChipList.innerHTML = currentMemberDraft
    .map(
      (member, index) => `
        <span class="chip">
          ${escapeHtml(readableName(member))}
          <button type="button" data-remove-member="${index}" aria-label="Remove ${escapeHtml(member)}">
            x
          </button>
        </span>
      `
    )
    .join("");

  memberChipList.querySelectorAll("[data-remove-member]").forEach((button) => {
    button.addEventListener("click", () => {
      currentMemberDraft.splice(Number(button.dataset.removeMember), 1);
      renderMemberDraft();
    });
  });
}

function handleEventSubmit(event) {
  event.preventDefault();

  const id = document.querySelector("#eventId").value || `event-${crypto.randomUUID()}`;
  const selectedTeams = getCheckedValues("eventTeams");
  const milestones = collectMilestones();
  if (!milestones.length) {
    showToast("Add a milestone", "Each event needs at least one date or checkpoint.");
    return;
  }
  const existing = state.events.find((item) => item.id === id);
  const existingAssignments = new Map(
    (existing?.assignments || []).map((assignment) => [assignment.teamId, assignment])
  );
  const reminders = parseReminderDays(document.querySelector("#eventReminders").value);

  const nextEvent = {
    id,
    name: document.querySelector("#eventName").value.trim(),
    overview: document.querySelector("#eventOverview").value.trim(),
    accent: document.querySelector("#eventAccent").value,
    reminderDays: reminders.length ? reminders : DEFAULT_REMINDER_DAYS,
    milestones,
    assignments: selectedTeams.map((teamId) => {
      const current = existingAssignments.get(teamId);
      return (
        current || {
          teamId,
          statuses: {
            registration: "pending",
            submission: "pending",
            overall: "pending",
          },
          note: "",
          lastCheckIn: "",
        }
      );
    }),
  };

  if (existing) {
    state.events = state.events.map((item) => (item.id === id ? nextEvent : item));
    addFeedItem(`Updated ${nextEvent.name}`, "Event details and team assignments were saved.", nextEvent.accent);
  } else {
    state.events.push(nextEvent);
    addFeedItem(`Added ${nextEvent.name}`, "New event saved to the board.", nextEvent.accent);
  }

  persistState();
  renderApp();
  eventDialog.close();
  showToast("Event saved", `${nextEvent.name} is now on the board.`);
}

function handleTeamSubmit(event) {
  event.preventDefault();

  const id = document.querySelector("#teamId").value || `team-${crypto.randomUUID()}`;
  if (!currentMemberDraft.length) {
    showToast("Add a member", "A team should have at least one member before you save it.");
    return;
  }
  const nextTeam = {
    id,
    name: document.querySelector("#teamName").value.trim(),
    members: [...currentMemberDraft],
  };
  const selectedEvents = getCheckedValues("teamEvents");
  const existing = state.teams.find((team) => team.id === id);

  if (existing) {
    state.teams = state.teams.map((team) => (team.id === id ? nextTeam : team));
    addFeedItem(`Updated ${nextTeam.name}`, "Team details were saved.", "aqua");
  } else {
    state.teams.push(nextTeam);
    addFeedItem(`Added ${nextTeam.name}`, "New team created.", "aqua");
  }

  syncTeamAssignments(id, selectedEvents);
  persistState();
  renderApp();
  teamDialog.close();
  showToast("Team saved", `${nextTeam.name} is ready for assignments.`);
}

function collectMilestones() {
  const rows = [...milestoneBuilder.querySelectorAll("[data-milestone-row]")];
  return rows
    .map((row) => ({
      id: `mile-${crypto.randomUUID()}`,
      label: row.querySelector('[data-milestone="label"]').value.trim(),
      type: row.querySelector('[data-milestone="type"]').value,
      start: normalizeDateValue(row.querySelector('[data-milestone="start"]').value),
      end: normalizeDateValue(row.querySelector('[data-milestone="end"]').value),
      note: row.querySelector('[data-milestone="note"]').value.trim(),
    }))
    .filter((milestone) => milestone.label);
}

function syncTeamAssignments(teamId, selectedEventIds) {
  state.events = state.events.map((event) => {
    const assignments = [...(event.assignments || [])];
    const hasAssignment = assignments.some((assignment) => assignment.teamId === teamId);

    if (selectedEventIds.includes(event.id) && !hasAssignment) {
      assignments.push({
        teamId,
        statuses: {
          registration: "pending",
          submission: "pending",
          overall: "pending",
        },
        note: "",
        lastCheckIn: "",
      });
    }

    if (!selectedEventIds.includes(event.id)) {
      return {
        ...event,
        assignments: assignments.filter((assignment) => assignment.teamId !== teamId),
      };
    }

    return {
      ...event,
      assignments,
    };
  });
}

function saveStatusUpdate(eventId, teamId, card) {
  state.events = state.events.map((event) => {
    if (event.id !== eventId) {
      return event;
    }

    return {
      ...event,
      assignments: (event.assignments || []).map((assignment) => {
        if (assignment.teamId !== teamId) {
          return assignment;
        }

        return {
          ...assignment,
          statuses: {
            registration: card.querySelector('[data-status-role="registration"]').value,
            submission: card.querySelector('[data-status-role="submission"]').value,
            overall: card.querySelector('[data-status-role="overall"]').value,
          },
          note: card.querySelector("[data-note]").value.trim(),
          lastCheckIn: new Date().toISOString(),
        };
      }),
    };
  });

  const eventItem = state.events.find((item) => item.id === eventId);
  const team = state.teams.find((item) => item.id === teamId);
  addFeedItem(
    `Status updated for ${team?.name || "team"}`,
    `${team?.name || "A team"} check-in saved for ${eventItem?.name || "the event"}.`,
    eventItem?.accent || "aqua"
  );
  persistState();
  renderApp();
  showToast("Status saved", `${team?.name || "Team"} was updated.`);
}

function getUpcomingMilestones() {
  const now = getNow();
  const items = [];

  state.events.forEach((event) => {
    (event.milestones || []).forEach((milestone) => {
      const anchorDate = getMilestoneAnchorDate(milestone);
      const daysUntil = anchorDate ? dayDifference(now, anchorDate) : Number.POSITIVE_INFINITY;
      items.push({
        event,
        milestone,
        anchorDate,
        daysUntil,
      });
    });
  });

  return items.sort((left, right) => {
    if (!left.anchorDate && !right.anchorDate) {
      return 0;
    }
    if (!left.anchorDate) {
      return 1;
    }
    if (!right.anchorDate) {
      return -1;
    }
    return left.anchorDate - right.anchorDate;
  });
}

function getFilteredTimelineItems() {
  const items = getUpcomingMilestones().filter((item) => item.anchorDate && item.daysUntil >= -3);

  return items.filter((item) => {
    if (currentTimelineFilter === "all") {
      return true;
    }
    if (currentTimelineFilter === "dueSoon") {
      return item.daysUntil <= 7;
    }
    if (currentTimelineFilter === "event") {
      return item.milestone.type === "event";
    }
    return item.milestone.type === currentTimelineFilter;
  });
}

function getStatusRequests() {
  const now = getNow();
  const requests = [];

  state.events.forEach((event) => {
    const nextMilestone = (event.milestones || [])
      .map((milestone) => ({
        milestone,
        anchor: getMilestoneAnchorDate(milestone),
      }))
      .filter((item) => item.anchor)
      .sort((left, right) => left.anchor - right.anchor)
      .find((item) => item.anchor >= now || dayDifference(now, item.anchor) >= -2);

    (event.assignments || []).forEach((assignment) => {
      const team = state.teams.find((item) => item.id === assignment.teamId);
      const statuses = assignment.statuses || {};
      const dueSoon = nextMilestone ? dayDifference(now, nextMilestone.anchor) <= 5 : false;
      const incomplete =
        ["pending", "in_progress", "scheduled"].includes(statuses.submission) ||
        ["pending", "in_progress", "scheduled"].includes(statuses.overall) ||
        !assignment.lastCheckIn;

      if (!team || (!dueSoon && !incomplete)) {
        return;
      }

      requests.push({
        event,
        team,
        assignment,
        reason: nextMilestone
          ? `${prettyType(nextMilestone.milestone.type)} is ${dayDifference(now, nextMilestone.anchor) === 0 ? "today" : `in ${Math.max(dayDifference(now, nextMilestone.anchor), 0)} day(s)`}. Update the team progress or mark it submitted/completed.`
          : "Dates are still missing for this event. Update the team status after adding the real dates.",
      });
    });
  });

  return requests;
}

function buildEventSummary(event) {
  return {
    registration: summarizeTypeDate(event, "registration"),
    submission: summarizeTypeDate(event, "submission"),
    eventDay: summarizeTypeDate(event, "event"),
  };
}

function summarizeTypeDate(event, type) {
  const matching = (event.milestones || [])
    .filter((milestone) => milestone.type === type && getMilestoneAnchorDate(milestone))
    .sort((left, right) => getMilestoneAnchorDate(left) - getMilestoneAnchorDate(right));

  if (!matching.length) {
    return "Date pending";
  }

  const milestone = type === "event" ? matching[0] : matching[matching.length - 1];
  return formatRange(milestone);
}

function renderSummaryItem(label, value, tone) {
  return `
    <div class="event-card__summary-item">
      <span class="panel__eyebrow">${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <span class="deadline-chip" data-tone="${tone}">${escapeHtml(label)}</span>
    </div>
  `;
}

function renderEventAssignmentCard(assignment) {
  const team = state.teams.find((item) => item.id === assignment.teamId);
  const statuses = assignment.statuses || {};
  if (!team) {
    return "";
  }

  return `
    <div class="event-team-card">
      <h4>${escapeHtml(team.name)}</h4>
      <div class="meta-row">
        <span class="status-badge" data-status="${statuses.registration || "pending"}">Registration: ${prettyStatus(
          statuses.registration
        )}</span>
        <span class="status-badge" data-status="${statuses.submission || "pending"}">Submission: ${prettyStatus(
          statuses.submission
        )}</span>
        <span class="status-badge" data-status="${statuses.overall || "pending"}">Overall: ${prettyStatus(
          statuses.overall
        )}</span>
      </div>
      <div class="meta-row">
        ${team.members
          .slice(0, 4)
          .map((member) => `<span class="team-member">${escapeHtml(readableName(member))}</span>`)
          .join("")}
        ${team.members.length > 4 ? `<span class="team-member">+${team.members.length - 4} more</span>` : ""}
      </div>
      <div class="event-team-card__actions">
        <button class="btn btn--ghost btn--small" data-manage-team="${team.id}" type="button">
          Manage members
        </button>
      </div>
    </div>
  `;
}

function renderTeamPills(assignments = []) {
  if (!assignments.length) {
    return `<span class="pill">No teams assigned</span>`;
  }

  return assignments
    .map((assignment) => {
      const team = state.teams.find((item) => item.id === assignment.teamId);
      return `<span class="pill">${escapeHtml(team?.name || "Unknown team")}</span>`;
    })
    .join("");
}

function buildStatusSelect(role, selectedValue = "pending") {
  return `
    <select class="status-select" data-status-role="${role}">
      ${STATUS_OPTIONS.map(
        (option) => `
          <option value="${option.value}" ${option.value === selectedValue ? "selected" : ""}>
            ${option.label}
          </option>
        `
      ).join("")}
    </select>
  `;
}

function requestNotifications() {
  if (!("Notification" in window)) {
    showToast("Notifications unavailable", "This browser does not support desktop notifications.");
    return;
  }

  Notification.requestPermission().then((permission) => {
    const approved = permission === "granted";
    showToast(
      approved ? "Reminders enabled" : "Notifications blocked",
      approved
        ? "Browser reminders will appear when deadlines hit the configured reminder windows."
        : "Use the in-app reminder feed if browser permission stays blocked."
    );
  });
}

function checkReminders() {
  const now = getNow();
  let notificationsSent = 0;

  state.events.forEach((event) => {
    const reminderDays = event.reminderDays?.length ? event.reminderDays : DEFAULT_REMINDER_DAYS;
    (event.milestones || []).forEach((milestone) => {
      const anchor = getMilestoneAnchorDate(milestone);
      if (!anchor) {
        return;
      }

      const daysUntil = dayDifference(now, anchor);
      reminderDays.forEach((lead) => {
        if (daysUntil !== lead) {
          return;
        }

        const key = `${event.id}:${milestone.id}:${lead}:${formatDateKey(anchor)}`;
        if (state.reminderLog[key]) {
          return;
        }

        const title = `${event.name} - ${milestone.label}`;
        const detail =
          lead === 0
            ? `${prettyType(milestone.type)} is due today.`
            : `${prettyType(milestone.type)} is due in ${lead} day${lead === 1 ? "" : "s"}.`;

        state.reminderLog[key] = new Date().toISOString();
        addFeedItem(title, detail, toneForType(milestone.type));
        notify(title, detail);
        notificationsSent += 1;
      });
    });
  });

  if (notificationsSent) {
    persistState();
    renderFeed();
  }
}

function notify(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
  }
  showToast(title, body);
}

function addFeedItem(title, detail, tone = "aqua") {
  state.feed.push({
    id: `feed-${crypto.randomUUID()}`,
    title,
    detail,
    tone,
    createdAt: new Date().toISOString(),
  });
  state.feed = state.feed.slice(-40);
}

function showToast(title, detail) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<strong>${escapeHtml(title)}</strong><p>${escapeHtml(detail)}</p>`;
  toastHost.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3600);
}

function toggleQuickAdd() {
  quickAddMenu.hidden = !quickAddMenu.hidden;
}

function handlePointerGlow(event) {
  if (!supportsInteractiveMotion) {
    return;
  }

  pendingPointerX = event.clientX;
  pendingPointerY = event.clientY;

  if (pendingPointerFrame) {
    return;
  }

  pendingPointerFrame = window.requestAnimationFrame(() => {
    document.documentElement.style.setProperty("--mouse-x", `${pendingPointerX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${pendingPointerY}px`);
    pendingPointerFrame = 0;
  });
}

function initializeTiltCards() {
  if (!supportsInteractiveMotion) {
    return;
  }

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    if (card.dataset.tiltBound === "true") {
      return;
    }

    card.dataset.tiltBound = "true";
    card.addEventListener("mousemove", (event) => applyTilt(card, event));
    card.addEventListener("mouseleave", () => resetTilt(card));
  });
}

function applyTilt(card, event) {
  if (!supportsInteractiveMotion) {
    return;
  }

  if (tiltFrames.get(card)) {
    return;
  }

  const frame = window.requestAnimationFrame(() => {
    const bounds = card.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left;
    const offsetY = event.clientY - bounds.top;
    const rotateY = ((offsetX / bounds.width) - 0.5) * 8;
    const rotateX = (0.5 - offsetY / bounds.height) * 6;

    card.style.setProperty("--card-rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--card-rotate-y", `${rotateY.toFixed(2)}deg`);
    tiltFrames.delete(card);
  });

  tiltFrames.set(card, frame);
}

function resetTilt(card) {
  const frame = tiltFrames.get(card);
  if (frame) {
    window.cancelAnimationFrame(frame);
    tiltFrames.delete(card);
  }
  card.style.setProperty("--card-rotate-x", "0deg");
  card.style.setProperty("--card-rotate-y", "0deg");
}

function getMilestoneAnchorDate(milestone) {
  const basis = ["registration", "submission"].includes(milestone.type)
    ? milestone.end || milestone.start
    : milestone.start || milestone.end;
  return basis ? new Date(basis) : null;
}

function statusLabelForTimeline(item) {
  if (item.daysUntil < 0) {
    return `${Math.abs(item.daysUntil)} day${Math.abs(item.daysUntil) === 1 ? "" : "s"} ago`;
  }
  if (item.daysUntil === 0) {
    return "Today";
  }
  if (item.daysUntil === 1) {
    return "Tomorrow";
  }
  return `In ${item.daysUntil} days`;
}

function dayDifference(fromDate, toDate) {
  const fromKey = new Date(fromDate);
  const toKey = new Date(toDate);
  fromKey.setHours(0, 0, 0, 0);
  toKey.setHours(0, 0, 0, 0);
  return Math.round((toKey - fromKey) / (24 * 60 * 60 * 1000));
}

function formatRange(milestone) {
  const start = milestone.start ? new Date(milestone.start) : null;
  const end = milestone.end ? new Date(milestone.end) : null;

  if (start && end) {
    const sameDay = formatDateKey(start) === formatDateKey(end);
    if (sameDay) {
      return formatDisplayDate(start, { includeTime: true });
    }
    return `${formatDisplayDate(start, { includeTime: true })} → ${formatDisplayDate(end, {
      includeTime: true,
    })}`;
  }

  if (start) {
    return formatDisplayDate(start, { includeTime: true });
  }

  if (end) {
    return formatDisplayDate(end, { includeTime: true });
  }

  return "Date pending";
}

function formatDisplayDate(date, options = {}) {
  const formatter = new Intl.DateTimeFormat("en-IN", {
    dateStyle: options.includeTime ? "medium" : "long",
    timeStyle: options.includeTime ? "short" : undefined,
    timeZone: APP_TIME_ZONE,
  });
  return formatter.format(date);
}

function formatDateKey(date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: APP_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function getNow() {
  return new Date();
}

function prettyType(type) {
  const map = {
    registration: "Registration",
    submission: "Submission",
    event: "Event",
    announcement: "Announcement",
    evaluation: "Evaluation",
    other: "Other",
  };
  return map[type] || "Milestone";
}

function prettyStatus(status) {
  const found = STATUS_OPTIONS.find((option) => option.value === status);
  return found?.label || "Pending";
}

function readableName(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2").trim();
}

function toneForType(type) {
  const map = {
    registration: "amber",
    submission: "coral",
    event: "mint",
    announcement: "violet",
    evaluation: "aqua",
    other: "aqua",
  };
  return map[type] || "aqua";
}

function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function parseReminderDays(value) {
  return value
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item) && item >= 0);
}

function normalizeDateValue(value) {
  if (!value) {
    return "";
  }
  return new Date(value).toISOString();
}

function toDateTimeLocalValue(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}