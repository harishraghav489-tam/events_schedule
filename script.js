// ================= CONFIG =================
const sharedConfig = window.TEAM_SCHEDULE_SHARED_CONFIG;

let state = {
  events: [],
  teams: []
};

// ================= INIT =================
init();

async function init() {
  await loadFromSupabase();
  renderAll();
}

// ================= SUPABASE =================
const supabase = window.supabase.createClient(
  sharedConfig.supabase.url,
  sharedConfig.supabase.anonKey
);

async function loadFromSupabase() {
  const { data } = await supabase
    .from(sharedConfig.supabase.table)
    .select("*")
    .eq("board_id", sharedConfig.boardId)
    .single();

  if (data && data.shared_state) {
    state = data.shared_state;
  }
}

async function saveToSupabase() {
  await supabase.from(sharedConfig.supabase.table).upsert({
    board_id: sharedConfig.boardId,
    shared_state: state,
    updated_at: new Date()
  });
}

// ================= EVENTS =================
function addEvent() {
  const name = prompt("Enter event name");

  state.events.push({
    id: crypto.randomUUID(),
    name,
    deadlines: {
      registration: "",
      submission: "",
      eventDay: ""
    }
  });

  update();
}

function deleteEvent(eventId) {
  state.events = state.events.filter(e => e.id !== eventId);
  update();
}

// ================= TEAMS =================
function addTeam() {
  const name = prompt("Enter team name");

  state.teams.push({
    id: crypto.randomUUID(),
    name,
    members: []
  });

  update();
}

function deleteTeam(teamId) {
  state.teams = state.teams.filter(t => t.id !== teamId);
  update();
}

// ================= MEMBERS =================
function addMember(teamId) {
  const name = prompt("Enter member name");

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
  saveToSupabase();
  renderAll();
}

// ================= RENDER =================
function renderAll() {
  renderEvents();
  renderTeams();
}

// ================= RENDER EVENTS =================
function renderEvents() {
  const container = document.getElementById("eventGrid");

  container.innerHTML = "";

  state.events.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-card";

    div.innerHTML = `
      <h3>${event.name}</h3>

      <button onclick="deleteEvent('${event.id}')">
        ❌ Delete
      </button>
    `;

    container.appendChild(div);
  });
}

// ================= RENDER TEAMS =================
function renderTeams() {
  const container = document.getElementById("teamGrid");

  container.innerHTML = "";

  state.teams.forEach(team => {
    const div = document.createElement("div");
    div.className = "team-card";

    div.innerHTML = `
      <h3>${team.name}</h3>

      <button onclick="addMember('${team.id}')">+ Add Member</button>
      <button onclick="deleteTeam('${team.id}')">❌ Delete Team</button>

      <div>
        ${team.members.map(member => `
          <div>
            ${member.name}
            <button onclick="deleteMember('${team.id}', '${member.id}')">❌</button>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(div);
  });
}