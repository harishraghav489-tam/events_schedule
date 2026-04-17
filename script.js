// ================= CONFIG =================
const STORAGE_KEY = "team-schedule-maker-v1";
const APP_TIME_ZONE = "Asia/Kolkata";
const DEFAULT_REMINDER_DAYS = [7, 3, 1];

// ================= SUPABASE =================
const config = window.TEAM_SCHEDULE_SHARED_CONFIG;

const supabase = window.supabase.createClient(
  config.supabase.url,
  config.supabase.anonKey
);

// ================= SEED =================
const seedState = {
  settings: { referenceDate: new Date().toISOString() },
  reminderLog: {},
  feed: [],
  teams: [],
  events: []
};

// ================= STATE =================
let state = structuredClone(seedState);

// ================= INIT =================
init();

async function init() {
  state = await loadState();
  renderAll();
}

// ================= LOAD =================
async function loadState() {
  try {
    const { data } = await supabase
      .from(config.supabase.table)
      .select("*")
      .eq("board_id", config.boardId)
      .single();

    if (data && data.shared_state) {
      return data.shared_state;
    }

    // Insert seed if empty
    await supabase.from(config.supabase.table).insert({
      board_id: config.boardId,
      shared_state: seedState,
      updated_at: new Date()
    });

    return structuredClone(seedState);

  } catch (err) {
    console.error("Load error:", err);
    return structuredClone(seedState);
  }
}

// ================= SAVE =================
async function persistState() {
  await supabase.from(config.supabase.table).upsert({
    board_id: config.boardId,
    shared_state: state,
    updated_at: new Date()
  });
}

// ================= EVENTS =================
function addEvent() {
  const name = prompt("Enter event name");
  if (!name) return;

  state.events.push({
    id: crypto.randomUUID(),
    name,
    milestones: [],
    assignments: []
  });

  update();
}

function deleteEvent(id) {
  state.events = state.events.filter(e => e.id !== id);
  update();
}

// ================= TEAMS =================
function addTeam() {
  const name = prompt("Enter team name");
  if (!name) return;

  state.teams.push({
    id: crypto.randomUUID(),
    name,
    members: []
  });

  update();
}

function deleteTeam(id) {
  state.teams = state.teams.filter(t => t.id !== id);
  update();
}

// ================= MEMBERS =================
function addMember(teamId) {
  const name = prompt("Enter member name");
  if (!name) return;

  const team = state.teams.find(t => t.id === teamId);
  team.members.push({
    id: crypto.randomUUID(),
    name
  });

  update();
}

function deleteMember(teamId, memberId) {
  const team = state.teams.find(t => t.id === teamId);
  team.members = team.members.filter(m => m.id !== memberId);
  update();
}

// ================= UPDATE =================
function update() {
  persistState();
  renderAll();
}

// ================= RENDER =================
function renderAll() {
  renderEvents();
  renderTeams();
}

// ================= EVENTS UI =================
function renderEvents() {
  const container = document.getElementById("eventGrid");
  if (!container) return;

  if (!state.events.length) {
    container.innerHTML = "<p>No events yet</p>";
    return;
  }

  container.innerHTML = state.events.map(e => `
    <div class="card" data-tilt>
      <h3>${e.name}</h3>
      <button onclick="deleteEvent('${e.id}')">❌ Delete</button>
    </div>
  `).join("");
}

// ================= TEAMS UI =================
function renderTeams() {
  const container = document.getElementById("teamGrid");
  if (!container) return;

  if (!state.teams.length) {
    container.innerHTML = "<p>No teams yet</p>";
    return;
  }

  container.innerHTML = state.teams.map(t => `
    <div class="card" data-tilt>
      <h3>${t.name}</h3>

      <button onclick="addMember('${t.id}')">+ Add Member</button>
      <button onclick="deleteTeam('${t.id}')">❌ Delete</button>

      <div>
        ${t.members.map(m => `
          <div>
            ${m.name}
            <button onclick="deleteMember('${t.id}','${m.id}')">❌</button>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}