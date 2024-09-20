const SuccessResponse = {
  "retcode":0,
  "message":"OK",
  "data": {
    "code":"ok",
    "first_bind":false,
    "gt_result": {
        "risk_code":0,
        "gt":"",
        "challenge":"",
        "success":0,
        "is_risk":false
    }
  }
}

const ErrorResponse = {
  "data":null,
  "message":"Traveler, you've already checked in today~",
  "retcode":-5003
}

interface CheckInResponse {
  data: CheckInData | null,
  message: string,
  retcode: number
}

interface CheckInData {
  code: string,
  first_bind: boolean,
  gt_result: GtResult
}

interface GtResult {
  risk_code: number,
  gt: string,
  challenge: string,
  success: number,
  is_risk: boolean
}