<?php

use PHPUnit\Framework\TestCase;

require "injector.php";

class InjectorTest extends TestCase
{
    public function testInjector()
    {
        $first_test = ["foo" => 3, "bar" => 1];

        $obj_coo = new Injector();

        $this->assertSame( ["foo" => 3, "baz" => 42, "bar" => 1], $obj_coo->injectAfter($first_test,"foo", "baz", 42));  // test input = (["foo" => 3, "bar" => 1], "foo", "baz", 42)  output = ["foo" => 3, "baz" => 42, "bar" => 1]

        $second_test = ["foo" => 3, "bar" => 1];

        $this->assertSame(["foo" => 3, "bar" => 1,"baz" => 42], $obj_coo->injectAfter($second_test,"book", "baz", 42));  // if afterKey does not exits.

        $third_test = ["foo" => 3, "baz" => 42,"bar" => 1];

        $this->assertSame(["foo" => 3, "bar" => 1,"baz" => 42], $obj_coo->injectAfter($third_test,"food", "baz", 42));  // If the $newKey already exists



    }

}
