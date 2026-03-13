export type MonitorStatus = "UNK" | "UP" | "DOWN";

export interface CreateMonitorInput {
   host: string;
   label?: string | null;
   enabled?: boolean;
}

export interface UpdateMonitorInput {
   host?: string;
   label?: string | null;
   enabled?: boolean;
}

export interface MonitorFilters {
   enabled?: boolean;
   status?: MonitorStatus;
}

export interface PingCheckResult {
   success: boolean;
   responseTimeMs: number | null;
   error: string | null;
}

export interface MonitorResponse {
   id: string;
   host: string;
   label: string | null;
   enabled: boolean;
   status: MonitorStatus;
   consecutive_failures: number;
   last_response_ms: number | null;
   last_error: string | null;
   last_checked_at: string | null;
   created_at: string;
   updated_at: string;
}
