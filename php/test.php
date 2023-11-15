<?php

$num = random_int(1, 100);
$count = 0;

if ($num >= 40 && $num <= 60) {
    print "$num is between 40 and 60<br>";

} else {
    print "$num is not between 40 and 60<br>";
}

while ($count <= 10) {
    print $count."<br>";
    $count++;
}

?>