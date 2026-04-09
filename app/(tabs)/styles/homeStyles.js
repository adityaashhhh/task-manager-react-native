import { StyleSheet } from "react-native";

const palette = {
  // Core brand
  indigo: "#7C6FF7",
  indigoDeep: "#5B54E8",
  indigoGlow: "#A89BFF",
  indigoLight: "#1E1B4B",

  // Backgrounds — deep dark with subtle warmth
  background: "#0D0D12",
  surface: "#16161F",
  surfaceRaised: "#1E1E2A",
  surfaceHover: "#252535",

  // Borders
  border: "#2A2A3D",
  borderSubtle: "#1F1F2E",
  borderGlow: "#7C6FF730",

  // Text
  textPrimary: "#F0EFFE",
  textSecondary: "#8B8BAA",
  textMuted: "#4A4A6A",

  // Status colors
  red: "#FF5370",
  redBg: "#FF537015",
  amber: "#FFAE57",
  amberBg: "#FFAE5715",
  green: "#3EFFA8",
  greenBg: "#3EFFA810",

  // Accent gradient stops
  gradStart: "#7C6FF7",
  gradEnd: "#C471F5",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 18,
    paddingTop: 8,
  },

  // ── Header ──────────────────────────────────────────
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },

  greeting: {
    fontSize: 12,
    color: palette.textMuted,
    marginBottom: 3,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: palette.textPrimary,
    letterSpacing: -1,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: palette.indigoDeep,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: palette.indigoGlow,
  },

  avatarText: {
    fontSize: 13,
    fontWeight: "700",
    color: palette.indigoGlow,
  },

  // ── Stats row ────────────────────────────────────────
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },

  statCard: {
    flex: 1,
    backgroundColor: palette.surfaceRaised,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: palette.border,
  },

  statLabel: {
    fontSize: 10,
    color: palette.textMuted,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  statValue: {
    fontSize: 26,
    fontWeight: "700",
    color: palette.textPrimary,
  },

  statSub: {
    fontSize: 11,
    color: palette.indigoGlow,
    marginTop: 3,
  },

  // ── Input ────────────────────────────────────────────
  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    backgroundColor: palette.surfaceRaised,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 15,
    color: palette.textPrimary,
  },

  addButton: {
    width: 48,
    height: 48,
    backgroundColor: palette.indigo,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: palette.indigo,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 8,
  },

  // ── Filters ──────────────────────────────────────────
  filterRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 22,
  },

  pill: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 100,
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
  },

  pillActive: {
    backgroundColor: palette.indigo,
    borderColor: palette.indigo,
    shadowColor: palette.indigo,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },

  pillText: {
    fontSize: 13,
    color: palette.textSecondary,
    fontWeight: "500",
  },

  pillTextActive: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  // ── Section label ─────────────────────────────────────
  sectionLabel: {
    fontSize: 10,
    color: palette.textMuted,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 12,
  },

  // ── Task card ─────────────────────────────────────────
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: palette.surface,
    borderRadius: 18,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: palette.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },

  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: palette.textMuted,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  checkCircleDone: {
    backgroundColor: palette.indigo,
    borderColor: palette.indigo,
    shadowColor: palette.indigo,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 4,
  },

  taskInfo: {
    flex: 1,
  },

  taskText: {
    fontSize: 15,
    color: palette.textPrimary,
    fontWeight: "500",
    lineHeight: 21,
  },

  taskTextDone: {
    color: palette.textMuted,
    textDecorationLine: "line-through",
    fontWeight: "400",
  },

  taskMeta: {
    fontSize: 11,
    color: palette.textSecondary,
    marginTop: 3,
  },

  priorityDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  // ── Priority colors ───────────────────────────────────
  priorityHigh: { backgroundColor: palette.red },
  priorityMedium: { backgroundColor: palette.amber },
  priorityLow: { backgroundColor: palette.green },
  priorityNone: { backgroundColor: palette.border },

  // ── Delete button ─────────────────────────────────────
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: palette.redBg,
    borderWidth: 1,
    borderColor: "#FF537030",
    alignItems: "center",
    justifyContent: "center",
  },

  deleteButtonText: {
    color: palette.red,
    fontSize: 12,
    fontWeight: "700",
  },

  // ── Empty state ───────────────────────────────────────
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 56,
  },

  emptyText: {
    fontSize: 15,
    color: palette.textMuted,
    marginTop: 14,
    fontWeight: "500",
  },
});

export { palette };

