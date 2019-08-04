/**
 * @author Md Sarwar zahan
 *@info: Calculate the time of seven-segment digital clock at which the most amount of power is used.
 *
 */

function maxPower() {
    // Active segments count for digit 0 to 9.
    var dipSEG = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]; // example: 0=6,1=2,3=5
    var i_hour,j_hour, i_minute, j_minute, time;
    var maxLED = 0;
    var totalLED;
    var j_hourStart = 0;
    var j_hourMax = 9;
    var j_minuteStart = 0;
    var j_minuteStartMax = 9;

    // Generate first digit of the hour
    for (i_hour = 0; i_hour <= 2; i_hour++) {

        if (i_hour == 2) {
            j_hourStart = 0;
            j_hourMax = 3;
        }
        // Generate second digit of the hour
        for (j_hour = j_hourStart; j_hour <= j_hourMax; j_hour++) {

            // Generate first digit of the minutes
            for (i_minute = 0; i_minute <= 5; i_minute++) {
                if (i_minute == 6) {
                    j_minuteStart = 0;
                    j_minuteStartMax = 0;
                }
                // Generate second digit of the minutes
                for (j_minute = 0; j_minute <= j_minuteStartMax; j_minute++) {

                    if((i_hour === 0 && j_hour === 0 ) && (i_minute===0 && j_minute ===0)){continue;} // remove 00:00 from the clock

                    totalLED = dipSEG[i_hour] + dipSEG[j_hour] + dipSEG[i_minute] + dipSEG[j_minute];

                    // Check maximum LED
                    if (maxLED <= totalLED) {

                        maxLED = totalLED;
                        time = i_hour + ' ' + j_hour + ':' + i_minute + ' ' + j_minute;

                    }
                      // Display processing step on console
                    console.log(i_hour + ' ' + j_hour + ':' + i_minute + ' ' + j_minute + ' LED Count: ' + totalLED + '  ' );
                    document.getElementById("clock").innerHTML += i_hour + ' ' + j_hour + ':' + i_minute + ' ' + j_minute  + "<br>";

                }
            }

        }
    }

    console.log('Max power time '+time + '' + '  Segment Count: '+ maxLED);

    document.getElementById("max_power").innerHTML = "<h3>"+ time +  "</h3><h4>At this time, the total number of LED segments is: "+ maxLED +"</h4><br>";
}

maxPower();

