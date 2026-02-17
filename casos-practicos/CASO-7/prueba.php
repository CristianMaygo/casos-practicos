<?php

function primerosPrimos($n) {
    $primos = [];
    
    $numero = 2; 
    
    // Mientras no tengamos n primos
    while (count($primos) < $n) {
        if (esPrimo($numero)) {
            $primos[] = $numero; 
        }
        $numero++; 
    }
    
    return $primos;
}

function esPrimo($num) {
    if ($num < 2) {
        return false;
    }
    
    if ($num == 2) {
        return true;
    }
    
    if ($num % 2 == 0) {
        return false;
    }
    
    for ($i = 3; $i <= sqrt($num); $i += 2) {
        if ($num % $i == 0) {
            return false; 
        }
    }
    
    return true; 
}

// Ejemplos de uso
print_r(primerosPrimos(5));   // [2, 3, 5, 7, 11]
echo "\n";
print_r(primerosPrimos(10));  // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
echo "\n";
print_r(primerosPrimos(1));   // [2]

?>