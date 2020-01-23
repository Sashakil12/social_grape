import { notificationsType } from "../types";

export const markNotificationsReadStarted = () => ({
  type: notificationsType.MARK_NOTIFICATIONS_READ_STARTED
});

export const markNotificationsReadSuccess = () => ({
  type: notificationsType.MARK_NOTIFICATIONS_READ_SUCCESS
});
export const markNotificationsReadFailed = () => ({
  type: notificationsType.MARK_NOTIFICATIONS_READ_FAILED
});
