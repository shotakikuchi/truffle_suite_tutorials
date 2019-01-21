pragma solidity ^0.5.0;

contract Fibonacci {
    /// correct
    // uint[] fibseries;

    /// bad
    uint8[] fibseries;

    // n = how many in the series to return
    function generateFib(uint n) public {

        // set 1st and second entries
        fibseries.push(1);
        fibseries.push(1);

        // generate subsequent entries

        /// correct
        // for (uint i = 2; i < n; i++) {

        /// bad
        for (uint i = 1; i < n; i++) {

            /// correct
            // fibseries.push(fibseries[i - 1] + fibseries[i - 2]);

            /// bad
            fibseries.push(fibseries[i - 1] - fibseries[i - 2]);
        }
    }
}

