import TimeZone from "./timezone.dto"

export default interface TimeZoneResponse {
    code: number,
    status: number,
    data: TimeZone,
}