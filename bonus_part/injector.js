/**
 * @author Md DI Sarwar zahan
 * @info:Inserts a new key/value into javascript object
 *
 *
 */

function injectAfter(Obj, afterKey, newKey, newValue) {

    var bin = new Object();
    var newKey_obj = {};
    var end_obj = {};
    var key;

    //If the afterKey  exist, then add new key/value on the correct position of the object
    if (afterKey in Obj) {
        //If the newKey already exists in the input array, then moved it to the correct position of the object
        if (newKey in Obj) {
            for (key in Obj) {

                if (key === afterKey) {
                    bin[key] = Obj[key];

                } else {
                    if (key === newKey) {
                        newKey_obj[key] = Obj[key];
                    } else {

                        end_obj[key] = Obj[key];

                    }
                }

            }
            //If marge together newKey and rest of the element, then add to the object
            newKey_obj = Object.assign(newKey_obj, end_obj);

            for (var x in newKey_obj) {

                bin[x] = newKey_obj[x];
            }

            //If the afterKey exists but newKey does not exist
        } else {

            for (key in Obj) {

                bin[key] = Obj[key];

                if (key === afterKey) {
                    bin[newKey] = newValue;
                }
            }

        }
        console.log(bin);
        reformat(bin); // print formatted output on HTML

    }
    //If the afterKey does not exist, then add new key/value at the end of the object
    else {
        //If the newKey exist  but  afterKey does not exist
        if (newKey in Obj) {
            for (key in Obj) {

                if (key === newKey) {
                    newKey_obj[key] = Obj[key];

                } else {

                    end_obj[key] = Obj[key];
                }
            }

            end_obj = Object.assign(end_obj, newKey_obj);
            for (var i in end_obj) {
                bin[i] = end_obj[i];
            }
            //If the afterKey and newKey does not exist
        } else {
            for (key in Obj) {

                bin[key] = Obj[key];
            }
            bin[newKey] = newValue;
        }
        console.log(bin);
        reformat(bin); // print formatted output on HTML

    }


}

//format the output for HTML
function reformat(bin) {
    var key;
    for (key in bin) {

        document.getElementById("inject").innerHTML += key + " = " + bin[key] + "<br>";
    }
}

injectAfter({foo: 3, bar: 1, baz: 42}, "foo", "baz", 42);