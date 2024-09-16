export interface MonitoringMetric {
    id: number;          // Unique identifier for the metric
    deviceId: number;     // ID of the device being monitored
    userId: number;       // ID of the user who triggered the event (if applicable)
    status: string;       // Status of the device (e.g., "on", "off", "error")
    timestamp: Date;      // Timestamp when the metric was recorded
    message?: string;     // Optional message or description of the event
  }