#!/bin/sh

ARGS=""

FILE=/app/config/config.js
if [ -f "$FILE" ]; then
    echo "$FILE exists, using for configuration."
else 
    echo "$FILE does not exist, trying args."

    echo "Using server ${MQTT_SERVER}"

    if ! [ "${WMP_IPS}" = "" ]
    then
        ARGS="${ARGS} --wmp ${WMP_IPS}"
        echo "Got IP(s): ${WMP_IPS}"
    else
        echo "No IPs specified."
    fi

    if [ "${DISCOVER}" = "true" ]
    then
        ARGS="${ARGS} --discover"
        echo "Discovery is on."
    else
        echo "Discovery is off."
    fi

    if [ "${RETAIN}" = "true" ]
    then
        ARGS="${ARGS} --retain ${RETAIN}"
        echo "MQTT retain is on."
    else
        echo "MQTT retain is off."
    fi

    ARGS="${ARGS} --mqtt ${MQTT_SERVER}"
fi

while node app.js $ARGS; do
    echo "WMP2MQTT failed, restarting..."
done
