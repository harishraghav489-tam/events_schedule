window.TEAM_SCHEDULE_SHARED_CONFIG = {
  enabled: false,
  provider: "supabase",
  boardId: "main",
  supabase: {
    url: "REPLACE_WITH_SUPABASE_PROJECT_URL",
    anonKey: "REPLACE_WITH_SUPABASE_ANON_KEY",
    table: "shared_boards",
  },
};
