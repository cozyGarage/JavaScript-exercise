// incase isNaN() can't be used, this is the program to help:
function IsNumeric(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}



//Test case
01. IsNumeric('-1')      => true
02. IsNumeric('-1.5')    => true
03. IsNumeric('0')       => true
04. IsNumeric('0.42')    => true
05. IsNumeric('.42')     => true
06. IsNumeric('99,999')  => false
07. IsNumeric('0x89f')   => false
08. IsNumeric('#abcdef') => false
09. IsNumeric('1.2.3')   => false
10. IsNumeric('')        => false
11. IsNumeric('blah')    => false
// Whitespace strings:
12. IsNumeric(' ')    == true;
13. IsNumeric('\t\t') == true;
14. IsNumeric('\n\r') == true;

// Number literals:
15. IsNumeric(-1)  == false;
16. IsNumeric(0)   == false;
17. IsNumeric(1.1) == false;
18. IsNumeric(8e5) == false;
