<?php


class Injector
{

    public function injectAfter(array $array, $afterKey, $newKey, $newValue)
    {
        $bin = array();
        $newKey_arr = array();
        $end_arr = array();

        //If the afterKey  exist, then add new key/value on the correct position of the array
        if (array_key_exists($afterKey, $array)) {

            //If the newKey already exists in the input array, then moved it to the correct position of the array
            if (array_key_exists($newKey, $array)) {

                foreach ($array as $key => $values) {

                    if ($key == $afterKey) {
                        $bin[$key] = $values;

                    } else {
                        if ($key == $newKey) {
                            $newKey_arr[$key] = $values;
                        }
                        $end_arr[$key] = $values;
                    }

                }
                //If marge together newKey and rest of the element, then add to the array
                $newKey_arr = array_merge($newKey_arr, $end_arr);

                foreach ($newKey_arr as $key => $values) {
                    $bin[$key] = $values;

                }
                //If the afterKey exists but newKey does not exist
            } else {


                foreach ($array as $key => $value) {

                    $bin[$key] = $value;

                    if ($key === $afterKey) {

                        $bin[$newKey] = $newValue;
                    }
                }
            }
            // print_r($bin); // Expected output with array

            return $bin;
            // return reformat($bin); // print formatted output

            //If the afterKey does not exist, then add new key/value at the end of the array
        } else {
            //If the newKey exist  but  afterKey does not exist
            if (array_key_exists($newKey, $array)) {

                foreach ($array as $key => $values) {

                    if ($key == $newKey) {
                        $newKey_arr[$key] = $values;
                    } else {
                        $end_arr[$key] = $values;
                    }
                }
                $end_arr = array_merge($end_arr, $newKey_arr);
                foreach ($end_arr as $key => $values) {
                    $bin[$key] = $values;
                }
                //If the afterKey and newKey does not exist
            } else {
                foreach ($array as $key => $value) {
                    $bin[$key] = $value;
                }
                $bin[$newKey] = $newValue;

            }
            return $bin;
            // print_r($bin); // Expected output with array
            // return reformat($bin); // formatted output
        }

    }


}

?>