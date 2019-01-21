pragma solidity ^0.5.0;

contract SimpleStorage {

    uint myVariable;

    event Odd();

    event Even();

    function set(uint x) public {

        /// assert
        //        assert(x == 0);

        /// correct
        myVariable = x;

        if (x % 2 == 0) {
            emit Odd();
        } else {
            emit Even();
        }

        /// bad
        //        while (true) {
        //            myVariable = x;
        //        }
    }


    function get() view public returns (uint) {
        return myVariable;
    }
}