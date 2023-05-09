ID = "ID"
INFO ="INFO"
LIMITS = "LIMITS"
GET = "GET"
SET = "SET"
CHN = "CHN"
ACK = "ACK"
ERR = "ERR"
DISCOVER = "DISCOVER"
STATUS = "STATUS"
PING = "PING"
ONOFF = "ONOFF"
MODE = "MODE"
FANSP = "FANSP"
VANEUD = "VANEUD"
VANELR = "VANELR"
SETPTEMP = "SETPTEMP"
AMBTEMP = "AMBTEMP"
ERRSTATUS = "ERRSTATUS"
ERRCODE = "ERRCODE"
ERROROU = "ERROROU"
ALL = "*"
ON = "ON"
OFF = "OFF"
HEAT = "HEAT"
COOL = "COOL"
FAN = "FAN"
DRY = "DRY"
AUTO = "AUTO"
SWING = "SWING"

const WMP = {
    ID : ID,
    INFO :INFO,
    LIMITS : LIMITS,
    GET : GET,
    SET : SET,
    CHN : CHN,
    ACK : ACK,
    ERR : ERR,
    DISCOVER : DISCOVER,
    STATUS : STATUS,
    PING : PING,
    ONOFF : ONOFF,
    MODE : MODE,
    FANSP : FANSP,
    VANEUD : VANEUD,
    VANELR : VANELR,
    SETPTEMP : SETPTEMP,
    AMBTEMP : AMBTEMP,
    ERRSTATUS : ERRSTATUS,
    ERRCODE : ERRCODE,
    ERROROU : ERROROU,
    ALL : ALL,
    ON : ON,
    OFF : OFF,
    ALLOWED_GET_COMMANDS : [ALL, ONOFF, MODE, SETPTEMP, FANSP, VANEUD, VANELR, AMBTEMP, ERRSTATUS, ERRCODE],
    ALLOWED_SET_COMMANDS : [ONOFF, MODE, SETPTEMP, FANSP, VANEUD, VANELR],
    LIMITED_RANGES : [ONOFF, MODE, FANSP, VANEUD, VANELR, SETPTEMP],
    ALLOWED_LIMITS :{ONOFF : [ON, OFF], MODE : [HEAT, COOL, FAN, DRY, AUTO], FANSP : ["1", "2", "3", "4", "5", "6", "7", "8", "9", AUTO], VANEUD : [AUTO, "1", "2", "3", "4", "5", "6", "7", "8", "9", SWING], VANELR : [AUTO, "1", "2", "3", "4", "5", "6", "7", "8", "9", SWING], SETPTEMP : [180,300]}
}

module.exports = WMP;