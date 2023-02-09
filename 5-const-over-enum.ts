declare function daily(team: InsightsTeam): void;

enum InsightsTeam {
  Reporting = "reporting",
  WidgetsInfra = "widgets-infra",
}

daily(InsightsTeam.Reporting);
daily("reporting");

// -------------------[ Attempt 2 ]-------------------- //

declare function coolDaily(team: CoolInsightsTeam): void;

const COOL_INSIGHTS_TEAMS = {
  Reporting: "reporting",
  WidgetsInfra: "widgets-infra",
} as const;

type CoolInsightsTeam =
  typeof COOL_INSIGHTS_TEAMS[keyof typeof COOL_INSIGHTS_TEAMS];

coolDaily(COOL_INSIGHTS_TEAMS.Reporting);
coolDaily("widgets-infra");

// https://www.youtube.com/watch?v=jjMbPt_H3RQ
